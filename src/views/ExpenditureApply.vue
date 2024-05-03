<template>
  <div>
    <head-top></head-top>
    <el-row style="margin-top: 20px;">
      <el-col :span="16" :offset="4">
        <el-form label-width="110px" class="demo-formData">
          <el-form-item label="申请部门">
            <el-input v-model="applyDepartment"></el-input>
          </el-form-item>

          <el-form-item label="申请人">
            <el-input v-model="applyer"></el-input>
          </el-form-item>

          <el-form-item label="联系电话">
            <el-input v-model="phone" maxLength="11"></el-input>
          </el-form-item>

          <el-form-item label="项目名称">
            <el-input v-model="projectName"></el-input>
          </el-form-item>

          <el-form-item label="项目描述">
            <el-input v-model="projectDescription"></el-input>
          </el-form-item>

          <el-form-item label="申请类型">
            <el-select v-model="selectType" placeholder="请选择">
              <el-option
                v-for="item in applyType"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="申请金额">
            <el-input-number v-model="applyMoney" :min="1"></el-input-number><span>元</span>
          </el-form-item>

          <el-form-item label="申请原因" style="white-space: nowrap;">
            <textarea v-model="applyReason" style="width: 420px; height: 220px"></textarea>
          </el-form-item>

          <el-form-item label="证明材料">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="true"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="applyMaterial" :src="applyMaterial" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item class="button_submit">
            <el-button type="primary" @click="submitForm()">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import HeadTop from "../components/HeadTop";

  export default {
    data() {
      return {
        applyDepartment: '',
        applyer: '',
        phone: '',
        projectName: '',
        projectDescription: '',
        applyType: [{
          value: '1',
          label: '小组'
        },{
          value: '2',
          label: '部门'
        },{
          value: '3',
          label: '分公司'
        },{
          value: '4',
          label: '总部'
        }],
        selectType: '',
        applyMoney: '',
        applyReason: '',
        applyMaterial: ''
      }
    },
    components: {
      HeadTop
    },

    methods:{
      submitForm(){
        if(this.applyDepartment && this.applyer && this.phone && this.projectName && this.selectType
          && this.projectDescription && this.applyMoney && this.applyReason){
          this.applyDepartment = this.applyer = this.phone = this.projectName = this.selectType
            =this.projectDescription = this.applyMoney = this.applyReason = this.applyMaterial = ''

          this.$message({
            type: 'success',
            message: '提交成功'
          })
          return
        }

        this.$message({
          type: 'error',
          message: '请按要求填写完毕'
        })

      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },

      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style scoped>
  .button_submit{
    text-align: center;
  }

  /deep/ .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  /deep/ .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }

</style>



