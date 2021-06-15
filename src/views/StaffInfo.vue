<template>
  <div>
    <head-top></head-top>
    <el-row>
     <el-col :span="16" :offset="4">
       <el-form ref="staffInfo" :model="staffInfo" label-width="120px">
         <el-form-item label="姓名:" prop="name">
           <span class="infoItem">{{staffInfo.name}}</span>
         </el-form-item>
         <el-form-item label="部门:" prop="department">
           <span class="infoItem">{{staffInfo.department}}</span>
         </el-form-item>
         <el-form-item label="职位:" prop="professional">
           <span class="infoItem">{{staffInfo.professional}}</span>
         </el-form-item>
         <el-form-item label="注册时间:" prop="registerTime">
           <span class="infoItem">{{staffInfo.registerTime}}</span>
         </el-form-item>
         <el-form-item label="邮箱:" prop="email">
           <el-input class="infoItem" v-model="emailInput" :disabled="ifDisable" style="width:300px; margin-right: 20px"></el-input>
           <el-button type="warning" @click="changeEmail">修改</el-button>
           <el-button type="primary" @click="submitEmail">提交</el-button>
         </el-form-item>
       </el-form>
     </el-col>
    </el-row>
  </div>
</template>

<script>
  import HeadTop from '../components/HeadTop'
  import {mapState} from 'vuex'

  export default {
    data(){
      return {
        staffInfo: null,
        emailInput: '',
        ifDisable: true,
        id: -1
      }
    },

    components:{
      HeadTop
    },

    created() {
      this.$nextTick(() => {
        this.getInfo()
      })
    },

    computed:{
      ...mapState(['currentAccount']),
      ...mapState(['accounts'])
    },

    methods: {

      getInfo(){
        let id = this.currentAccount.username
        for(let i=0; i < this.accounts.length; i++){
          if(this.accounts[i].username===id){
            this.id = i
            this.staffInfo = {
              name: this.accounts[i].name.trim(),
              department: this.accounts[i].department.trim(),
              professional: this.accounts[i].professional.trim(),
              registerTime: this.accounts[i].registerTime.trim(),
            }
            this.emailInput = this.accounts[i].email
            return
          }
        }
      },

      changeEmail(){
        this.ifDisable = !this.ifDisable
      },

      submitEmail(){
        if(!this.ifDisable){
          this.ifDisable = !this.ifDisable
          this.accounts[this.id].email = this.emailInput
          console.log(this.accounts[this.id].email)
        }
      }
    }
  }
</script>

<style scoped>
  .infoItem {
    background-color: #dfdfdf;
  }
</style>
