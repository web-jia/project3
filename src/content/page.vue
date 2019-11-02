<template>
  <div class="page">
    <el-row>
      <el-col :span="24">
        <span>生产管理>销售订单</span>
      </el-col>
    </el-row>
    <el-row>
       <order />
    </el-row>
    <el-row>
       <order-progress />
    </el-row>
  </div>
</template>

<script>
import order from '@/components/page/order.vue'
import OrderProgress from '@/components/page/progress.vue'
export default {
    components:{
        order,
        OrderProgress
    }
};
</script>

<style>
  .el-row {
      width:100%;
      margin-bottom: 20px;
    }
.el-row last-child {
      margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>