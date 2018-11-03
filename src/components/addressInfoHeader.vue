<style lang="less" scoped type="text/less">
    #addressInfoHeader{
        h2{
            background: #E6E9EE;
            width: 100%;
            height: 45px;
            line-height: 45px;
            font-size: 12px;
            color: #666666;
            text-align: center;
        }
        ul{
            background: #FFFFFF;
            padding: 16px 0 20px 0;
            li{
                font-size: 14px;
                line-height: 26px;
                margin-left: 50px;
                label{
                    color: #333;
                    display: inline-block;
                    min-width: 80px;
                    text-align: right;
                }
                span{
                    color: #2A2A2A;
                }
                .address{
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
        </ul>
    </div>
</template>

<script>
	export default {
		props: [],
		data() {
			return {}
		},
		components: {},
		computed: {},
		methods: {},
		mounted() {

		}
	}
</script>
