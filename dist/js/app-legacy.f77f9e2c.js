(function(){"use strict";var t={8642:function(t,e,a){a(6992),a(8674),a(9601),a(7727);var n=a(144),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],s={name:"App",components:{}},r=s,o=a(1001),u=(0,o.Z)(r,i,l,!1,null,null,null),c=u.exports,p=a(8345),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100vh","min-height":"500px"}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"loginForm",staticClass:"loginContainer",attrs:{"element-loading-text":"正在登录...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)",rules:t.rules,model:t.loginForm}},[a("h3",{staticClass:"loginTitle"},[t._v("真寻的后台")]),a("el-form-item",{attrs:{prop:"username"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入用户名"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1),a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:t.submitLogin}},[t._v("登录")])],1)],1)},d=[],m=(a(4916),a(5306),a(129)),f=a.n(m),h=(a(4603),a(8450),a(8386),a(9714),a(4723),a(9669)),_=a.n(h),v=a(4720),b=a.n(v);_().interceptors.request.use((function(t){return T("tokenStr")&&(t.headers["Authorization"]=T("tokenStr")),t}),(function(t){console.log(t)})),_().interceptors.response.use((function(t){if(t.status&&200===t.status){if(500==t.data.code||401==t.data.code||403==t.data.code)return void v.Message.error({message:t.data.message});t.data.message&&v.Message.success({message:t.data.message})}return t.data}),(function(t){504==t.response.code||404==t.response.code?v.Message.error({message:"服务器被吃了┭┮﹏┭┮"}):401==t.response.status?("Could not validate credentials"==t.response.data.detail?v.Message.error({message:"用户名或密码错误"}):v.Message.error({message:"尚未登录，请登录"}),qe.replace("/")):422==t.response.status?v.Message.error({message:"修改的数据类型返回错误"}):v.Message.error({message:"未知错误"})}));var y="",w=function(t,e){return _()({method:"post",url:"".concat(y).concat(t),data:e})},x=function(t,e){return _()({method:"put",url:"".concat(y).concat(t),data:e})},k=function(t,e){return _()({method:"get",url:"".concat(y).concat(t),data:e})},S=function(t,e){return _()({method:"delete",url:"".concat(y).concat(t),data:e})},D=function(t,e){var a=7,n=new Date;n.setTime(n.getTime()+24*a*60*60*30),document.cookie=t+"="+encodeURI(e)+";expires="+n.toGMTString()},T=function(t){var e,a=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return document.cookie.match(a)?(e=document.cookie.match(a),decodeURI(e[2])):null},$=function(t){D(t,"",-1)},q={name:"Login",data:function(){return{loginForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},loading:!1}},methods:{submitLogin:function(){var t=this;this.$refs.loginForm.validate((function(e){if(!e)return t.$message.error("请输入所有字段！"),!1;t.loading=!0,t.postRequest("/webui/login",f().stringify({username:t.loginForm.username,password:t.loginForm.password}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){if(e){var a=e.token_type+" "+e.access_token;T&&$("tokenStr"),D("tokenStr",a);var n=t.$route.query.redirect;t.$router.replace("/"==n||void 0==n?"/home":n)}})),t.loading=!1}))}}},z=q,L=(0,o.Z)(z,g,d,!1,null,null,null),P=L.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-container",[a("el-header",{staticClass:"homeHeader"},[a("div",{staticClass:"title"},[t._v("小真寻的后台捏")]),a("div",{staticClass:"menu-btn",on:{click:t.showmenu}},[a("div",{staticClass:"btn-logo"},[a("div",{staticClass:"cover",class:{covershow:t.covershow}})])])]),a("el-container",{staticClass:"layoutbox"},[a("el-aside",{staticClass:"left-aside",class:{show:t.asideshow}},[a("div",{staticClass:"myscrollbar"},[a("el-menu",{on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"/plugin"}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("插件列表")])]),a("el-menu-item",{attrs:{index:"/group"}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("群组管理")])]),a("el-menu-item",{attrs:{index:"/request"}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("请求管理")])]),a("el-menu-item",{attrs:{index:"/system"}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("系统信息")])])],1)],1)]),a("el-main",[a("router-view",{staticClass:"homeRouterView"})],1)],1)],1)],1)},C=[],N={name:"Home",data:function(){return{asideshow:!1,covershow:!1}},methods:{handleSelect:function(t){this.$router.replace(t)},showmenu:function(){this.asideshow=!this.asideshow,this.covershow=!this.covershow}}},E=N,M=(0,o.Z)(E,R,C,!1,null,null,null),O=M.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"普通插件",name:"NormalPlugin"}},[a("NormalPlugin")],1),a("el-tab-pane",{attrs:{label:"管理员插件",name:"AdminPlugin"}},[a("AdminPlugin")],1),a("el-tab-pane",{attrs:{label:"超级用户插件",name:"SuperPlugin"}},[a("SuperPlugin")],1),a("el-tab-pane",{attrs:{label:"其他插件",name:"OtherPlugin"}},[a("OtherPlugin")],1)],1)],1)},V=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("PluginListTemplate",{attrs:{"plugin-type":t.type}})],1)},A=[],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{display:"flex","margin-bottom":"10px"}},[a("el-button",{attrs:{icon:"el-icon-refresh",circle:""},on:{click:t.refresh}})],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pluginList}},[a("el-table-column",{attrs:{prop:"model",label:"模块",width:"150"}}),a("el-table-column",{attrs:{prop:"plugin_manager.plugin_name",label:"插件名称",width:"200"}}),a("el-table-column",{attrs:{prop:"plugin_manager.author",label:"作者",width:"150"}}),a("el-table-column",{attrs:{prop:"plugin_manager.version",label:"版本",width:"110"}}),"normal"==t.pluginType?[a("el-table-column",{attrs:{prop:"plugin_manager.status",label:"插件状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!=e.row.plugin_manager&&1==e.row.plugin_manager.status?a("el-tag",{attrs:{type:"success"}},[t._v("启用")]):a("el-tag",{attrs:{type:"danger"}},[t._v("禁用")])]}}],null,!1,3561711531)}),a("el-table-column",{attrs:{prop:"plugin_manager.block_type",label:"禁用类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.plugin_manager.status?a("el-tag",{attrs:{type:"success"}},[t._v("未禁用")]):a("el-tag",{attrs:{type:"danger"}},[t._v(t._s(e.row.plugin_manager.block_type))])]}}],null,!1,409102598)}),a("el-table-column",{attrs:{prop:"plugin_settings.level",label:"群权限"}}),a("el-table-column",{attrs:{prop:"plugin_settings.default_status",label:"默认开关"},scopedSlots:t._u([{key:"default",fn:function(e){return[null==e.row.plugin_settings||1==e.row.plugin_settings.default_status||null==e.row.plugin_settings.level?a("el-tag",{attrs:{type:"success"}},[t._v("开启")]):a("el-tag",{attrs:{type:"danger"}},[t._v("关闭")])]}}],null,!1,3881543238)}),a("el-table-column",{attrs:{prop:"plugin_settings.limit_superuser",label:"限制超级用户"},scopedSlots:t._u([{key:"default",fn:function(e){return[null==e.row.plugin_settings||0==e.row.plugin_settings.limit_superuser||null==e.row.plugin_settings.level?a("el-tag",{attrs:{type:"success"}},[t._v("否")]):a("el-tag",{attrs:{type:"danger"}},[t._v("是")])]}}],null,!1,1234206991)}),a("el-table-column",{attrs:{prop:"plugin_settings.cmd",label:"别名"}}),a("el-table-column",{attrs:{prop:"plugin_settings.cost_gold",label:"花费金币"}}),a("el-table-column",{attrs:{prop:"plugin_settings.plugin_type[0]",label:"插件类型"}}),a("el-table-column",{attrs:{prop:"plugin_manager.error",label:"加载状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!=e.row.plugin_manager&&0==e.row.plugin_manager.error?a("el-tag",{attrs:{type:"success"}},[t._v("正常")]):a("el-tag",{attrs:{type:"danger"}},[t._v("错误")])]}}],null,!1,1054784431)})]:t._e(),a("el-table-column",{attrs:{label:"配置项",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!=e.row.plugin_config?a("span",[a("el-button",{attrs:{size:"small"},on:{click:function(a){return t.showPluginConfigEditVie(e.row)}}},[t._v("配置项")])],1):t._e()]}}])}),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return"normal"==t.pluginType?[null!=e.row.plugin_settings&&null!=e.row.plugin_settings.level?a("el-button",{attrs:{size:"small"},on:{click:function(a){return t.showEditView(e.row)}}},[t._v("编辑")]):t._e()]:void 0}}],null,!0)})],2),a("el-dialog",{attrs:{title:"编辑插件",visible:t.dialogVisible,width:"1000px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("table",[a("tr",[a("td",[t._v("插件名称")]),a("td",[a("el-input",{attrs:{placeholder:"",size:"small"},model:{value:t.pluginData.plugin_manager.plugin_name,callback:function(e){t.$set(t.pluginData.plugin_manager,"plugin_name",e)},expression:"pluginData.plugin_manager.plugin_name"}})],1)]),a("tr",[a("td",[t._v("插件状态")]),a("td",[a("el-switch",{staticStyle:{"margin-right":"30px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"启用","inactive-text":"禁用",size:"small"},model:{value:t.pluginData.plugin_manager.status,callback:function(e){t.$set(t.pluginData.plugin_manager,"status",e)},expression:"pluginData.plugin_manager.status"}})],1)]),a("tr",[a("td",[t._v("禁用类型")]),a("td",[a("el-select",{attrs:{size:"small",disabled:1==t.pluginData.plugin_manager.status},model:{value:t.pluginData.plugin_manager.block_type,callback:function(e){t.$set(t.pluginData.plugin_manager,"block_type",e)},expression:"pluginData.plugin_manager.block_type"}},t._l(t.blockType,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),a("tr",[a("td",[t._v("群权限")]),a("td",[a("el-input",{attrs:{placeholder:"",size:"small"},model:{value:t.pluginData.plugin_settings.level,callback:function(e){t.$set(t.pluginData.plugin_settings,"level",t._n(e))},expression:"pluginData.plugin_settings.level"}})],1)]),a("tr",[a("td",[t._v("默认开关")]),a("td",[a("el-switch",{staticStyle:{"margin-right":"30px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"开启","inactive-text":"关闭",size:"small"},model:{value:t.pluginData.plugin_settings.default_status,callback:function(e){t.$set(t.pluginData.plugin_settings,"default_status",e)},expression:"pluginData.plugin_settings.default_status"}})],1)]),a("tr",[a("td",[t._v("限制超级用户")]),a("td",[a("el-switch",{staticStyle:{"margin-right":"30px"},attrs:{"active-color":"#ff4949","inactive-color":"#13ce66","active-text":"是","inactive-text":"否",size:"small"},model:{value:t.pluginData.plugin_settings.limit_superuser,callback:function(e){t.$set(t.pluginData.plugin_settings,"limit_superuser",e)},expression:"pluginData.plugin_settings.limit_superuser"}})],1)]),a("tr",[a("td",[t._v("别名")]),a("td",[a("el-input",{attrs:{placeholder:"",size:"small"},model:{value:t.pluginData.plugin_settings.cmd,callback:function(e){t.$set(t.pluginData.plugin_settings,"cmd",e)},expression:"pluginData.plugin_settings.cmd"}})],1)]),a("tr",[a("td",[t._v("花费金币")]),a("td",[a("el-input",{attrs:{placeholder:"",size:"small"},model:{value:t.pluginData.plugin_settings.cost_gold,callback:function(e){t.$set(t.pluginData.plugin_settings,"cost_gold",t._n(e))},expression:"pluginData.plugin_settings.cost_gold"}})],1)]),a("tr",[a("td",[t._v("插件类型")]),a("td",[a("el-input",{attrs:{placeholder:"",size:"small"},model:{value:t.pluginData.plugin_settings.plugin_type[0],callback:function(e){t.$set(t.pluginData.plugin_settings.plugin_type,0,e)},expression:"pluginData.plugin_settings.plugin_type[0]"}})],1)])]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.doUpdate}},[t._v("确 定")])],1)]),a("el-dialog",{attrs:{title:"编辑配置项",visible:t.configDialogVisible,width:"1000px"},on:{"update:visible":function(e){t.configDialogVisible=e}}},[a("table"),a("el-table",{attrs:{data:t.pluginData.plugin_config}},[a("el-table-column",{attrs:{prop:"key",label:"键"}}),a("el-table-column",{attrs:{label:"值"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pluginData.plugin_config[e.row.id].value,callback:function(a){t.$set(t.pluginData.plugin_config[e.row.id],"value",t._n(a))},expression:"pluginData.plugin_config[scope.row.id].value"}})]}}])}),a("el-table-column",{attrs:{prop:"help_",label:"说明"}}),a("el-table-column",{attrs:{label:"默认值"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.default_value?a("span",[t._v(" True ")]):0==e.row.default_value?a("span",[t._v(" False ")]):a("span",[t._v(" "+t._s(e.row.default_value)+" ")])]}}])})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.configDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.doConfigUpdate}},[t._v("确 定")])],1)],1)],1)},B=[],I=(a(8862),a(9600),a(3123),{name:"PluginListTemplate",props:["pluginType"],data:function(){return{pluginList:[],dialogVisible:!1,configDialogVisible:!1,pluginData:{model:"",plugin_settings:{level:0,default_status:null,limit_superuser:null,cmd:"",cost_gold:0,plugin_type:""},plugin_manager:{plugin_name:"",status:null,error:null,version:0,author:"",block_type:"all"},plugin_config:[],cd_limit:null,block_limit:null,count_limit:null},configsType:[],blockType:[{value:"all",label:"全部"},{value:"group",label:"群组"},{value:"private",label:"私聊"}]}},mounted:function(){this.initPluginList()},methods:{refresh:function(){this.initPluginList(),this.$message({message:"刷新成功",type:"success"})},initPluginList:function(){var t=this;this.getRequest("/webui/plugins?type_="+this.pluginType).then((function(e){e?t.pluginList=e.data:t.$message.error("获取数据失败！")}))},showPluginConfigEditVie:function(t){null==t.plugin_settings&&(t.plugin_settings={level:0,default_status:null,limit_superuser:null,cmd:"",cost_gold:0,plugin_type:""}),this.pluginData=JSON.parse(JSON.stringify(t));for(var e=0;e<this.pluginData.plugin_config.length;e++)this.pluginData.plugin_config[e].value instanceof Array?(this.pluginData.plugin_config[e].value=this.pluginData.plugin_config[e].value.join(","),this.configsType.push({index:e,type:"list"})):this.pluginData.plugin_config[e].value=String(this.pluginData.plugin_config[e].value);this.configDialogVisible=!0},showEditView:function(t){this.pluginData=JSON.parse(JSON.stringify(t)),""!=this.pluginData.plugin_manager.block_type&&null!=this.pluginData.plugin_manager.block_type||(this.pluginData.plugin_manager.block_type="all"),this.dialogVisible=!0},doUpdate:function(){var t=this,e=JSON.parse(JSON.stringify(this.pluginData));e.plugin_manager.status&&(e.plugin_manager.block_type=""),e.plugin_config=null,e.plugin_settings.cmd&&(e.plugin_settings.cmd=e.plugin_settings.cmd.replace("，",",")),this.postRequest("/webui/plugins",e).then((function(e){e&&200==e.code?(t.$message({message:"修改成功",type:"success"}),t.initPluginList()):(e&&e.data?t.$message.error(e.data):t.$message.error("修改失败"),t.initPluginList())})),this.dialogVisible=!1},doConfigUpdate:function(){var t=this,e=JSON.parse(JSON.stringify(this.pluginData));e.plugin_manager=null,e.plugin_settings=null;for(var a=0;a<this.configsType.length;a++)"list"!=this.configsType[a].type||e.plugin_config[this.configsType[a].index].value instanceof Array||(e.plugin_config[this.configsType[a].index].value=e.plugin_config[this.configsType[a].index].value.split(","));this.postRequest("/webui/plugins",e).then((function(e){200==e.code?(t.$message({message:"修改成功",type:"success"}),t.initPluginList()):t.$message.error(e.data)})),this.configDialogVisible=!1}}}),H=I,J=(0,o.Z)(H,G,B,!1,null,null,null),j=J.exports,U={name:"NormalPlugin",components:{PluginListTemplate:j},data:function(){return{type:"normal"}}},W=U,K=(0,o.Z)(W,Z,A,!1,null,null,null),Q=K.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("PluginListTemplate",{attrs:{"plugin-type":t.type}})],1)},Y=[],tt={name:"AdminPlugin",components:{PluginListTemplate:j},data:function(){return{type:"admin"}}},et=tt,at=(0,o.Z)(et,X,Y,!1,null,null,null),nt=at.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("PluginListTemplate",{attrs:{"plugin-type":t.type}})],1)},lt=[],st={name:"SuperPlugin",components:{PluginListTemplate:j},data:function(){return{pluginList:[],type:"superuser"}}},rt=st,ot=(0,o.Z)(rt,it,lt,!1,null,null,null),ut=ot.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("PluginListTemplate",{attrs:{"plugin-type":t.type}})],1)},pt=[],gt={name:"OtherPlugin",components:{PluginListTemplate:j},data:function(){return{type:"hidden"}}},dt=gt,mt=(0,o.Z)(dt,ct,pt,!1,null,null,null),ft=mt.exports,ht={name:"PluginList",data:function(){return{activeName:"NormalPlugin"}},components:{NormalPlugin:Q,AdminPlugin:nt,SuperPlugin:ut,OtherPlugin:ft}},_t=ht,vt=(0,o.Z)(_t,F,V,!1,null,null,null),bt=vt.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"群组管理",name:"GroupManage"}},[a("GroupMana")],1)],1)],1)},wt=[],xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{display:"flex","margin-bottom":"10px"}},[a("el-button",{attrs:{icon:"el-icon-refresh",circle:""},on:{click:t.refresh}})],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.groupList}},[a("el-table-column",{attrs:{prop:"group.group_id",label:"群号",width:"150"}}),a("el-table-column",{attrs:{prop:"group.group_name",label:"群名",width:"150"}}),a("el-table-column",{attrs:{prop:"group.member_count",label:"成员数",width:"150"}}),a("el-table-column",{attrs:{prop:"group.max_member_count",label:"最大成员数",width:"150"}}),a("el-table-column",{attrs:{prop:"level",label:"群权限",width:"150"}}),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?a("el-tag",{attrs:{type:"success"}},[t._v("启用")]):a("el-tag",{attrs:{type:"danger"}},[t._v("禁用")])]}}])}),a("el-table-column",{attrs:{label:"已开启被动",width:"450"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.task,(function(e){return a("span",{key:e.name,attrs:{label:e.nameZh}},[1==e.status?a("span",[t._v(t._s(e.nameZh)+",")]):t._e()])}))}}])}),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){return t.showEditView(e.row)}}},[t._v("编辑")])]}}])})],1),a("el-dialog",{attrs:{title:"编辑群聊",visible:t.dialogVisible,width:"400px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("table",[a("tr",[a("td",[t._v("状态")]),a("td",[a("el-switch",{staticStyle:{"margin-right":"30px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"启用","inactive-text":"禁用",size:"small"},model:{value:t.group.status,callback:function(e){t.$set(t.group,"status",e)},expression:"group.status"}})],1)]),a("tr",[a("td",[t._v("群权限")]),a("td",[a("el-input",{attrs:{placeholder:"",size:"small"},model:{value:t.group.level,callback:function(e){t.$set(t.group,"level",e)},expression:"group.level"}})],1)])]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.doUpdate}},[t._v("确 定")])],1)])],1)},kt=[],St={name:"GroupMana",props:["pluginType"],data:function(){return{groupList:[],dialogVisible:!1,taskList:[],taskZhList:[],group:{group:{group_id:0},status:null,level:0}}},mounted:function(){this.initGroupList()},methods:{refresh:function(){this.initGroupList(),this.$message({message:"刷新成功",type:"success"})},initGroupList:function(){var t=this;this.getRequest("/webui/group").then((function(e){e?t.groupList=e.data:t.$message.error("获取群数据失败！")}))},showEditView:function(t){this.group=JSON.parse(JSON.stringify(t)),this.dialogVisible=!0},doUpdate:function(){var t=this;this.postRequest("/webui/group",this.group).then((function(e){e&&(t.$message({message:"修改成功",type:"success"}),t.initGroupList())})),this.dialogVisible=!1}}},Dt=St,Tt=(0,o.Z)(Dt,xt,kt,!1,null,null,null),$t=Tt.exports,qt={name:"PluginList",data:function(){return{activeName:"GroupManage"}},components:{GroupMana:$t}},zt=qt,Lt=(0,o.Z)(zt,yt,wt,!1,null,null,null),Pt=Lt.exports,Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"群组请求",name:"GroupRequestMana"}},[a("GroupRequestMana")],1),a("el-tab-pane",{attrs:{label:"好友请求",name:"PrivateRequestMana"}},[a("PrivateRequestMana")],1)],1)],1)},Ct=[],Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("RequestListTemplate",{attrs:{"request-type":t.type}})],1)},Et=[],Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{display:"flex","margin-bottom":"10px"}},[a("el-button",{attrs:{icon:"el-icon-refresh",circle:""},on:{click:t.refresh}}),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:t.clear}},[t._v("清空请求")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.requestList}},[a("el-table-column",{attrs:{prop:"oid",label:"id",width:"50"}}),a("el-table-column",{attrs:{prop:"id",label:"qq",width:"150"}}),a("el-table-column",{attrs:{prop:"flag",label:"flag",width:"170"}}),a("el-table-column",{attrs:{prop:"nickname",label:"昵称",width:"150"}}),a("el-table-column",{attrs:{prop:"level",label:"等级",width:"100"}}),a("el-table-column",{attrs:{label:"性别",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["male"==e.row.sex?a("span",[t._v(" 男 ")]):a("span",[t._v(" 女 ")])]}}])}),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"150"}}),a("el-table-column",{attrs:{prop:"comment",label:"验证消息",width:"150"}}),"group"==t.requestType?[a("el-table-column",{attrs:{prop:"invite_group",label:"邀请入群",width:"150"}}),a("el-table-column",{attrs:{prop:"group_name",label:"群聊名称",width:"150"}})]:t._e(),a("el-table-column",{attrs:{label:"操作",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"success"},on:{click:function(a){return t.approveHandler(e.row)}}},[t._v("同意")]),a("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(a){return t.refuseHandler(e.row)}}},[t._v("拒绝")]),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){return t.deleteHandle(e.row)}}},[t._v("删除")])]}}])})],2)],1)},Ot=[],Ft={name:"RequestListTemplate",props:["requestType"],data:function(){return{requestList:[],noticeMsg:"",request:{id:null,handle:null,type:""}}},mounted:function(){this.initRequestList()},methods:{refresh:function(){this.initRequestList(),this.$message({message:"刷新成功",type:"success"})},initRequestList:function(){var t=this;this.getRequest("/webui/request?type_="+this.requestType).then((function(e){e?t.requestList=e.data:t.$message.error("获取请求数据失败！")}))},clear:function(){var t=this;this.$confirm("确认清空全部请求?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deleteRequest("/webui/request?type_="+t.requestType).then((function(e){e&&(t.initRequestList(),t.$message({message:"清空成功",type:"success"}))}))})).catch((function(){t.$message({type:"info",message:"已取消操作"})}))},approveHandler:function(t){this.request.handle="approve",this.noticeMsg="同意",this.handle(t)},refuseHandler:function(t){this.request.handle="refuse",this.noticeMsg="拒绝",this.handle(t)},deleteHandle:function(t){this.request.handle="delete",this.noticeMsg="删除",this.handle(t)},handle:function(t){var e=this;this.request.id=t.oid,this.request.type=this.requestType,this.$confirm("确认"+this.noticeMsg+" id："+t.oid+" 请求?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.postRequest("/webui/request",e.request).then((function(t){t&&("ok"==t.data?(e.initRequestList(),e.$message({message:"操作成功",type:"success"})):(e.$message.error(t.data),e.initRequestList()))}))})).catch((function(){e.$message({type:"info",message:"已取消操作"})}))}}},Vt=Ft,Zt=(0,o.Z)(Vt,Mt,Ot,!1,null,null,null),At=Zt.exports,Gt={name:"GroupRequest",components:{RequestListTemplate:At},data:function(){return{type:"group"}}},Bt=Gt,It=(0,o.Z)(Bt,Nt,Et,!1,null,null,null),Ht=It.exports,Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("RequestListTemplate",{attrs:{"request-type":t.type}})],1)},jt=[],Ut={name:"PrivateRequest",components:{RequestListTemplate:At},data:function(){return{type:"private"}}},Wt=Ut,Kt=(0,o.Z)(Wt,Jt,jt,!1,null,null,null),Qt=Kt.exports,Xt={name:"RequestManage",data:function(){return{activeName:"GroupRequestMana"}},components:{GroupRequestMana:Ht,PrivateRequestMana:Qt}},Yt=Xt,te=(0,o.Z)(Yt,Rt,Ct,!1,null,null,null),ee=te.exports,ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"系统信息",name:"SystemBasicInfo"}},[a("SystemBasicInfo")],1)],1)],1)},ne=[],ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-wrapper"},[a("div",{staticClass:"grid-content bg-purple"},[a("el-row",[a("SystemStatusTemplate",{attrs:{"status-type":t.type[0],getData:t.getData}})],1),a("el-row",[a("SystemStatusTemplate",{attrs:{"status-type":t.type[1],getData:t.getData}})],1),a("el-row",[a("SystemStatusTemplate",{attrs:{"status-type":t.type[2],getData:t.getData}})],1)],1),a("div",{staticClass:"grid-content bg-purple-light"},[a("SystemResourceTemplate")],1)])},le=[],se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"echarts",style:{width:"100%",height:"338px"},attrs:{"element-loading-text":"加载中...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}})])},re=[],oe=(a(1249),a(8309),{name:"SystemLineDrawTemplate",props:["statusType","getData"],data:function(){return{statusData:null,data:[],xAxisTable:[],timer:null,myChart:null,loading:!0}},mounted:function(){var t=this;this.initData(),this.timer=setInterval((function(){setTimeout(t.initData)}),5e3)},destroyed:function(){clearInterval(this.timer),this.timer=null},methods:{initData:function(){this.statusData=this.getData(this.statusType),Array.isArray(this.statusData)&&(this.xAxisTable=this.statusData.map((function(t){return t.time})),this.data=this.statusData.map((function(t){return t.data})),null!=this.data&&(this.loading=!1),this.drawLine())},drawLine:function(){null==this.myChart&&(this.myChart=this.$echarts.init(this.$refs.echarts));var t="";t="cpu"==this.statusType?"CPU使用率（%）":"memory"==this.statusType?"内存使用率（%）":"硬盘使用率（%）",this.myChart.setOption({title:{text:t,top:"30",left:"32",textStyle:{fontSize:16,color:"#333",fontWeight:"500"}},tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{type:"dashed",color:"#808BA9"}},backgroundColor:"#fff",color:"#333",borderWidth:"1",borderColor:"#D9E1F8",textStyle:{color:"#333",fontSize:"12",lineHeight:"17"},formatter:function(t){return t[0].name+'<br><span style="margin:0 5px 2px 0;display:inline-block;width:6px;height:6px;border-radius:5px;background-color:'+t[0].color+';"></span>'+t[0].seriesName+'<span style="margin-left:10px;">'+t[0].data+"%</span>"}},legend:{icon:"circle",itemHeight:10,textStyle:{fontSize:14,color:"#333"},x:"left",y:"top",padding:[81,0,0,32]},grid:{top:"145",left:"17",right:"17",bottom:"41",containLabel:!0},xAxis:{type:"category",data:this.xAxisTable,axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:"#666",width:"1"}},axisLabel:{formatter:function(t){return"{a|"+"".concat(t)+"}"},rich:{a:{height:40,color:"#666",fontSize:14}}}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},boundaryGap:[.1,0],splitLine:{show:!0,lineStyle:{type:"dashed",color:"#D9E1F8"}},axisLabel:{fontSize:14,color:"#92A5E3"}},series:[{name:"使用率",type:"line",data:this.data,color:"#00C5AB",symbolSize:8}]})}}}),ue=oe,ce=(0,o.Z)(ue,se,re,!1,null,null,null),pe=ce.exports,ge=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"1014px"}},[a("div",{ref:"echarts",staticStyle:{width:"100%",height:"100%"}}),a("el-drawer",{attrs:{title:t.ccw.title,visible:t.drawer},on:{"update:visible":function(e){t.drawer=e}}},[a("div",{ref:"ccwEcharts",staticStyle:{width:"100%",height:"90%"}})])],1)},de=[],me=(a(6977),{name:"SystemResourceTemplate",data:function(){return{data:[],myChart:null,total_size:null,drawer:!1,ccw:{chart:null,data:[],title:"",total_size:0}}},mounted:function(){this.initData()},methods:{initData:function(){var t=this;null==this.myChart&&(this.myChart=this.$echarts.init(this.$refs.echarts)),this.getRequest("/webui/system/disk").then((function(e){if(e&&200==e.code){for(var a in t.data={image:e.data.image_dir_size,text:e.data.text_dir_size,record:e.data.record_dir_size,font:e.data.font_dir_size,data:e.data.data_dir_size,log:e.data.log_dir_size,temp:e.data.temp_dir_size},e.data)"check_time"!=a&&(t.total_size+=e.data[a]);t.drawPie()}}))},drawPie:function(t){var e=this,a=[],n=[],i=0,l=" MB";if("ccw"==t){for(var s in this.ccw.data)"check_time"!=s&&n.push({value:(this.ccw.data[s]/this.ccw.total_size*100).toFixed(2),name:s});i=this.ccw.total_size}else i=this.total_size,a=["图片资源","文本资源","音频资源","字体资源","数据文件","日志文件","临时文件"],n=[{value:(this.data.image/this.total_size*100).toFixed(2),name:"图片资源"},{value:(this.data.text/this.total_size*100).toFixed(2),name:"文本资源"},{value:(this.data.record/this.total_size*100).toFixed(2),name:"音频资源"},{value:(this.data.font/this.total_size*100).toFixed(2),name:"字体资源"},{value:(this.data.data/this.total_size*100).toFixed(2),name:"数据文件"},{value:(this.data.log/this.total_size*100).toFixed(2),name:"日志文件"},{value:(this.data.temp/this.total_size*100).toFixed(2),name:"临时文件"}];i>1024&&(i/=1024,l=" GB");var r={tooltip:{trigger:"item",formatter:function(t){var a=0;a=-1!=["图片资源","文本资源","音频资源","字体资源","数据文件","日志文件","临时文件"].indexOf(t.name)?e.total_size:e.ccw.total_size;var n="MB",i=t.data.value*a/100;return i>1024&&(i/=1024,n="GB"),t.data.name+"<br>"+i.toFixed(2)+" "+n}},legend:{orient:"vertical",left:10,data:a},graphic:{type:"text",left:"center",top:"13%",style:{text:"总占用空间："+i.toFixed(2)+l,textAlign:"center",fill:"#333",fontSize:20}},series:[{name:"占用空间",type:"pie",minAngle:5,radius:["30%","70%"],center:["48%","58%"],label:{formatter:"{b|{b}}\n（{c}%）\n",rich:{b:{align:"center"}}},data:n}]};"ccw"==t?this.ccw.chart.setOption(r):this.myChart.setOption(r),this.myChart.on("click",this.showFolderSize)},showFolderSize:function(t){var e=this;if("graphic"!=t.componentType){this.drawer=!0;var a="";"字体资源"==t.name?a="font":"图片资源"==t.name?a="image":"文本资源"==t.name?a="text":"音频资源"==t.name?a="record":"数据文件"==t.name?a="data":"日志文件"==t.name?a="log":"临时文件"==t.name&&(a="temp"),this.getRequest("/webui/system/disk?type_="+a).then((function(a){if(null==e.ccw.chart&&(e.ccw.chart=e.$echarts.init(e.$refs.ccwEcharts)),a&&200==a.code){for(var n in e.ccw.title=t.name,e.ccw.data=a.data,e.ccw.total_size=0,a.data)"check_time"!=n&&(e.ccw.total_size+=a.data[n]);e.drawPie("ccw")}}))}}}}),fe=me,he=(0,o.Z)(fe,ge,de,!1,null,null,null),_e=he.exports,ve={name:"SystemBasicInfo",components:{SystemStatusTemplate:pe,SystemResourceTemplate:_e},data:function(){return{type:["cpu","memory","disk"],data:null,timer:null}},mounted:function(){var t=this;this.initStatusData(),this.timer=setInterval((function(){setTimeout(t.initStatusData)}),5e3)},methods:{initStatusData:function(){var t=this;this.getRequest("/webui/system/statusList").then((function(e){e&&200==e.code&&(t.data=e.data)}))},getData:function(t){return null==this.data?{}:"cpu"==t?this.data.cpu_data:"memory"==t?this.data.memory_data:this.data.disk_data}},destroyed:function(){clearInterval(this.timer),this.timer=null}},be=ve,ye=(0,o.Z)(be,ie,le,!1,null,null,null),we=ye.exports,xe={name:"SystemInfo",data:function(){return{activeName:"SystemBasicInfo"}},components:{SystemBasicInfo:we}},ke=xe,Se=(0,o.Z)(ke,ae,ne,!1,null,null,null),De=Se.exports;n["default"].use(p.Z);var Te=[{path:"/",name:"Login",component:P},{path:"/home",name:"Home",component:O,redirect:"/plugin",children:[{path:"/plugin",name:"插件列表",component:bt},{path:"/group",name:"群组管理",component:Pt},{path:"/request",name:"请求管理",component:ee},{path:"/system",name:"系统信息",component:De}]}],$e=new p.Z({routes:Te}),qe=$e,ze=a(7968),Le=a.n(ze);n["default"].use(Le());var Pe=new(Le().Store)({state:{}}),Re=a(7605);a(184);n["default"].use(b()),n["default"].config.productionTip=!1,n["default"].prototype.postRequest=w,n["default"].prototype.putRequest=x,n["default"].prototype.getRequest=k,n["default"].prototype.deleteRequest=S,n["default"].prototype.$echarts=Re,new n["default"]({router:qe,store:Pe,render:function(t){return t(c)}}).$mount("#app")}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var l=e[n]={exports:{}};return t[n](l,l.exports,a),l.exports}a.m=t,function(){var t=[];a.O=function(e,n,i,l){if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],i=t[c][1],l=t[c][2];for(var r=!0,o=0;o<n.length;o++)(!1&l||s>=l)&&Object.keys(a.O).every((function(t){return a.O[t](n[o])}))?n.splice(o--,1):(r=!1,l<s&&(s=l));if(r){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}l=l||0;for(var c=t.length;c>0&&t[c-1][2]>l;c--)t[c]=t[c-1];t[c]=[n,i,l]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,l,s=n[0],r=n[1],o=n[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(o)var c=o(a)}for(e&&e(n);u<s.length;u++)l=s[u],a.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return a.O(c)},n=self["webpackChunkweb_ui"]=self["webpackChunkweb_ui"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(8642)}));n=a.O(n)})();