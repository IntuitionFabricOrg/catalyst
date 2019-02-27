Search.setIndex({docnames:["api/contrib","api/data","api/dl","api/rl","api/utils","changelog","index","info/contributing","info/examples","info/license"],envversion:55,filenames:["api/contrib.rst","api/data.rst","api/dl.rst","api/rl.rst","api/utils.rst","changelog.rst","index.rst","info/contributing.rst","info/examples.rst","info/license.rst"],objects:{"catalyst.contrib":{models:[0,2,0,"-"],optimizers:[0,2,0,"-"]},"catalyst.contrib.criterion":{BCEDiceLoss:[0,0,1,""],BCESoftmaxLoss:[0,0,1,""],CenterLoss:[0,0,1,""],ContrastiveDistanceLoss:[0,0,1,""],ContrastiveEmbeddingLoss:[0,0,1,""],DiceLoss:[0,0,1,""],FocalLoss:[0,0,1,""],HuberLoss:[0,0,1,""],LossBinary:[0,0,1,""],LossMulti:[0,0,1,""],NaiveCrossEntropyLoss:[0,0,1,""]},"catalyst.contrib.criterion.ContrastiveEmbeddingLoss":{forward:[0,1,1,""]},"catalyst.contrib.models":{ResNetUnet:[0,0,1,""],UNet:[0,0,1,""]},"catalyst.contrib.models.ResNetUnet":{__init__:[0,1,1,""],forward:[0,1,1,""]},"catalyst.contrib.modules":{Flatten:[0,0,1,""],GlobalAttnPool2d:[0,0,1,""],GlobalAvgAttnPool2d:[0,0,1,""],GlobalAvgPool2d:[0,0,1,""],GlobalConcatAttnPool2d:[0,0,1,""],GlobalConcatPool2d:[0,0,1,""],GlobalMaxAttnPool2d:[0,0,1,""],GlobalMaxPool2d:[0,0,1,""],Lambda:[0,0,1,""],NoisyLinear:[0,0,1,""]},"catalyst.contrib.registry":{Registry:[0,0,1,""]},"catalyst.contrib.registry.Registry":{agent:[0,3,1,""],algorithm:[0,3,1,""],callback:[0,3,1,""],criterion:[0,3,1,""],environment:[0,3,1,""],get_agent:[0,3,1,""],get_algorithm:[0,3,1,""],get_callback:[0,3,1,""],get_criterion:[0,3,1,""],get_environment:[0,3,1,""],get_fn:[0,3,1,""],get_grad_clip_fn:[0,3,1,""],get_model:[0,3,1,""],get_optimizer:[0,3,1,""],get_scheduler:[0,3,1,""],model:[0,3,1,""],module:[0,3,1,""],name2nn:[0,3,1,""],optimizer:[0,3,1,""]},"catalyst.data":{__main__:[1,2,0,"-"],augmentor:[1,2,0,"-"],collate_fn:[1,2,0,"-"],dataset:[1,2,0,"-"],mixin:[1,2,0,"-"],sampler:[1,2,0,"-"]},"catalyst.data.augmentor":{Augmentor:[1,0,1,""],AugmentorKeys:[1,0,1,""],MixupAugmentor:[1,0,1,""]},"catalyst.data.augmentor.Augmentor":{__init__:[1,1,1,""]},"catalyst.data.augmentor.AugmentorKeys":{__init__:[1,1,1,""]},"catalyst.data.collate_fn":{FilteringCollateFn:[1,0,1,""]},"catalyst.data.collate_fn.FilteringCollateFn":{__call__:[1,1,1,""],__init__:[1,1,1,""]},"catalyst.data.dataset":{ListDataset:[1,0,1,""],MergeDataset:[1,0,1,""]},"catalyst.data.dataset.ListDataset":{__getitem__:[1,1,1,""],__init__:[1,1,1,""],__len__:[1,1,1,""]},"catalyst.data.dataset.MergeDataset":{__getitem__:[1,1,1,""],__init__:[1,1,1,""]},"catalyst.data.mixin":{ImageHistogramMixin:[1,0,1,""]},"catalyst.data.mixin.ImageHistogramMixin":{__init__:[1,1,1,""]},"catalyst.data.reader":{BaseReader:[1,0,1,""],ImageReader:[1,0,1,""],LambdaReader:[1,0,1,""],ReaderCompose:[1,0,1,""],ScalarReader:[1,0,1,""]},"catalyst.data.reader.BaseReader":{__call__:[1,1,1,""],__init__:[1,1,1,""]},"catalyst.data.reader.ImageReader":{__call__:[1,1,1,""],__init__:[1,1,1,""]},"catalyst.data.reader.LambdaReader":{__call__:[1,1,1,""],__init__:[1,1,1,""]},"catalyst.data.reader.ReaderCompose":{__call__:[1,1,1,""],__init__:[1,1,1,""]},"catalyst.data.reader.ScalarReader":{__call__:[1,1,1,""],__init__:[1,1,1,""]},"catalyst.data.sampler":{BalanceClassSampler:[1,0,1,""]},"catalyst.data.sampler.BalanceClassSampler":{__init__:[1,1,1,""],__iter__:[1,1,1,""],__len__:[1,1,1,""]},"catalyst.dl":{datasource:[2,2,0,"-"],fp16:[2,2,0,"-"],initialization:[2,2,0,"-"],metrics:[2,2,0,"-"],runner:[2,2,0,"-"],state:[2,2,0,"-"],utils:[2,2,0,"-"]},"catalyst.dl.callbacks":{Callback:[2,0,1,""],CallbackCompose:[2,0,1,""],DiceCallback:[2,0,1,""],JaccardCallback:[2,0,1,""],LRFinder:[2,0,1,""],LRUpdater:[2,0,1,""],MapKCallback:[2,0,1,""],MetricCallback:[2,0,1,""],MultiMetricCallback:[2,0,1,""],OneCycleLR:[2,0,1,""],PrecisionCallback:[2,0,1,""],utils:[2,2,0,"-"]},"catalyst.dl.callbacks.Callback":{on_batch_end:[2,1,1,""],on_batch_start:[2,1,1,""],on_epoch_end:[2,1,1,""],on_epoch_start:[2,1,1,""],on_infer_end:[2,1,1,""],on_infer_start:[2,1,1,""],on_loader_end:[2,1,1,""],on_loader_start:[2,1,1,""],on_train_end:[2,1,1,""],on_train_start:[2,1,1,""]},"catalyst.dl.callbacks.CallbackCompose":{on_batch_end:[2,1,1,""],on_batch_start:[2,1,1,""],on_epoch_end:[2,1,1,""],on_epoch_start:[2,1,1,""],on_infer_end:[2,1,1,""],on_infer_start:[2,1,1,""],on_loader_end:[2,1,1,""],on_loader_start:[2,1,1,""],on_train_end:[2,1,1,""],on_train_start:[2,1,1,""]},"catalyst.dl.callbacks.DiceCallback":{__init__:[2,1,1,""]},"catalyst.dl.callbacks.JaccardCallback":{__init__:[2,1,1,""]},"catalyst.dl.callbacks.LRFinder":{__init__:[2,1,1,""],calc_lr:[2,1,1,""],on_batch_end:[2,1,1,""],on_loader_start:[2,1,1,""]},"catalyst.dl.callbacks.LRUpdater":{__init__:[2,1,1,""],calc_lr:[2,1,1,""],calc_momentum:[2,1,1,""],on_batch_end:[2,1,1,""],on_loader_start:[2,1,1,""],on_train_start:[2,1,1,""],update_optimizer:[2,1,1,""]},"catalyst.dl.callbacks.MapKCallback":{__init__:[2,1,1,""]},"catalyst.dl.callbacks.MetricCallback":{on_batch_end:[2,1,1,""]},"catalyst.dl.callbacks.MultiMetricCallback":{on_batch_end:[2,1,1,""]},"catalyst.dl.callbacks.OneCycleLR":{__init__:[2,1,1,""],calc_lr:[2,1,1,""],calc_momentum:[2,1,1,""],on_loader_start:[2,1,1,""]},"catalyst.dl.callbacks.PrecisionCallback":{__init__:[2,1,1,""]},"catalyst.dl.callbacks.utils":{get_optimizer_momentum:[2,4,1,""],get_val_from_metric:[2,4,1,""],process_epoch_metrics:[2,4,1,""],scheduler_step:[2,4,1,""],to_batch_metrics:[2,4,1,""]},"catalyst.dl.datasource":{AbstractDataSource:[2,0,1,""]},"catalyst.dl.datasource.AbstractDataSource":{prepare_loaders:[2,3,1,""],prepare_transforms:[2,3,1,""]},"catalyst.dl.fp16":{BN_convert_float:[2,4,1,""],Fp16Wrap:[2,0,1,""],copy_grads:[2,4,1,""],copy_params:[2,4,1,""]},"catalyst.dl.fp16.Fp16Wrap":{forward:[2,1,1,""]},"catalyst.dl.initialization":{create_optimal_inner_init:[2,4,1,""],outer_init:[2,4,1,""]},"catalyst.dl.metrics":{average_precision:[2,4,1,""],dice:[2,4,1,""],jaccard:[2,4,1,""],mean_average_precision:[2,4,1,""],precision:[2,4,1,""]},"catalyst.dl.runner":{BaseModelRunner:[2,0,1,""],SupervisedModelRunner:[2,0,1,""]},"catalyst.dl.runner.BaseModelRunner":{__init__:[2,1,1,""],batch2device:[2,1,1,""],batch_handler:[2,1,1,""],infer:[2,1,1,""],prepare_callbacks:[2,3,1,""],prepare_model_stuff:[2,3,1,""],prepare_stage_args:[2,3,1,""],prepare_stage_model:[2,3,1,""],run:[2,1,1,""],run_event:[2,1,1,""],train:[2,1,1,""],train_stages:[2,1,1,""]},"catalyst.dl.runner.SupervisedModelRunner":{batch2device:[2,1,1,""],batch_handler:[2,1,1,""]},"catalyst.dl.state":{RunnerState:[2,0,1,""]},"catalyst.dl.state.RunnerState":{get_key:[2,1,1,""],on_batch_end_post:[2,3,1,""],on_batch_end_pre:[2,3,1,""],on_batch_start_post:[2,3,1,""],on_batch_start_pre:[2,3,1,""],on_epoch_end_post:[2,3,1,""],on_epoch_end_pre:[2,3,1,""],on_epoch_start_post:[2,3,1,""],on_epoch_start_pre:[2,3,1,""],on_infer_end_post:[2,3,1,""],on_infer_end_pre:[2,3,1,""],on_infer_start_post:[2,3,1,""],on_infer_start_pre:[2,3,1,""],on_loader_end_post:[2,3,1,""],on_loader_end_pre:[2,3,1,""],on_loader_start_post:[2,3,1,""],on_loader_start_pre:[2,3,1,""],on_stage_init_post:[2,3,1,""],on_stage_init_pre:[2,3,1,""],on_train_end_post:[2,3,1,""],on_train_end_pre:[2,3,1,""],on_train_start_post:[2,3,1,""],on_train_start_pre:[2,3,1,""],set_key:[2,1,1,""]},"catalyst.dl.utils":{UtilsFactory:[2,0,1,""]},"catalyst.dl.utils.UtilsFactory":{create_loader:[2,3,1,""],create_loggers:[2,3,1,""],create_tflogger:[2,3,1,""],load_checkpoint:[2,3,1,""],pack_checkpoint:[2,3,1,""],prepare_device:[2,3,1,""],prepare_model:[2,3,1,""],save_checkpoint:[2,3,1,""],unpack_checkpoint:[2,3,1,""]},"catalyst.rl":{random_process:[3,2,0,"-"]},"catalyst.rl.agents":{Actor:[3,0,1,""],Critic:[3,0,1,""],ValueCritic:[3,0,1,""],layers:[3,2,0,"-"],utils:[3,2,0,"-"]},"catalyst.rl.agents.Actor":{create_from_params:[3,5,1,""]},"catalyst.rl.agents.Critic":{create_from_params:[3,5,1,""]},"catalyst.rl.agents.ValueCritic":{create_from_params:[3,1,1,""]},"catalyst.rl.agents.layers":{CouplingLayer:[3,0,1,""],GaussPolicy:[3,0,1,""],LamaPooling:[3,0,1,""],RealNVPPolicy:[3,0,1,""],SquashingLayer:[3,0,1,""],StateActionNet:[3,0,1,""],StateNet:[3,0,1,""],TemporalAttentionPooling:[3,0,1,""]},"catalyst.rl.agents.layers.CouplingLayer":{__init__:[3,1,1,""],forward:[3,1,1,""]},"catalyst.rl.agents.layers.GaussPolicy":{forward:[3,1,1,""]},"catalyst.rl.agents.layers.LamaPooling":{available_poolings:[3,6,1,""],forward:[3,1,1,""]},"catalyst.rl.agents.layers.RealNVPPolicy":{forward:[3,1,1,""]},"catalyst.rl.agents.layers.SquashingLayer":{__init__:[3,1,1,""],forward:[3,1,1,""]},"catalyst.rl.agents.layers.StateActionNet":{forward:[3,1,1,""]},"catalyst.rl.agents.layers.StateNet":{forward:[3,1,1,""]},"catalyst.rl.agents.layers.TemporalAttentionPooling":{forward:[3,1,1,""],name2fn:[3,6,1,""]},"catalyst.rl.agents.utils":{get_out_features:[3,4,1,""],log1p_exp:[3,4,1,""],normal_log_prob:[3,4,1,""],normal_sample:[3,4,1,""]},"catalyst.rl.offpolicy":{algorithms:[3,2,0,"-"],sampler:[3,2,0,"-"],trainer:[3,2,0,"-"]},"catalyst.rl.offpolicy.algorithms":{core:[3,2,0,"-"],ddpg:[3,2,0,"-"],sac:[3,2,0,"-"],td3:[3,2,0,"-"]},"catalyst.rl.offpolicy.algorithms.core":{Algorithm:[3,0,1,""]},"catalyst.rl.offpolicy.algorithms.core.Algorithm":{actor_update:[3,1,1,""],critic_update:[3,1,1,""],get_td_errors:[3,1,1,""],load_checkpoint:[3,1,1,""],prepare_checkpoint:[3,1,1,""],prepare_for_sampler:[3,5,1,""],prepare_for_trainer:[3,5,1,""],target_actor_update:[3,1,1,""],target_critic_update:[3,1,1,""],train:[3,1,1,""],update_step:[3,1,1,""]},"catalyst.rl.offpolicy.algorithms.ddpg":{DDPG:[3,0,1,""]},"catalyst.rl.offpolicy.algorithms.ddpg.DDPG":{update_step:[3,1,1,""]},"catalyst.rl.offpolicy.algorithms.sac":{SAC:[3,0,1,""]},"catalyst.rl.offpolicy.algorithms.sac.SAC":{critic_update:[3,1,1,""],load_checkpoint:[3,1,1,""],prepare_checkpoint:[3,1,1,""],prepare_for_sampler:[3,5,1,""],prepare_for_trainer:[3,5,1,""],target_actor_update:[3,1,1,""],target_critic_update:[3,1,1,""],update_step:[3,1,1,""]},"catalyst.rl.offpolicy.algorithms.td3":{TD3:[3,0,1,""]},"catalyst.rl.offpolicy.algorithms.td3.TD3":{critic_update:[3,1,1,""],load_checkpoint:[3,1,1,""],prepare_checkpoint:[3,1,1,""],prepare_for_sampler:[3,5,1,""],prepare_for_trainer:[3,5,1,""],target_critic_update:[3,1,1,""],update_step:[3,1,1,""]},"catalyst.rl.offpolicy.sampler":{Sampler:[3,0,1,""],SamplerBuffer:[3,0,1,""]},"catalyst.rl.offpolicy.sampler.Sampler":{act:[3,1,1,""],load_actor_weights:[3,1,1,""],run:[3,1,1,""],store_episode:[3,1,1,""],to_tensor:[3,1,1,""]},"catalyst.rl.offpolicy.sampler.SamplerBuffer":{get_complete_episode:[3,1,1,""],get_state:[3,1,1,""],get_states_history:[3,1,1,""],init_with_observation:[3,1,1,""],push_transition:[3,1,1,""]},"catalyst.rl.offpolicy.trainer":{BufferDataset:[3,0,1,""],BufferSampler:[3,0,1,""],Trainer:[3,0,1,""]},"catalyst.rl.offpolicy.trainer.BufferDataset":{get_state:[3,1,1,""],get_transition_n_step:[3,1,1,""],push_episode:[3,1,1,""]},"catalyst.rl.offpolicy.trainer.Trainer":{fetch_episodes:[3,1,1,""],get_processes:[3,1,1,""],run:[3,1,1,""],save:[3,1,1,""],start_redis_loop:[3,1,1,""],start_train_loop:[3,1,1,""],train:[3,1,1,""],update_samplers_weights:[3,1,1,""],update_target_weights:[3,1,1,""]},"catalyst.rl.random_process":{AnnealedGaussianProcess:[3,0,1,""],GaussianWhiteNoiseProcess:[3,0,1,""],OrnsteinUhlenbeckProcess:[3,0,1,""],RandomProcess:[3,0,1,""]},"catalyst.rl.random_process.AnnealedGaussianProcess":{current_sigma:[3,6,1,""]},"catalyst.rl.random_process.GaussianWhiteNoiseProcess":{sample:[3,1,1,""]},"catalyst.rl.random_process.OrnsteinUhlenbeckProcess":{reset_states:[3,1,1,""],sample:[3,1,1,""]},"catalyst.rl.random_process.RandomProcess":{current_sigma:[3,6,1,""],reset_states:[3,1,1,""],sample:[3,1,1,""]},"catalyst.utils":{config:[4,2,0,"-"],data:[4,2,0,"-"],misc:[4,2,0,"-"],parallelize:[4,2,0,"-"],serialization:[4,2,0,"-"]},"catalyst.utils.config":{load_ordered_yaml:[4,4,1,""],parse_args_uargs:[4,4,1,""],save_config:[4,4,1,""]},"catalyst.utils.data":{balance_classes:[4,4,1,""],column_fold_split:[4,4,1,""],create_dataframe:[4,4,1,""],create_dataset:[4,4,1,""],default_fold_split:[4,4,1,""],prepare_dataset_labeling:[4,4,1,""],separate_tags:[4,4,1,""],split_dataframe:[4,4,1,""],split_dataset:[4,4,1,""],stratified_fold_split:[4,4,1,""]},"catalyst.utils.misc":{FrozenClass:[4,0,1,""],boolean_flag:[4,4,1,""],import_module:[4,4,1,""],merge_dicts:[4,4,1,""],set_global_seeds:[4,4,1,""]},"catalyst.utils.parallelize":{StoppableThread:[4,0,1,""],parallelize:[4,4,1,""]},"catalyst.utils.parallelize.StoppableThread":{run:[4,1,1,""]},"catalyst.utils.serialization":{deserialize:[4,4,1,""],serialize:[4,4,1,""]},catalyst:{data:[1,2,0,"-"],dl:[2,2,0,"-"],rl:[3,2,0,"-"],utils:[4,2,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","staticmethod","Python static method"],"4":["py","function","Python function"],"5":["py","classmethod","Python class method"],"6":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:staticmethod","4":"py:function","5":"py:classmethod","6":"py:attribute"},terms:{"abstract":[1,2],"boolean":[2,4],"break":[6,7],"byte":4,"char":1,"class":[0,1,2,3,4],"default":[1,4],"final":2,"float":[1,2,4],"function":[2,3,4,6],"goto":7,"import":[3,4,6],"int":[1,2,4],"new":[4,6],"return":[0,1,2,3,4],"static":[0,2],"throw":4,"true":[0,1,2,3,4,6],"try":2,"while":[3,4],AND:9,BUT:9,Being:6,FOR:9,For:1,NOT:9,One:2,THE:9,The:[0,2,9],USE:9,WITH:9,Will:4,__call__:1,__getitem__:1,__init__:[0,1,2,3],__iter__:1,__len__:1,__setattr__:4,_lrschedul:2,a_t:3,abl:[2,6],abov:9,abs:[0,3],absolut:4,abstractdatasourc:2,accuraci:2,act:3,action:[3,6,8,9],action_clip:3,action_hidden:3,action_net:3,action_noise_prob:3,action_noise_t:3,action_s:3,action_shap:3,activ:[0,2,3],activation_fn:[0,3],actor:3,actor_grad_clip_param:3,actor_loss_param:3,actor_optimizer_param:3,actor_scheduler_param:3,actor_tau:3,actor_upd:3,adam:6,adapt:3,add:[0,1,4,7],addit:6,advanc:6,affin:3,after:1,against:7,agent:[0,6],agent_factori:0,agent_param:0,aggregation_net:3,agre:7,ahead:7,albument:1,albunet:0,alexand:0,algorithm:[0,6],algorithm_factori:0,algorithm_param:0,all:[1,2,6,8,9],alloc:4,allow:1,alpha:1,also:[0,4],ani:[1,6,9],annealedgaussianprocess:3,annot:1,anoth:6,ants_be:1,api:6,appli:[1,2,4],appreci:6,arang:4,arbitrari:4,arch:1,architectur:[0,1],arg:[2,3,4],argpars:[2,4],argument:4,aris:9,armi:3,arrai:4,articl:7,arxiv:[0,3],ask:7,associ:9,async:8,attribut:4,augment:[1,8],augment_fn:1,augment_fn_kei:1,augmentor:6,augmentorkei:1,author:9,autograd:0,autolabel:8,automat:4,avail:[0,2],available_network:0,available_pool:3,averag:2,average_precis:2,avg:3,avg_al:3,back:[2,6],backbon:0,backpropag:3,backward:0,balanc:[1,4],balance_class:4,balanceclasssampl:[1,4],bar:2,base:[0,1,3,4],basemodelrunn:2,baseread:1,bash:7,basic:2,batch2devic:2,batch:[1,2,3],batch_handl:2,batch_siz:[2,3],batchnorm:2,bbox:1,bce2ce_alpha:0,bce:0,bce_indic:0,bcediceloss:0,bcesoftmaxloss:0,befor:2,being:3,benchmark:8,best_metr:2,between:[2,4],bia:[0,3],bijector:3,biomed:0,blob:0,block:7,blur:1,bn_convert_float:2,bool:[1,2,4],boolean_flag:4,both:3,bound:3,branch:7,broken:1,buffer:[2,3],buffer_s:3,bufferdataset:3,buffersampl:3,bug:[6,7],built:2,buslaev:0,cach:1,cache_prob:1,cache_transform:1,calc_lr:2,calc_momentum:2,calcul:[1,2],call:[0,4],callabl:[0,1,2,4],callback:[0,4,6],callback_each:4,callback_factori:0,callback_param:0,callbackcompos:2,can:[0,1,2,4,6],capac:3,cast:1,cat:4,catalyst:[0,1,2,3,4,7],caus:4,ce_indic:0,centerloss:0,chang:7,charact:7,charg:9,check:[1,7],checkpoint:2,chopra:0,chosen:4,cifar10:8,circular:2,claim:9,class_column:4,class_column_from_dataset:1,class_id:1,class_name_0:4,class_name_1:4,class_name_n:4,class_weight:0,classic:6,classif:8,classmethod:3,clip_delta:0,clr:2,cnn:0,code:[4,6,7],col:1,collat:6,collate_fn:[1,2],collect:4,color:1,column:4,column_fold_split:4,com:[0,4,7],comment:7,compat:6,competit:0,complement:4,compos:[1,3],compress:4,comput:[2,3,6],computation:3,condit:[3,9],config:[0,2,3,6],configur:[4,6,8],connect:9,consol:2,contain:4,context:7,continu:[6,8],continue_on_except:4,contract:9,contrast:0,contrastivedistanceloss:0,contrastiveembeddingloss:0,contrib:6,convers:2,convert:[1,2],convolut:0,copi:[3,9],copy_grad:2,copy_param:2,copyright:9,core:[2,3,4],could:6,count:1,coupl:3,couplinglay:3,cpu:[1,8],creat:[0,1,2,4,7],create_datafram:4,create_dataset:4,create_from_param:3,create_load:2,create_logg:2,create_optimal_inner_init:2,create_tflogg:2,criterion:[2,6],criterion_factori:0,criterion_param:[0,2],critic:3,critic_grad_clip_param:3,critic_loss_param:3,critic_optimizer_param:3,critic_scheduler_param:3,critic_tau:3,critic_upd:3,crop:1,crossentropyloss:6,csv:1,current:1,current_sigma:3,cut_div:2,cycl:[2,6],cycle_len:2,d_t:3,damag:9,data:[2,3,6],data_sourc:2,datafram:4,dataframe_arg:4,dataload:[1,2],datapath:1,dataset:[3,4,6],dataset_cache_prob:2,dataseti:1,datasourc:2,datatyp:1,dct:2,ddpg:[3,8],deal:9,debug:2,decod:0,decompress:4,decor:0,decreas:2,deep:[0,2,4],default_col:[1,2],default_fold_split:4,default_kwarg:1,default_valu:1,defin:0,delimit:4,densiti:3,depend:2,depth:4,descript:7,deseri:4,design:7,detail:7,detect:0,determin:3,determinist:3,dev:7,develop:6,devic:2,dice:2,dicecallback:2,diceloss:0,dict2fn_dict:1,dict:[1,2,4],dict_kei:1,dict_transform:[1,2],dictionari:[1,4],differ:[2,8],dir:[1,4,8],directori:[1,4],disabl:4,discuss:[6,7],disjoint:7,displai:4,distanc:0,distribut:[3,6,9],div:2,docker:8,docstr:7,document:[6,9],doe:1,dog:4,doing:1,done:2,doubl:2,down:4,downsampl:[1,4],dropout:3,dtype:[1,4],dump_config:4,dure:2,each:[1,4],elem:1,element:[1,2,4],elementwise_mean:0,els:0,emb:1,embed:[0,1,3,8],enabl:4,encod:[0,1],encode_fn:1,end:2,env:3,environ:[0,8],environment_factori:0,environment_param:0,episod:3,episode_limit:3,epoch:[2,6],epoch_len:3,epoch_metr:2,eps:[0,2],epsilon:2,error:1,etc:[1,6],even:[3,6],event:[2,9],everi:[1,2],exampl:[1,2,4],except:4,exception_callback:4,exception_imput:4,exdb:0,exist:4,exp:3,experi:6,experiment:6,express:9,ext:4,extend:2,extens:[4,6],extractor:0,factori:0,fail:4,fals:[0,1,2,3,4],familiar:7,fashion:4,fast:6,featur:[0,3],feature_dim:0,feature_s:3,features_in:3,fetch_episod:3,file:[4,6,8,9],filenam:1,filepath:[2,3,4],filter:1,filteringcollatefn:1,final_lr:2,find:[2,6],finetun:[6,8],finish:7,first:6,fit:[7,9],fix:6,flag:[1,2,4],flatten:0,float32:1,focalloss:0,focu:6,fold:4,folder:6,follow:9,forc:4,force_stor:3,forget:7,format:[1,7],forward:[0,2,3],found:[4,6],fp16:[0,6],fp16wrap:2,frame:4,free:9,from:[1,2,3,4,6,8,9],frozenclass:[2,4],fulli:0,fun:4,func:[0,4],furnish:9,further:6,gamma:[0,3],gaussian:3,gaussianwhitenoiseprocess:3,gausspolici:3,gener:[1,4],get:1,get_ag:0,get_algorithm:0,get_callback:[0,6],get_complete_episod:3,get_criterion:0,get_environ:0,get_fn:0,get_grad_clip_fn:0,get_kei:2,get_load:6,get_model:[0,6],get_optim:0,get_optimizer_momentum:2,get_out_featur:3,get_process:3,get_schedul:0,get_stat:3,get_states_histori:3,get_td_error:3,get_transition_n_step:3,get_val_from_metr:2,github:[0,2,4,7],give:4,global:0,globalattnpool2d:0,globalavgattnpool2d:0,globalavgpool2d:0,globalconcatattnpool2d:0,globalconcatpool2d:0,globalmaxattnpool2d:0,globalmaxpool2d:[0,1],goe:1,good:[2,7],googl:7,gpu:8,grad_clip_param:0,grant:9,grayscal:1,grid:8,grow:2,guard:2,gym:8,hadsel:0,halt:4,handl:2,handler:2,harder:7,has:1,have:[1,2,3],head_hidden:3,head_net:3,help:[1,2,4,7],here:[6,7],herebi:9,hidden:3,high:6,histogram:1,history_len:3,holder:9,home:4,hot:1,how:[2,4,7],html:2,http:[0,2,3,4,7],huberloss:0,hyperparamet:6,idea:[2,6],idx:3,iglovikov:0,imag:[0,1],image2embed:1,imagehistogrammixin:1,imagenet:0,imageread:1,imageri:0,img:1,implement:[1,2,7],impli:9,import_modul:4,improv:6,in_channel:0,in_featur:0,includ:[4,9],increas:2,index:[1,4,6,8],indic:1,infer:[2,3,4,6,8],inform:[4,6],inherit:[1,2],init:2,init_lr:2,init_with_observ:3,initi:6,inner:2,inner_kei:2,innert:2,input:[0,1,2,3,4],input_check:1,input_kei:[1,2],input_tensor:3,insid:7,inspir:0,instanc:[0,2],instead:4,intern:2,iou:2,is_best:2,is_last:2,issu:6,item:[1,2,4],iter:[1,4],its:[3,7],jaccard:2,jaccard_weight:0,jaccardcallback:2,job:1,json:[1,4],jupyt:7,kaggl:0,kei:[1,2,4],kind:9,knife:3,knn:8,known:0,kolesnikov:9,kwarg:[1,2,3],label:[1,4],lama_pool:3,lamapool:3,lambda:[0,1],lambda_fn:0,lambdaread:1,larg:7,last:3,layer:2,layer_fn:3,layer_ord:3,learn:[0,2,3,6],lecun:0,legaci:1,length:[1,7],level:[4,6],liabil:9,liabl:9,librari:6,licens:6,like:[1,4],limit:[7,9],line:7,linear:[2,3],linearli:2,list:[0,1,2],list_arg:2,list_data:1,listdataset:1,literatur:2,load:4,load_actor_weight:3,load_checkpoint:[2,3],load_optim:3,load_ordered_yaml:4,loader:[2,4,6],local:8,locat:4,log1p_exp:3,log:[0,2,3],log_pi:3,logdir:[2,3,4,6],logger:[2,6],logic:2,logit:2,look:[4,7],loop:6,loss:[0,2,3],lossbinari:0,lossmulti:0,lot:7,lr_schedul:[2,6],lrfinder:[2,8],lrupdat:2,lunarland:8,machin:6,made:0,main:2,main_metr:2,main_net:3,make:[0,7],manag:2,mani:4,map:[2,4],map_arg:2,mapbox:0,mapkcallback:2,margin:0,marshal:4,mask:1,master:0,match:1,max:[2,3],max_act:3,max_al:3,max_redis_tri:3,max_siz:3,maximum:2,mean:[2,3],mean_average_precis:2,merchant:9,merg:[1,4,7,9],merge_dict:4,mergedataset:1,method:[0,2],metric:[3,6,8],metric_fn:2,metric_kei:2,metric_param:2,metric_valu:2,metriccallback:2,mileston:6,min:2,min_act:3,min_episode_reward:3,min_episode_step:3,minim:2,minimize_metr:2,misc:[2,6],mit:9,mixin:6,mixupaugmentor:1,mnist:8,mode:[1,2,3],model:[2,6,8],model_param:0,models_factori:0,modern:1,modifi:[4,9],modul:[2,3,4,6],modules_factori:0,momentum:2,momentum_rang:2,more:[6,7],mountaincarcontinu:8,much:7,multi:8,multimetriccallback:2,multipl:2,multisteplr:6,multithread:4,multivari:3,mushinskii:0,must:[1,2,4,7],n_epoch:6,n_fold:4,n_step:[2,3],n_steps_ann:3,n_worker:[2,3],naivecrossentropyloss:0,name2fn:3,name2nn:0,name:[0,2,4],namespac:2,ndarrai:1,need:[1,7],nest:4,net:[0,1],network:[0,1,2,3,6],neural:[0,1,3,6],nizhib:0,noisylinear:0,non:1,none:[0,1,2,3,4],noninfring:9,nonlinear:2,norm_fn:3,normal:1,normal_log_prob:3,normal_sampl:3,note:3,notebook:8,notic:9,npy:1,num:2,num_block:0,num_class:0,num_filt:0,number:[0,1,2,3,4],numer:1,numpi:[1,4],nvp:3,object:[1,2,3,4],object_pairs_hook:4,observ:3,observation_aggreg:3,observation_hidden:3,observation_net:3,observation_shap:3,obtain:9,odd:3,off:[6,8],offpolici:6,often:4,on_batch_end:2,on_batch_end_post:2,on_batch_end_pr:2,on_batch_start:2,on_batch_start_post:2,on_batch_start_pr:2,on_epoch_end:2,on_epoch_end_post:2,on_epoch_end_pr:2,on_epoch_start:2,on_epoch_start_post:2,on_epoch_start_pr:2,on_infer_end:2,on_infer_end_post:2,on_infer_end_pr:2,on_infer_start:2,on_infer_start_post:2,on_infer_start_pr:2,on_loader_end:2,on_loader_end_post:2,on_loader_end_pr:2,on_loader_start:2,on_loader_start_post:2,on_loader_start_pr:2,on_stage_init_post:2,on_stage_init_pr:2,on_train_end:2,on_train_end_post:2,on_train_end_pr:2,on_train_start:2,on_train_start_post:2,on_train_start_pr:2,onc:7,one:[1,2,3,4],one_hot_class:1,onecyclelr:2,onli:[1,4],online_update_period:3,open:[1,4,6],open_fn:[1,2],openai:8,optim:[2,6],optimizer_factori:0,optimizer_kei:2,optimizer_param:[0,2],option:[2,4],ordereddict:[2,4],org:[0,3],origin:3,ornsteinuhlenbeckprocess:3,osin:0,other:[1,9],otherwis:[1,4,9],our:2,out:[1,9],out_activ:3,out_featur:0,out_prefix:2,outer_init:2,output:[0,1,2,4],output_kei:[1,2],over:[1,2,4],overcompl:4,pack_checkpoint:2,page:6,panda:4,paper:[0,2,3],parallel:6,param:[0,1,2],param_noise_d:3,param_noise_prob:3,param_noise_step:3,paramet:[0,1,2,3,4,6],pariti:3,pars:4,parse_args_uarg:4,parser:4,part:[2,3,4,6],particular:9,pass:[0,2,7],path:[1,2,4],path_to_fil:4,pdf:0,per:2,permiss:9,permit:9,person:9,pick:7,pip:6,pipelin:[2,6,8],plan:[6,7],pleas:[6,7],pointer:3,polici:[2,3,6,8],policy_loss:3,policy_net:3,policy_typ:3,pool:[1,3],popup:7,portion:9,possibl:7,pre:0,precis:2,precision_arg:2,precisioncallback:2,predict:[0,2,8],prefix:2,prepar:[1,4],prepare_callback:2,prepare_checkpoint:3,prepare_dataset_label:4,prepare_devic:2,prepare_for_sampl:3,prepare_for_train:3,prepare_load:2,prepare_model:2,prepare_model_stuff:2,prepare_stage_arg:2,prepare_stage_model:2,prepare_transform:2,preprocess:1,pretrain:0,print:4,probabl:[1,3],process:[4,6],process_epoch_metr:2,process_fn:4,progress:2,progressbar:4,progressbar_tick:4,prohibit:4,projector:8,proport:4,propos:0,provid:[4,9],pseudo:4,publi:0,publish:9,pull:7,purpos:[1,7,9],push_episod:3,push_transit:3,put:4,python:6,pytorch:[4,6],question:7,r_t:3,ram:1,rampeer:4,random:[4,6],random_process:3,random_st:4,randomprocess:3,randomst:4,rate:2,rather:6,ratio:2,read:1,reader:6,readercompos:1,real:3,realnvppolici:3,recogn:4,recognit:0,recurs:4,redis_prefix:3,redis_serv:3,reduct:0,register_typ:0,registri:6,regular:6,reinforc:[2,6],rel:1,relu:3,replay_buffer_s:3,report:7,repositori:6,repres:4,reproduc:[2,6],request:7,requir:0,research:6,reset_st:3,reset_step:2,residu:[0,3],resiz:1,resnet34:[0,1],resnet:0,resnetunet:0,restrict:9,result:[1,4],resum:[2,3],reus:6,reusabl:6,right:9,robosat:0,row:1,run:[2,3,4,8],run_ev:2,runner:[6,8],runnerst:[2,4],s_tp1:3,sac:[3,8],same:0,sampl:[1,3,4],sampler:[2,4,6],samplerbuff:3,satellit:0,save:[1,3,4,6],save_checkpoint:2,save_config:4,save_period:3,scalabl:6,scalar:1,scalarread:1,scale:[2,3],schedul:[0,6],scheduler_param:[0,2],scheduler_step:2,scheme:2,score:2,script:6,search:[6,8],see:[0,4,6],seed:[3,4],segment:[0,8],sell:9,semant:0,send:7,separ:4,separate_tag:4,sergei:[0,9],serial:6,set:4,set_global_se:4,set_kei:2,setup:6,sever:[1,4],sgugger:2,shall:[7,9],share_lambda:1,should:4,shuffl:[2,4],sigma:3,sigma_init:0,sigma_min:3,sigmoid:[0,2,3],sigmoid_al:3,singl:[0,1,2,7],size:[1,3,4],size_averag:0,sklearn:4,small:7,soft_jaccard:0,softmax2d:2,softmax:3,softmax_al:3,softwar:9,some:[3,4,7],someth:[1,6],sourc:[0,1,2,3,4,6],space:[6,8],special:2,specif:7,specifi:[1,2],speedup:1,split:4,split_datafram:4,split_dataset:4,squash:3,squashing_fn:3,squashinglay:3,stabl:3,stack:1,stackoverflow:7,stage:[2,6,8],stage_config:2,stages_config:2,start:2,start_epoch:2,start_learn:3,start_redis_loop:3,start_train_loop:3,state:[2,3,4],state_embed:3,state_kei:2,state_param:2,state_shap:3,stateactionnet:3,statenet:3,statist:2,step_index:3,stop:4,stoppablethread:4,storag:2,store:1,store_episod:3,str:[0,1,2,4],strategi:[1,4],stratifi:[1,4],stratified_fold_split:4,stream:4,string:[1,4],stuff:[2,6],style:7,subject:9,sublicens:9,submit:7,subpackag:1,substanti:9,suffix:2,suggest:2,supervisedmodelrunn:[2,6],support:[1,3,6],suppos:3,sure:7,swiss:3,synthes:0,tag2cl:1,tag2label:1,tag:4,tag_column:4,tag_delim:4,tanh:[0,3],tanh_al:3,target:2,target_actor_upd:3,target_critic_upd:3,target_update_period:3,task:7,td3:[3,8],temporalattentionpool:3,tensor:[0,1,2],tensorboard:[2,8],tensorflow:4,termin:1,ternausnet:0,ternausnetv2:0,test:[4,7,8],test_siz:4,thei:1,them:[0,1,2],theta:3,thi:[2,4,7,8,9],thread:4,thread_count:4,through:3,thu:2,to_batch_metr:2,to_tensor:3,token:1,tool:6,top:4,topk:2,torch:[1,2,3,6],tort:9,tqdm:2,train:[0,2,3,4,6,8],train_siz:4,train_stag:2,train_test_split_arg:4,transfer:1,transform:[1,3],transit:3,translat:3,tupl:[2,4],tutori:6,two:2,type:[0,1,2,4],typic:2,unbalanc:1,unet:[0,8],union:0,uniqu:4,unit:[3,7],univers:6,unknown_arg:4,unpack_checkpoint:2,unrecogn:4,updat:[2,3,4,7],update_optim:2,update_samplers_weight:3,update_step:3,update_target_weight:3,upsampl:[1,4],usag:[2,8],use:[0,1,2,4,6,7,9],used:[0,1,2,3,4],useful:6,user:[2,4,6],uses:7,using:[0,4],util:[1,6],utilsfactori:2,valid:[2,6],valid_load:2,valid_metr:2,valu:[1,2,3,4],value_loss:3,valuecrit:3,varianc:3,varieti:6,vctk:4,verbos:[1,2,6],vgg11:0,visial:8,vision:6,visual:8,vladimir:0,want:7,warn:4,warranti:9,weights_sync_period:3,whether:9,which:[0,2,3,4],whole:2,whom:9,wip:8,with_log_pi:3,without:[1,6,9],word:1,work:[1,7],worker:[1,2],would:2,wouldn:2,wrapper:2,write:[1,6],wrong:1,y_pred:2,y_true:2,yaml:4,yann:0,yield:1,you:[1,2,4,6,7],your:[1,2,7],your_experi:6,zlib:4},titles:["Contrib","Data","DL","RL","Utils","Changelog","Catalyst","Contribution","Examples","License"],titleterms:{"function":1,"new":7,agent:3,algorithm:3,augmentor:1,base:2,best:7,bugfix:7,callback:2,catalyst:6,changelog:[5,6],codestyl:7,collat:1,config:4,contrib:0,contribut:[6,7],criterion:0,data:[1,4],dataset:1,document:7,exampl:[6,8],featur:[6,7],fp16:2,get:6,guid:[6,7],indic:6,initi:2,instal:6,issu:7,layer:3,licens:9,metric:2,misc:4,mixin:1,model:0,modul:0,multimetr:2,offpolici:3,optim:0,overview:6,parallel:4,practic:7,process:3,random:3,reader:1,registri:0,runner:2,sampler:[1,3],schedul:2,script:1,second:6,serial:4,start:6,step:7,structur:6,tabl:6,trainer:3,util:[2,3,4]}})