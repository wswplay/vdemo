(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"31dd":function(e,t,a){},a55b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Login centerFlex"},[a("div",{staticClass:"content"},[a("div",{staticClass:"welcome"},[e._v(e._s(e.welcomeText))]),a("div",{staticClass:"login-form-box"},[a("el-form",{ref:e.formRef,staticClass:"login-form-material",attrs:{model:e.loginData,"label-width":"100px","status-icon":"","show-message":!1}},[a("el-form-item",{attrs:{label:e.labelText.name,prop:"name",rules:[{required:!0,message:"用户名不能为空"},{type:"string",message:"年龄必须为字符串"}]}},[a("el-input",{attrs:{clearable:"",placeholder:"admin可用"},model:{value:e.loginData.name,callback:function(t){e.$set(e.loginData,"name",t)},expression:"loginData.name"}})],1),a("el-form-item",{attrs:{label:e.labelText.passWord,prop:"passWord",rules:[{required:!0,message:"密码不能为空"},{type:"string",message:"密码必须为字符串"}]}},[a("el-input",{attrs:{type:"password",clearable:"",placeholder:"admin可用"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm.apply(null,arguments)}},model:{value:e.loginData.passWord,callback:function(t){e.$set(e.loginData,"passWord",t)},expression:"loginData.passWord"}})],1),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.submitForm}},[e._v("提交")]),a("el-button",{attrs:{size:"small"},on:{click:function(t){return e.resetForm(e.formRef)}}},[e._v("重置")])],1)],1)],1)])])},r=[],n=a("5530"),o=(a("b0c0"),a("2f62")),i={name:"Login",data:function(){return{welcomeText:"【JavaScript边城】欢迎你！",passWordObj:{admin:"admin",biancheng:"000",nanzhi:"123",xiao:"666"},formRef:"loginFormRef",loginData:{name:"",passWord:""},labelText:{name:"用户名",passWord:"密码"},redirect:null}},computed:Object(n["a"])({},Object(o["d"])(["roleObj"])),watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:Object(n["a"])(Object(n["a"])({},Object(o["c"])(["setRoles","setToken","setUserInfo"])),{},{submitForm:function(){var e=this;this.$refs[this.formRef].validate((function(t){t?e.checkPassWord()?(e.$message({message:"登录成功",type:"success"}),e.setToken("bian_cheng_".concat(e.roleObj[e.loginData.name])),e.setRoles([e.roleObj[e.loginData.name]]),e.setUserInfo(e.loginData),e.$router.push(e.redirect||"/")):e.$message.error("用户名或者密码错误，请重试"):e.$message.error("请完善相关字段")}))},checkPassWord:function(){var e=this.loginData,t=e.name,a=e.passWord;return a===this.passWordObj[t]},resetForm:function(e){this.$refs[e].resetFields()}})},l=i,c=(a("e3f0"),a("2877")),m=Object(c["a"])(l,s,r,!1,null,"1950b392",null);t["default"]=m.exports},e3f0:function(e,t,a){"use strict";a("31dd")}}]);
//# sourceMappingURL=Login.dae430eb.js.map