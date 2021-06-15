<template>
  <div class="fillcontain">
    <head-top></head-top>
    <div class="table_container">
      <el-table :data="record" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="enterTime" label="打卡时间" width="180"></el-table-column>
        <el-table-column prop="leaveTime" label="离开时间" width="180"></el-table-column>
        <el-table-column prop="ifAbsent" label="是否缺勤" width="180"></el-table-column>
        <el-table-column prop="ifVacate" label="是否请假" width="180"></el-table-column>
        <el-table-column prop="remark" label="备注" width="180"></el-table-column>
      </el-table>
      <div class="Pagination" style="text-align: left;margin-top: 10px;">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="20"
          layout="total, prev, pager, next"
          :total="count">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import HeadTop from "../components/HeadTop";
  import {mapState} from 'vuex'

  export default {
    data(){
      return {
        record: [],
        count: 3,
        limit: 20,
        currentPage: 1
      }
    },

    components:{
      HeadTop
    },

    created() {
      this.$nextTick(() => {
        this.calRecord()
      })
    },

    computed: {
      ...mapState(['cardRecord']),
      ...mapState(['currentAccount'])
    },

    methods: {
      calRecord(){
        let userId = this.currentAccount.username
        for(let i=0; i<this.cardRecord.length; i++){
          if(this.cardRecord[i].staffId===userId){
            let oneRecord = {
              date: this.cardRecord[i].date,
              enterTime: this.cardRecord[i].enterTime,
              leaveTime: this.cardRecord[i].leaveTime
            }
            if(this.cardRecord[i].ifAbsent){
              oneRecord.ifAbsent = "缺勤"
            }else{
              oneRecord.ifAbsent = ""
            }

            if(oneRecord.ifAbsent){
              if(this.cardRecord[i].ifVacate){
                oneRecord.ifVacate = "已请假"
              }else{
                oneRecord.ifVacate = "未请假"
              }
            }else{
              oneRecord.ifVacate = ""
            }
            oneRecord.remark = this.cardRecord[i].remark

            this.record.unshift(oneRecord)
          }
        }
      },

      handleCurrentChange(val) {
        this.currentPage = val
        this.offset = (val - 1)*this.limit
      },
    }
  }
</script>

<style scoped>
  .table_container {
    padding: 20px;
  }
</style>
