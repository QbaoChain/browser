<style lang="less" scoped type="text/less">
    #addressInfoHeader {
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
                <label>账户地址：</label><span class="address">Qb44pWMbzzQcJmxkgd7dx6tjpi3Bra83Z6</span>
            </li>
            <li>
                <label>账户余额：</label><span>373.49475655 QTUM (118.01746375 QTUM 被锁定)</span>
            </li>
            <li>
                <label>排名：</label><span>7028</span>
            </li>
            <li>
                <label>收入总计：</label><span>512.77876312 QTUM</span>
            </li>
            <li>
                <label>支出总计：</label><span>139.28400657 QTUM</span>
            </li>
            <li>
                <label>挖矿数量：</label><span>2</span>
            </li>
            <li>
                <label>交易数：</label><span>20</span>
            </li>
            <li>
                <label>区块高度：</label><span>230670</span>
            </li>
            <li>
                <label>区块哈希值：</label><span>5f228a166f340f76d05185315f19d46cc84556dae6312ad3b936997a20c16bf9</span>
            </li>
            <li>
                <label>区块大小：</label><span>1,513 字节</span>
            </li>
            <li>
                <label>区块权重：</label><span>5,944 字节</span>
            </li>
            <li>
                <label>时间戳：</label><span>5 分钟前 (2018-09-20 13:57:04)</span>
            </li>
            <li>
                <label>区块奖励：</label><span>4.01094 QTUM</span>
            </li>

            <li>
                <label>难度值：</label><span>3602527.0250097476</span>
            </li>
            <li>
                <label>Merkle 树：</label><span>9cb7ea4eab23d6156e6c61dc324a9e83ce3c81ec004dbc0fe55f2a0f01f94505</span>
            </li>
            <li>
                <label>挖矿地址：</label><span>Qdc3zFTE4o5DiyWADAAZZCT26htGtdct21</span>
            </li>
            <li>
                <label>交易数：</label><span>4</span>
            </li>
            <li>
                <label>上一区块：</label><span>fbf6b0dfbe5c1253ffca8ec23d1d4b787712c1e0555b09f375f14db0e6ce2b85</span>
            </li>
            <li>
                <label>下一区块：</label><span>474036086c9b117af04e45f864ba02fc8427579ae2288b224afbede06fccc77b</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import { get } from '../ajax/index'
    export default {
        props: [],
        data() {
            return {}
        },
        components: {},
        computed: {},
        methods: {},
        mounted() {
            let param = {
                address: 'QPYtQeus6iQDHoncktXUHJp79JdE4ncnLb'
            };
//            get('qtumRPC/addressInfo/10/0', param).then(res => {
//                console.log(555, res);
//                //区块信息
//            });
//            get('qtumRPC/transactionInfo', {txHash: 'b02060c07b537f1f7f3e0e8337baf9954e6a2a6656fd784e4844819799fcaf1c'}).then((res) => {
//                console.log(666, res);
//            });
//            get('qtumRPC/blockInfo', {blockHashOrBlockCount: 'f914a266e1220a5a2fbd65212fed258807e6ad02aead25903507688db8202e1c'}).then(res => {
//                console.log(777, res);
//            });
//            get('/qtumRPC/tokenBalance', {address: 'QPYtQeus6iQDHoncktXUHJp79JdE4ncnLb'}).then((res) => {
//                console.log(888,res);
//            });
//            get('/qtumRPC/queryByParam',{param: ''})
        }
    }
</script>
