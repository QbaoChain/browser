<style lang="less" scoped type="text/less">
    #blockInfo{
        width: 1200px;
        margin: 0 auto;
        margin-bottom: 20px;
        background: #ffffff;
        .pagination{
            padding: 10px 0 10px 0;
        }
        .loading{
            width: 100%;
            height: 1000px;
            text-align: center;
        }
        h2{
            width: 100%;
            font-size: 16px;
            color: #333333;
            text-align: center;
            height: 56px;
            line-height: 56px;
            position: relative;
            a{
                position: absolute;
                right: 0;
                cursor: pointer;
                font-size: 12px;
                color: #333333;
                text-align: center;
                margin-right: 52px;
            }
        }
        table{
            width: 100%;
            font-size: 12px;
            text-align: center;
            thead{
                border: none;
                tr{
                    height: 45px;
                    border: none;
                    td{
                        border: none;
                        background: #E6E9EE;
                        padding:0;
                        margin:0;
                    }
                }
            }
            tbody{
                tr{
                    height: 35px;
                    border-bottom: 1px solid #DDDDDD;
                    td{
                        border-bottom: 1px solid #DDDDDD;
                    }
                }
            }
        }
    }

    .bottom {
        padding-bottom: 150px;
    }
</style>

<template>
    <div id="blockInfo" :class="!isIndex?'bottom':'none'">
        <h2 v-if="more">
            区块
            <a @click="$router.push({path: '/block'})">更多</a>
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
        <table
            cellspacing="0"
            cellpadding="0">
            <thead>
                <tr v-if="!loading">
                    <td>高度</td>
                    <td>时间</td>
                    <td>区块奖励</td>
                    <td>交易数(条)</td>
                    <td>区块哈希</td>
                    <td>挖矿地址</td>
                </tr>
                <tr v-if="loading" :class="{loading: loading}" v-loading="loading"></tr>
            </thead>
            <tbody v-if="!loading">
                <tr v-for="item in blockInfoData">
                    <td class="address" @click="clickBlock(item.blockHeight)">{{item.blockHeight}}</td>
                    <td>{{item.blockTime}}</td>
                    <td>{{item.blockAward}}</td>
                    <td>{{item.blockTxcount}}</td>
                    <td class="address" @click="clickBlock(item.blockHash)">{{item.blockHash}}</td>
                    <td class="address" @click="addressInfo(item.blockMiner)">{{item.blockMiner}}</td>
                </tr>
            </tbody>
        </table>
        <div v-if="!more&&!loading" class="pagination">
            <el-pagination
                style="text-align: center"
                background
                v-on:current-change="handlePageChange"
                :current-page="paginationConfig.page"
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
	export default {
		props: ['loading','blockInfoData','more','paginationConfig','searchConfig','isIndex'],
		data() {
			return {

            }
		},
		components: {

        },
		computed: {

        },
		methods: {
            addressInfo(address){
                this.$router.push({
                    path: '/addressInfo',
                    query: {
                        address
                    }
                })
            },
            clickBlock(block) {
                this.$router.push({
                    path: '/blockDetail',
                    query: {
                        block
                    }
                })
            },
            handlePageChange(page){
                this.paginationConfig.page = page;
                let query = Object.assign({page: page},this.paginationConfig);
                this.$router.push({path: this.router,query: query});
            }
        },
		mounted() {
            console.log(999,this.paginationConfig)
		}
	}
</script>
