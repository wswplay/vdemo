<template>
  <div class="Login centerFlex">
    <div class="content">
      <div class="welcome">{{welcomeText}}</div>
      <div class="login-form-box">
        <el-form
          :model="loginData"
          :ref="formRef"
          label-width="100px"
          class="login-form-material"
          status-icon
          :show-message="false"
        >
          <el-form-item
            :label="labelText.name"
            prop="name"
            :rules="[
              { required: true, message: '用户名不能为空'},
              { type: 'string', message: '年龄必须为字符串'}
            ]"
          >
            <el-input v-model="loginData.name" clearable placeholder="admin可用"></el-input>
          </el-form-item>
          <el-form-item
            :label="labelText.passWord"
            prop="passWord"
            :rules="[
              { required: true, message: '密码不能为空'},
              { type: 'string', message: '密码必须为字符串'}
            ]"
          >
            <el-input
              type="password"
              v-model="loginData.passWord"
              clearable
              @keyup.enter.native="submitForm"
              placeholder="admin可用"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="primary" @click="submitForm">提交</el-button>
            <el-button size="small" @click="resetForm(formRef)">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      welcomeText: '【JavaScript边城】欢迎你！',
      passWordObj: {
        admin: 'admin',
        biancheng: '000',
        nanzhi: '123',
        xiao: '666'
      },
      formRef: 'loginFormRef',
      loginData: {
        name: '',
        passWord: ''
      },
      labelText: {
        name: '用户名',
        passWord: '密码'
      },
      redirect: null,
    }
  },
  computed : {
    ...mapState([
      'roleObj',
    ])
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations([
      'setRoles',
      'setToken',
      'setUserInfo'
    ]),
    // 提交表单
    submitForm() {
      this.$refs[this.formRef].validate((valid) => {
        if(valid) {
          if(this.checkPassWord()) {
            this.$message({message: '登录成功', type: 'success'});
            this.setToken(`bian_cheng_${this.roleObj[this.loginData.name]}`);
            this.setRoles([this.roleObj[this.loginData.name]]);
            this.setUserInfo(this.loginData);
            this.$router.push(this.redirect || '/');
          } else {
            this.$message.error('用户名或者密码错误，请重试');
          }
        } else {
          this.$message.error('请完善相关字段');
        }
      })
    },
    checkPassWord() {
      const { name, passWord } = this.loginData;
      if(passWord === this.passWordObj[name]) return true;
      return false;
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  }
}
</script>

<style lang="less" scoped>
.Login {
  width: 100%;
  height: 100vh;
  .content {
    width: 50%;
    .welcome {
      font-size: @fontSize18;
    }
    .login-form-box {
      padding-top: 36px;
    }
  }
}
</style>