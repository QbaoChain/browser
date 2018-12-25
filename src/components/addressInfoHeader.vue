<style lang="less" scoped type="text/less">
    #addressInfoHeader {
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
    <div id="addressInfoHeader">
        <h2>
            账户信息
        </h2>
        <ul>
            <li>
                <label>账户地址：</label><span class="address">{{addressInfo.address}}</span>
                <copy-clipboard :value="addressInfo.address"></copy-clipboard>
            </li>
            <li>
                <label>账户余额：</label><span>{{addressInfo.QBE}}</span>
            </li>
            <li>
                <label>交易数：</label><span>{{addressInfo.totalNumber}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import { get } from '../ajax/index'
    import copyClipboard from '../components/copyClipboard.vue'
    export default {
        props: ['address'],
        data() {
            return {
                addressInfo: {
                    address: null,
                    QBE: null,
                    totalNumber: null
                }
            }
        },
        components: {
            copyClipboard
        },
        computed: {},
        methods: {},
        mounted() {
            this.addressInfo.address = this.address;
            let param = {
                address: this.addressInfo.address,
            };
            get('/qtumRPC/addressInfo',param).then((res) => {
                console.log(res.data);
                this.addressInfo.QBE = res.data.QBE;
                this.addressInfo.totalNumber = res.data.totalNumber;
                console.log(444,this.txInfos);
            })
        }
    }
</script>
