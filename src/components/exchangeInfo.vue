<style lang="less" scoped type="text/less">
    #exchangeInfo {
        background: #ffffff;
        width: 1200px;
        margin: 0 auto;
        margin-bottom: 60px;
        .pagination{
            padding: 10px 0 10px 0;
        }
        .loading{
            width: 100%;
            height: 1000px;
            text-align: center;
        }
        h2 {
            width: 100%;
            font-size: 16px;
            color: #333333;
            text-align: center;
            height: 56px;
            line-height: 56px;
            position: relative;
            a {
                position: absolute;
                right: 0;
                cursor: pointer;
                font-size: 12px;
                color: #333333;
                text-align: center;
                margin-right: 52px;
            }
        }
        table {
            width: 100%;
            font-size: 12px;
            text-align: center;
            thead {
                border: none;
                tr {
                    height: 45px;
                    border: none;
                    td {
                        border: none;
                        background: #E6E9EE;
                        padding: 0;
                        margin: 0;
                    }
                }
            }
            tbody {
                tr {
                    height: 35px;
                    border-bottom: 1px solid #DDDDDD;
                    td {
                        border-bottom: 1px solid #DDDDDD;
                    }
                }
            }
        }
    }
</style>

<template>
    <div id="exchangeInfo">
        <h2 v-if="more">
            交易
            <a @click="$router.push({path: '/exchange'})">更多</a>
        </h2>
        <div v-if="!more&&!loading" class="pagination">
            <el-pagination
                style="text-align: center"
                v-on:current-change="handlePageChange"
                background
                :current-page="paginationConfig.page"
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
        <table cellspacing="0" cellpadding="0">
            <thead>
            <tr v-if="!loading">
                <td>交易哈希</td>
                <td>交易金额</td>
            </tr>
            <tr v-if="loading" :class="{loading: loading}" v-loading="loading"></tr>
            </thead>
            <tbody v-if="!loading">
            <tr v-for="item in exchangeInfo">
                <td class="address" @click="clickTxHash(item.txId)">{{item.txId}}</td>
                <td>{{item.txFee}}</td>
            </tr>
            </tbody>
        </table>
        <div v-if="!more&&!loading" class="pagination">
            <el-pagination
                style="text-align: center"
                v-on:current-change="handlePageChange"
                background
                :current-page="paginationConfig.page"
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['exchangeInfo','loading','more','paginationConfig','searchConfig'],
        data() {
            return {

            }
        },
        components: {},
        computed: {},
        methods: {
            handlePageChange(page){
                this.paginationConfig.page = page;
                let query = Object.assign({page: page},this.paginationConfig);
                this.$router.push({path: this.router,query: query});
            },
            clickTxHash(txHash) {
                this.$router.push({
                    path: '/txInfo',
                    query: {
                        txHash
                    }
                })
            }
        },
        mounted() {

        }
    }
</script>
