<template>
  <div class="manage_page fillcontain">
    <el-row style="height: 100%;">
      <el-col :span="4" style="min-height: 100%">
        <el-menu :default-active="defaultActive" style="min-height: 100%" theme="dark" router>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-document"></i>个人管理</template>
            <el-menu-item index="gatecard">出勤信息</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-plus"></i>财务管理</template>
            <el-menu-item index="expenditureapply">经费申请</el-menu-item>
            <el-menu-item index="expendituredetail">财务明细</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-star-on"></i>员工管理</template>
            <el-menu-item index="staffbehavior">员工绩效</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-edit"></i>发货管理</template>
            <el-menu-item index="goodsstatus">发货明细</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    computed: {
      defaultActive: function () {
        return this.$route.path.replace('/', '')
      }
    },
  }
</script>


<style scoped>

</style>
