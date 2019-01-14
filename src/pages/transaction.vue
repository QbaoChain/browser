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
                        width: 92%;
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
                .data-choose {
                    width: 60px;
                    padding-right: 10px;
                }
                .asmTitle {
                    font-size: 10px;
                    font-weight: bold;
                }
                .asm {
                    font-size: 10px;
                    word-break: break-all;
                    white-space: pre-wrap;
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
    .data-choose /deep/ .el-input__inner {
        padding: 0 5px;
    }
</style>

<template>
    <div id="txInfoHeader">
        <headerInfo></headerInfo>
        <h2>
            交易信息
        </h2>
        <ul>
            <li>
                <label>交易hash：</label><span class="address">{{txInfo.txId}}</span>
                <copy-clipboard :value="txInfo.txId"></copy-clipboard>
            </li>
            <li>
                <label>区块hash：</label><span class="address" @click="clickBlock($router, txInfo.blockHash)">{{txInfo.blockHash}}</span>
                <copy-clipboard :value="txInfo.blockHash"></copy-clipboard>
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
                <label>确认数：</label><span>{{maxBlockHeight - txInfo.blockHeight + 1}}</span>
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
                            <span class="address" @click="clickAddress($router, txVin.address)">{{txVin.address}}</span>
                            {{txVin.value}} {{txInfo.txVout[0].symbol}}
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <div class="red">输出：</div>
                    <ul>
                        <li v-for="txVout in txInfo.txVout">
                            <div>
                                <span class="address"
                                      @click="clickAddress($router, txVout.address)">{{txVout.address}}</span>
                                {{txVout.value}} {{txVout.symbol}}
                                <div><span class="asmTitle">类型：</span><span class="asm">{{txVout.Type}}</span></div>
                                <div>
                                    <span class="asmTitle">数据：</span>
                                    <el-select class="data-choose" v-model="txVout.dataType" size="small" @change="selectDataType(txVout.dataType, txVout)">
                                        <el-option
                                            v-for="item in dataType"
                                            :key="item.value"
                                            :label="item.name"
                                            :value="item.value"
                                        ></el-option>
                                    </el-select>
                                    <span class="asm">
                                        <span v-show="txVout.dataType !== 'picture'">{{txVout.selectData}}</span>
                                    <img :src="txVout.image" v-show="txVout.dataType === 'picture'" style="vertical-align: top">
                                </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { get } from '../ajax/index';
    import headerInfo from '../components/headerInfo.vue';
    import copyClipboard from '../components/copyClipboard.vue';
    import {asmDataType, imgBase64Prefix, contractMethods} from '../constant/common';
    import CryptoJS from 'crypto-js';
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
                },
                maxBlockHeight: null,
                dataType: [
                    {
                        name: asmDataType.origin.name,
                        value: asmDataType.origin.value
                    },
                    {
                        name: asmDataType.plain.name,
                        value: asmDataType.plain.value
                    },
                    {
                        name: asmDataType.method.name,
                        value: asmDataType.method.value
                    },
                    {
                        name: asmDataType.picture.name,
                        value: asmDataType.picture.value
                    }
                ]
            }
        },
        components: {headerInfo, copyClipboard},
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
                        this.txInfo.txVout.forEach(vout => {
                            vout.dataType = asmDataType.origin.value;
                            vout.selectData = vout.asm;
                            vout.image = '';
                        })
                    }
                })
            },
            getMaxBlockHeight() {
                get('/qtumRPC/maxBlockHeight').then(res => {
                    if (res.data) {
                        this.maxBlockHeight = res.data.maxHeight;
                    }
                })
            },
            initData() {
                this.txInfo = {
                    txId: null,
                        time: null,
                        blockHash: null,
                        blockHeight: null,
                        size: null,
                        txFee: null,
                        txVin: null,
                        txVout: null
                };
                this.maxBlockHeight = null;
            },
            selectDataType(dataType, vout) {
                switch (dataType) {
                    case asmDataType.origin.value:
                        vout.selectData = vout.asm;
                        break;
                    case asmDataType.plain.value:
                        try {
                            vout.selectData = CryptoJS.enc.Hex.parse(vout.asm.split(" ")[3]).toString(CryptoJS.enc.Utf8);
                        } catch (e) {
                            vout.selectData = '';
                        }
                        break;
                    case asmDataType.method.value:
                        let selectData = vout.asm.split(" ")[3];
                        let keccakFuns = Object.keys(contractMethods);
                        let fun = keccakFuns.find(method => {
                            return selectData.indexOf(method) == 0;
                        });
                        if (!fun) {
                            vout.selectData = selectData;
                            break;
                        }
                        selectData = selectData.substring(8);
                        let params = [];
                        let i = 0;
                        while(true) {
                            let offset = 64;
                            let begin = i * offset, end = (i + 1) * 64 - 1;
                            if (selectData.length < end) {
                                break;
                            }
                            params.push(selectData.substring(begin, end));
                            i++;
                        }
                        vout.selectData = contractMethods[fun] + "\r\n" + params.join("\r\n");
                        break;
                    case asmDataType.picture.value:
                        let data = CryptoJS.enc.Hex.parse(vout.asm.split(" ")[3]);
                        let base64 = CryptoJS.enc.Base64.stringify(data).toString();
                        vout.image = imgBase64Prefix + base64;
                        break;

                }
                this.$forceUpdate();
            }
        },
        watch: {
            '$route' (to, from) {
                let txId = to.query.txHash;
                this.getTxInfo(txId);
                this.getMaxBlockHeight();
            }
        },
        mounted() {
            let txId = this.$route.query.txHash;
            this.getTxInfo(txId);
            this.getMaxBlockHeight();
        }
    }
</script>
