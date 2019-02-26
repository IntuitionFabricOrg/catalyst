from collections import defaultdict
from time import time
from numbers import Number
from typing import Any, Dict

from torchnet.meter import AverageValueMeter


class TimerManager:
    def __init__(self):
        self._starts = {}
        self.elapsed = {}

    def start(self, name):
        self._starts[name] = time()

    def stop(self, name):
        assert name in self._starts, "Timer wasn't started"
        
        self.elapsed[name] = time() - self._starts[name]
        del self._starts[name]

    def reset(self):
        self.elapsed = {}
        self._starts = {}


class MetricManager:

    @staticmethod
    def _to_single_value(value):
        if hasattr(value, "item"):
            value = value.item()

        assert isinstance(value, Number), \
            f"{type(value)} is not a python number"

        # noinspection PyTypeChecker
        return float(value)

    def __init__(self, main_metric="valid/loss", reduce=True):
        self._reduce = reduce
        self._main_metric_name = main_metric
        self._meters: Dict[str, AverageValueMeter] = None
        self._batch_values: Dict[str, float] = None
        self.epoch_values: Dict[str, float] = None

        self.best_main_metric_value: float = \
            float("+inf") if self._reduce else float("-inf")
        self.is_best: bool = None

        self._current_loader_name: str = None

    def begin_epoch(self):
        self.epoch_values = {}

    def end_epoch(self):
        assert self._main_metric_name in self.epoch_values, \
            f"{self._main_metric_name} value is not available by the epoch end"

        if self._reduce:
            self.is_best = self.main_metric_value < self.best_main_metric_value
        else:
            self.is_best = self.main_metric_value > self.best_main_metric_value

        if self.is_best:
            self.best_main_metric_value = self.main_metric_value

    def begin_loader(self, name: str):
        self._current_loader_name = name
        self._meters = defaultdict(AverageValueMeter)

    def end_loader(self):
        for name, meter in self._meters.items():
            epoch_key = f"{self._current_loader_name}/{name}"
            self.epoch_values[epoch_key] = meter.mean

        self._current_loader_name = None

    def begin_batch(self):
        self._batch_values = {}

    def end_batch(self):
        if len(self._meters) != 0:
            assert self._meters.keys() == self._batch_values.keys(), \
                "Metric set is not consistent among batches"

        for name, value in self._batch_values.items():
            self._meters[name].add(value)

    def add_batch_value(
        self,
        name: str = None,
        value=None,
        metrics_dict: Dict[str, Any] = None
    ):
        metrics_dict = metrics_dict or {}

        if name:
            metrics_dict[name] = value

        for name, value in metrics_dict.items():
            self._batch_values[name] = self._to_single_value(value)

    @property
    def batch_values(self):
        self.add_batch_value()
        return self._batch_values

    @property
    def main_metric_value(self) -> float:
        assert self._main_metric_name in self.epoch_values, \
            f"{self._main_metric_name} is not available yet"

        return self.epoch_values[self._main_metric_name]