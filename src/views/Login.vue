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
            <el-input v-model="loginData.name"></el-input>
          </el-form-item>
          <el-form-item
            :label="labelText.passWord"
            prop="passWord"
            :rules="[
              { required: true, message: '密码不能为空'},
              { type: 'string', message: '密码必须为字符串'}
            ]"
          >
            <el-input type="password" v-model="loginData.passWord"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(formRef)">提交</el-button>
            <el-button @click="resetForm(formRef)">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      welcomeText: '【边城】欢迎你！',
      formRef: 'loginFormRef',
      loginData: {
        name: '',
        passWord: ''
      },
      labelText: {
        name: '用户名',
        passWord: '密码'
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid) {
          console.log('通过校验')
        } else {
          console.log('请完善字段')
        }
      })
    },
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