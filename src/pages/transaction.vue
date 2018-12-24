<style lang="less" scoped type="text/less">
    #txInfoHeader {
        width: 1200px;
        margin: 0 auto;
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
