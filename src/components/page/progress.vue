<template>
    <div class="progress" style="width:1200px;margin: 0 auto;">
         <div style="margin:20px 0 5px 20px">订单任务进度</div>
   <template>
   <table class="table table-striped table-bordered">
    <tr>
      <td class="column">项目编号</td>
      <td class="column">3月12日</td>
      <td class="column">3月13日</td>
      <td class="column">3月14日</td>
      <td class="column">3月15日</td>
      <td class="column">3月16日</td>
      <td class="column">3月17日</td>
    </tr>
    <tr>
      <td class="column">军用螺母</td>
      <td colspan="1"></td>
      <td colspan="4">
          <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception">
          </el-progress>
      </td>
      <td colspan="1"></td>
    </tr>
    <tr>
      <td class="column">常见螺母</td>
      <td colspan="2"></td>
      <td colspan="2">
          <template>
          <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
          </template>
      </td>
      <td colspan="2"></td>
    </tr>
    <tr>
      <td class="column">备注</td>
      <td colspan="1"></td>
      <td colspan="2">
          <template>
          <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
          </template>
      </td>
      <td colspan="3"></td>
    </tr>
    <tr>
      <td class="column">总计</td>
      <td colspan="5">
          <template>
          <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
          </template>
      </td>
      <td colspan="1"></td>
    </tr>
    </table>
    </template>
    </div>
</template>


<script>
export default {

}
</script>
<style scoped>
  table {
    border: 1px solid #ccc;
    width:1200px;
    height:250px;
}
</style>