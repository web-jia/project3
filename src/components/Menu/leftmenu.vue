<template>
     <div class="menu">
         <dl>
             <dt>生产管理</dt>
             <dd>生产模板</dd>
             <router-link tag="dd" :to="{name:'page'}">
                 销售订单            
            </router-link>           
             <dd>项目列表</dd>
             <dd>生产任务</dd>
             <dd>生产报表</dd>
         </dl>
         <hr style="margin-top:15px;border:1px solid #fff"/>
          <dl>
             <dt>生产管理</dt>
             <dd>生产模板</dd>
             <router-link tag="dd" :to="{name:'page'}">
                 销售订单            
            </router-link>           
             <dd>项目列表</dd>
             <dd>生产任务</dd>
             <dd>生产报表</dd>
         </dl>
         <hr style="margin-top:15px;border:1px solid #fff"/>
                 <dl>
             <dt>生产管理</dt>
             <dd>生产模板</dd>
             <router-link tag="dd" :to="{name:'page'}">
                 销售订单            
            </router-link>           
             <dd>项目列表</dd>
             <dd>生产任务</dd>
             <dd>生产报表</dd>
         </dl>
     </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .menu{
        background-color: #eef1f6;
    }
    .menu dt{
        font-weight: bold;
        padding:15px 0px 10px 15px;
    }
    .menu dd{
        text-align:center;
        margin:6px;
        cursor: pointer;
    }
    .menu dd:hover{
        background:aquamarine;
    }
</style>