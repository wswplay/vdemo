(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"80cd":function(e,a,t){},"92a5":function(e,a,t){"use strict";t("80cd")},a55b:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"Login centerFlex"},[t("div",{staticClass:"content"},[t("div",{staticClass:"welcome"},[e._v(e._s(e.welcomeText))]),t("div",{staticClass:"login-form-box"},[t("el-form",{ref:e.formRef,staticClass:"login-form-material",attrs:{model:e.loginData,"label-width":"100px","status-icon":"","show-message":!1}},[t("el-form-item",{attrs:{label:e.labelText.name,prop:"name",rules:[{required:!0,message:"用户名不能为空"},{type:"string",message:"年龄必须为字符串"}]}},[t("el-input",{attrs:{clearable:"",placeholder:"admin可用"},model:{value:e.loginData.name,callback:function(a){e.$set(e.loginData,"name",a)},expression:"loginData.name"}})],1),t("el-form-item",{attrs:{label:e.labelText.passWord,prop:"passWord",rules:[{required:!0,message:"密码不能为空"},{type:"string",message:"密码必须为字符串"}]}},[t("el-input",{attrs:{type:"password",clearable:"",placeholder:"admin可用"},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.submitForm.apply(null,arguments)}},model:{value:e.loginData.passWord,callback:function(a){e.$set(e.loginData,"passWord",a)},expression:"loginData.passWord"}})],1),t("el-form-item",[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.submitForm}},[e._v("提交")]),t("el-button",{attrs:{size:"small"},on:{click:function(a){return e.resetForm(e.formRef)}}},[e._v("重置")])],1)],1)],1)])])},n=[],r=(t("b0c0"),t("5f87")),i={name:"Login",data:function(){return{welcomeText:"【边城】欢迎你！",roleObj:{admin:"admin",biancheng:"admin",nanzhi:"boss",xiao:"hero"},passWordObj:{admin:"admin",biancheng:"000",nanzhi:"123",xiao:"666"},formRef:"loginFormRef",loginData:{name:"",passWord:""},labelText:{name:"用户名",passWord:"密码"},redirect:null}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{submitForm:function(){var e=this;this.$refs[this.formRef].validate((function(a){a?e.checkPassWord()?(e.$message({message:"登录成功",type:"success"}),Object(r["c"])("bian_cheng_".concat(e.roleObj[e.loginData.name])),e.$router.push(e.redirect||"/")):e.$message.error("用户名或者密码错误，请重试"):e.$message.error("请完善字段")}))},checkPassWord:function(){var e=this.loginData,a=e.name,t=e.passWord;return t===this.passWordObj[a]},resetForm:function(e){this.$refs[e].resetFields()}}},o=i,l=(t("92a5"),t("2877")),c=Object(l["a"])(o,s,n,!1,null,"2154f678",null);a["default"]=c.exports}}]);
//# sourceMappingURL=Login.1d73398f.js.map