<template>
  <div class="login_page">
    <transition mode="in-out" name="form-fade">
      <section v-show="showLogin" class="form_contianer">
        <div class="manage_tip">
          <p>Amireux后台管理系统</p>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" placeholder="密码" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm" class="submit_btn">登录</el-button>
          </el-form-item>
        </el-form>
        <p class="tip">温馨提示：</p>
        <p class="tip">未登录过的新用户，自动注册</p>
        <p class="tip">注册过的用户可凭账号密码登录</p>
      </section>
    </transition>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
        },
        showLogin: false,
      }
    },

    mounted() {
      this.$nextTick(() => {
        this.showLogin = true
      })

      window.addEventListener('keyup',this.handleEnter, false)
    },

    computed: {
      ...mapState(['accounts'])
    },

    destroyed () {
      window.removeEventListener('keyup',this.handleEnter, false)
    },


    methods: {
      ...mapActions(['setCurrentAccount']),

      async submitForm () {
        this.$refs.loginForm.validate(async (valid) => {
          if (valid) {
            for(let i=0; i<this.accounts.length; i++){
              if(this.loginForm.username===this.accounts[i].username &&
                this.loginForm.password===this.accounts[i].password){

                this.$message({
                  type: 'success',
                  message: '登录成功'
                })
                this.setCurrentAccount(this.loginForm)

                this.$router.push('/manage')
                return true
              }
            }

            this.$message({
              type: 'error',
              message: '用户名或密码错误'
            })
          } else {
            this.$notify.error({
              title: '错误',
              message: '请输入正确的用户名密码',
              offset: 100
            })
            return false
          }
        })
      },

      handleEnter(e){
        if(e && e.keyCode===13) {
          if(this.loginForm.username.trim() && this.loginForm.password.trim()){
            this.submitForm()
          }
        }
      }
    }
  }
</script>

<style scoped>
  .login_page{
    padding: 0;
    margin: 0;
    border: 0;
    background-color: #324057;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  .form_contianer{
    width: 320px;
    height: 240px;
    position: absolute;
    top: 50%;
    left: 45%;
    margin-top: -160px;
    margin-left: -120px;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
  }

  .manage_tip {
    position: absolute;
    width: 100%;
    top: -100px;
    left: 0;
  }

  .manage_tip p{
    font-size: 34px;
    color: #fff;
  }

  .form_contianer .submit_btn{
    width: 100%;
    font-size: 16px;
  }

  .tip{
    font-size: 12px;
    color: red;
    margin-top: 2px;
    margin-bottom: 2px;
  }

  .form-fade-enter-active, .form-fade-leave-active {
    transition: all 1s;
  }
  .form-fade-enter, .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }

</style>
