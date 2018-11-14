<style lang="less" scoped type="text/less">
    #blockInfo{
        background: #ffffff;
        margin-top: 20px;
        h2{
            width: 100%;
            font-size: 16px;
            color: #333333;
            text-align: center;
            height: 56px;
            line-height: 56px;
            a{
                font-size: 12px;
                color: #333333;
                text-align: center;
                float: right;
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
</style>

<template>
    <div id="blockInfo">
        <h2>
            区块
            <a href="">更多</a>
        </h2>
        <table cellspacing="0" cellpadding="0">
            <thead>
                <tr>
                    <td>高度</td>
                    <td>时间</td>
                    <td>用时</td>
                    <td>区块奖励</td>
                    <td>交易数(条)</td>
                    <td>地址</td>
                </tr>
            </thead>
            <tbody>
            <tr v-for="item in blockInfoData">
                <td>{{item.blockAward}}</td>
                <td>{{item.time}}</td>
                <td>{{item.times}}</td>
                <td>{{item.blockReward}}</td>
                <td>{{item.exchangeCount}}</td>
                <td class="address">{{item.address}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
	export default {
		props: ['blockInfoData'],
		data() {
			return {
                tableList: [
                    {
                        height: 230604,
                        time: '2 分钟前',
                        times: '64s',
                        blockReward: '4.003 QTUM',
                        exchangeCount: '3',
                        address: 'QYHV93kbN9osowPHTWHjeYzgrmZasdato'
                    },
                    {
                        height: 230604,
                        time: '2 分钟前',
                        times: '64s',
                        blockReward: '4.003 QTUM',
                        exchangeCount: '3',
                        address: 'QYHV93kbN9osowPHTWHjeYzgrmZasdato'
                    },
                    {
                        height: 230604,
                        time: '2 分钟前',
                        times: '64s',
                        blockReward: '4.003 QTUM',
                        exchangeCount: '3',
                        address: 'QYHV93kbN9osowPHTWHjeYzgrmZasdato'
                    },
                    {
                        height: 230604,
                        time: '2 分钟前',
                        times: '64s',
                        blockReward: '4.003 QTUM',
                        exchangeCount: '3',
                        address: 'QYHV93kbN9osowPHTWHjeYzgrmZasdato'
                    },
                    {
                        height: 230604,
                        time: '2 分钟前',
                        times: '64s',
                        blockReward: '4.003 QTUM',
                        exchangeCount: '3',
                        address: 'QYHV93kbN9osowPHTWHjeYzgrmZasdato'
                    },
                    {
                        height: 230604,
                        time: '2 分钟前',
                        times: '64s',
                        blockReward: '4.003 QTUM',
                        exchangeCount: '3',
                        address: 'QYHV93kbN9osowPHTWHjeYzgrmZasdato'
                    },
                    {
                        height: 230604,
                        time: '2 分钟前',
                        times: '64s',
                        blockReward: '4.003 QTUM',
                        exchangeCount: '3',
                        address: 'QYHV93kbN9osowPHTWHjeYzgrmZasdato'
                    },
                    {
                        height: 230604,
                        time: '2 分钟前',
                        times: '64s',
                        blockReward: '4.003 QTUM',
                        exchangeCount: '3',
                        address: 'QYHV93kbN9osowPHTWHjeYzgrmZasdato'
                    }
                ]
            }
		},
		components: {

        },
		computed: {

        },
		methods: {},
		mounted() {

		}
	}
</script>
