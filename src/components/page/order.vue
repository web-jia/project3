<template>
     <div class="order" style="width:1200px;margin: 0 auto;">
         <div style="margin:20px 0 5px 20px">产品信息</div>
        <el-table
            :data="tableData"
            height="190"
            stripe="true"
            :row-style="tableRowStyle"
            :header-cell-style="tableHeaderColor"
            style="width: 100%">
            <el-table-column
                prop="tag"
                width="200">
            </el-table-column>
            <el-table-column
                prop="confidence"
                width="200">
            </el-table-column>
            <el-table-column
                prop="tag"
                width="200">
            </el-table-column>
            <el-table-column
                prop="confidence"
                width="200">
            </el-table-column>
            <el-table-column
                prop="category_tag_level"
                width="200">
            </el-table-column>
            <el-table-column
                prop="category_tag_level"
            >
            </el-table-column>
        </el-table>
     </div>
</template>

<script>
export default {
        data () {
            return {
                tableData: [{
                    tag: '产品名称',
                    confidence: '标准',
                    category_tag_level: '规程'
                }, {
                    tag: '螺母',
                    confidence: '常规',
                    category_tag_level: '342&2'
                }, {
                    tag: '螺母',
                    confidence: '常规',
                    category_tag_level: '342&2'
                }, ]
            }
        },
    }

</script>