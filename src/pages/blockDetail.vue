<style lang="less" scoped type="text/less">
    #txInfoHeader {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
        h2 {
            background: #E6E9EE;
            width: 100%;
            height: 45px;
            line-height: 45px;
            font-size: 12px;
            color: #666666;
            text-align: center;
        }
        ul {
            background: #FFFFFF;
            padding: 16px 0 20px 0;
            li {
                font-size: 14px;
                line-height: 26px;
                margin-left: 50px;
                label {
                    color: #333;
                    display: inline-block;
                    min-width: 80px;
                    text-align: right;
                }
                span {
                    color: #2A2A2A;
                }
                .address {
                    cursor: pointer;
                    color: #006AFF;
                }
            }
        }
    }

    #blockInfo {
        width: 1200px;
        margin: 0 auto;
        background: #ffffff;
        margin-top: 20px;
        margin-bottom: 128px;
        h2 {
            width: 100%;
            font-size: 16px;
            color: #333333;
            text-align: center;
            height: 56px;
            line-height: 56px;
            a {
                font-size: 12px;
                color: #333333;
                text-align: center;
                float: right;
                margin-right: 52px;
            }
        }
        >div {
            padding: 20px 0;
            border-bottom: 1px solid #f6f7f9;
            ul {
                li {
                    list-style-type: none;
                    display: inline-block;
                    font-size: 16px;
                    line-height: 36px;
                }
                .tLeft {
                    text-align: left;
                    margin-left: 41px;
                    > div {

                    }
                }
                .tRight {
                    width: 46.5%;
                    text-align: right;
                    font-size: 12px;
                    color: #666666;
                    margin-right: 40px;
                }
            }
            ul {
                li {
                    width: 100%;
                    display: block;
                    font-size: 12px;
                    line-height: 26px;
                }
            }

            .left {
                width: 47%;
                float: left;
                margin-left: 42px;
            }

            .right {
                width: 47%;
                float: right;

                li {
                    margin-right: 40px;
                }
            }
        }

    }

    .moveRight { /*箭头占位符，规定宽高等*/
        width: 510px;
        height: 3px;
        display: inline-block;
        position: relative;
        cursor: pointer;
        /*background: red;*/
    }

    .moveRight:before, .moveRight:after { /*伪元素相同属性提取*/
        content: '';
        /*border-color: transparent; !*边框颜色透明*!*/
        border-style: solid;
        position: absolute; /*绝对定位，分别定位before和after描绘的内容*/
    }

    .moveRight:before { /*伪元素before绘制箭头尾部矩形*/
        border: none;
        background: red;
        height: 2px;
        width: 100%;
        top: -150%;
        /*left: 40px;*/
    }

    .moveRight:after { /*伪元素after绘制箭头的头部三角形*/
        border: 4px solid transparent;
        border-left: 16px solid #f00;
        width: 0;
        display: inline-block;
        right: -20px;
        top: -250%;
        border-left-color: red; /*如果绘制向下三角形的话，用border-top-color:#555;*/
    }
</style>

<template>
    <div id="txInfoHeader">
        <headerInfo></headerInfo>
        <h2>
            区块信息
        </h2>
        <ul>
            <li>
                <label>区块hash：</label><span class="address">{{blockInfo.blockHash}}</span>
            </li>
            <li>
                <label>区块高度：</label><span>{{blockInfo.blockHeight}}</span>
            </li>
            <li>
                <label>区块大小：</label><span>{{blockInfo.blockSize}}</span>
            </li>
            <li>
                <label>时间：</label><span>{{blockInfo.blockTime}}</span>
            </li>
            <li>
                <label>区块奖励：</label><span>{{blockInfo.blockAward}}</span>
            </li>
            <li>
                <label>挖矿地址：</label><span>{{blockInfo.blockMiner}}</span>
            </li>
            <li>
                <label>交易数量：</label><span>{{blockInfo.blockTxcount}}</span>
            </li>
        </ul>
        <h3>

        </h3>
        <div v-for="item in txInfos" id="blockInfo">
            <div>
                <div class="left">
                    <div class="red">输入：<span class="moveRight"></span></div>
                    <ul>
                        <li v-for="txVin in item.txVin">
                            <span
                                class="address">{{txVin.address}}</span>
                            {{item.txFee}} {{item.txVout[0].symbol}}
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <div class="red">输出：</div>
                    <ul>
                        <li v-for="txVout in item.txVout">
                            <span
                                class="address">{{txVout.address}}</span>
                            {{txVout.value}} {{txVout.symbol}}
                        </li>
                    </ul>
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { get } from '../ajax/index'
    import headerInfo from '../components/headerInfo.vue';
    export default {
        props: [],
        data() {
            return {
                blockInfo: {
                    blockHash: null,
                    blockHeight: null,
                    blockSize: null,
                    blockTime: null,
                    blockAward: null,
                    blockMiner: null,
                    blockTxcount: null
                },
                txInfos: [],
                block: null,
                page: 0,
            }
        },
        components: {
            headerInfo
        },
        computed: {
        },
        watch: {
        },
        methods: {
            getBlockInfoData(blockHashHeight){
                let param = {
                    blockHashOrBlockCount: blockHashHeight
                };
                get('/qtumRPC/blockInfo',param).then(res=>{
                    if (res.data) {
                        Object.assign(this.blockInfo, res.data);
                    }
                });
            },
            getBlockTx(block) {
                let blockHeight = new Number(block);
                let param = {
                    page: this.page,
                    size: 10
                };
                if (blockHeight.valueOf()) {
                    param.blockHeight = blockHeight.toString();
                } else {
                    param.blockHash = block;
                }
                get('/qtumRPC/transactionInfo', param).then(res => {
                    if (res.data && res.data.content.length) {
                        res.data.content.forEach(tx => {
                            tx.txVin = JSON.parse(tx.txVin);
                            tx.txVout = JSON.parse(tx.txVout);
                            this.txInfos.push(tx);
                        })
                    }
                });
            },
            fetchDate() {
                let page = !this.$route.query.page ? 0 : Number(this.$route.query.page);
                this.paginationConfig.page = Math.max(1, page);
                this.getBlockInfoData()
            },
            changes() {
                this.$router.push({
                    path: '/block',
                    query: {
                        page: this.$route.query.page || 1
                    }
                })
            },
        },
        mounted() {
            let block = this.$route.query.block;
            this.getBlockInfoData(block);
            this.getBlockTx(block);
        }
    }
</script>
