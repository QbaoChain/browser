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
            div {
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
                .red {
                    margin-left: 50px;
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

    /*.moveRight:before { !*伪元素before绘制箭头尾部矩形*!*/
        /*border: none;*/
        /*background: red;*/
        /*height: 2px;*/
        /*width: 100%;*/
        /*top: -150%;*/
        /*!*left: 40px;*!*/
    /*}*/

    /*.moveRight:after { !*伪元素after绘制箭头的头部三角形*!*/
        /*border: 4px solid transparent;*/
        /*border-left: 16px solid #f00;*/
        /*width: 0;*/
        /*display: inline-block;*/
        /*right: -20px;*/
        /*top: -250%;*/
        /*border-left-color: red; !*如果绘制向下三角形的话，用border-top-color:#555;*!*/
    /*}*/
</style>

<template>
    <div id="txInfoHeader">
        <h2>
            交易信息
        </h2>
        <ul>
            <li>
                <label>交易hash：</label><span class="address">{{txInfo.txId}}</span>
            </li>
            <li>
                <label>区块hash：</label><span>{{txInfo.blockHash}}</span>
            </li>
            <li>
                <label>区块高度：</label><span>{{txInfo.blockHeight}}</span>
            </li>
            <li>
                <label>交易大小：</label><span>{{txInfo.size}}</span>
            </li>
            <li>
                <label>时间：</label><span>{{txInfo.time}}</span>
            </li>
            <li>
                <label>确认数：</label><span>3</span>
            </li>
            <li>
                <label>手续费：</label><span>{{txInfo.txFee}}</span>
            </li>
        </ul>
        <h3>

        </h3>
        <div id="blockInfo">
            <div>
                <div class="left">
                    <div class="red">输入：</div>
                    <ul>
                        <li v-for="txVin in txInfo.txVin">
                            <span class="address">{{txVin.address}}</span>
                            {{txInfo.txFee}} {{txInfo.txVout[0].symbol}}
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <div class="red">输出：</div>
                    <ul>
                        <li v-for="txVout in txInfo.txVout">
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
    export default {
        props: ['txHash'],
        data() {
            return {
                txInfo: {
                    txId: null,
                    time: null,
                    blockHash: null,
                    blockHeight: null,
                    size: null,
                    txFee: null,
                    txVin: null,
                    txVout: null
                }
            }
        },
        components: {},
        computed: {
        },
        methods: {
            getTxInfo(txId) {
                let params = {
                    txHash: txId,
                    page: 0,
                    size: 1
                };
                get('/qtumRPC/transactionInfo', params).then(res => {
                    let data = res.data.content;
                    if (data.length) {
                        Object.assign(this.txInfo, data[0]);
                        this.txInfo.txVin = JSON.parse(this.txInfo.txVin);
                        this.txInfo.txVout = JSON.parse(this.txInfo.txVout);
                    }
                })
            }
        },
        mounted() {
            let txId = this.$route.query.txId;
            this.getTxInfo(txId);
        }
    }
</script>
