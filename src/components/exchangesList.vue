<style lang="less" scoped type="text/less">
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
                    width: 55%;
                    text-align: left;
                    margin-left: 41px;
                    > div {

                    }
                }
                .tRight {
                    width: 35%;
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
    <div id="blockInfo">
        <div v-for="item in txInfos">
            <ul>
                <li class="tLeft"><span class="address" @click="clickTransaction($router, item.txId)">{{item.txId}}</span><copy-clipboard :value="item.txId"></copy-clipboard></li>
                <li class="tRight"><span class="red">{{maxBlockHeight - item.blockHeight + 1}}个确认</span> {{item.time}}</li>
            </ul>
            <div>
                <div class="left">
                    <div class="red">输入：<span class="moveRight"></span></div>
                    <ul>
                        <li v-for="txVin in item.txVin">
                            <span class="address" @click="clickAddress($router, txVin.address)">{{txVin.address}}</span>
                            {{item.txFee}} {{item.txVout[0].symbol}}
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <div class="red">输出：</div>
                    <ul>
                        <li v-for="txVout in item.txVout">
                            <span class="address" @click="clickAddress($router, txVout.address)">{{txVout.address}}</span>
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
    import copyClipboard from '../components/copyClipboard.vue'
    export default {
        props: ['address'],
        data() {
            return {
                txInfos: [],
                page: 0,
                lastCount: 10,
                maxBlockHeight: null
            }
        },
        components: {
            copyClipboard
        },
        computed: {},
        methods: {
            getTxInfo() {
                let count = 0;
                let param = {
                    address: this.address,
                    page: this.page,
                    size: 10
                };
                get('/qtumRPC/addressTxList',param).then((res) => {
                    this.lastCount = res.data.length;
                    res.data.forEach((item)=>{
                        this.txInfos.push({
                            blockHash: item.blockHash,
                            blockHeight: item.blockHeight,
                            size: item.size,
                            time: item.time,
                            txFee: item.txFee,
                            txId: item.txId,
                            txVin: JSON.parse(item.txVin),
                            txVincount: item.txVincount,
                            txVout: JSON.parse(item.txVout),
                            txVoutcout: item.txVoutcout
                        })
                    });
                })
            },
            getInitTxInfo(){
                console.log(111, this.address);
                this.txInfos = [];
                this.getTxInfo();
            },

            getNextTxInfo() {
                this.page++;
                this.getTxInfo();
            },
            getMaxBlockHeight() {
                get('/qtumRPC/maxBlockHeight').then(res => {
                    if (res.data) {
                        this.maxBlockHeight = res.data.maxHeight;
                    }
                })
            },
            initData() {
                this.txInfos = [];
                this.page = 0;
                this.lastCount = 10;
                this.maxBlockHeight = null;
            }

        },
        watch: {
            '$route' (to, from) {
                this.initData();
                this.address = to.query.address;
                this.getInitTxInfo();
                this.getMaxBlockHeight();
            }
        },
        mounted() {
            this.getInitTxInfo();
            this.getMaxBlockHeight();
            let that = this;
            window.addEventListener('scroll',function(){
                if(document.documentElement.scrollTop + window.innerHeight >= document.body.scrollHeight - 200) {
                    if (that.lastCount == 10) {
                        that.lastCount = 0;
                        that.getNextTxInfo();
                    }
                }
            });
        },
    }
</script>
