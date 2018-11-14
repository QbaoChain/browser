<style lang="less" scoped type="text/less">
    #exchangeInfo {
        background: #ffffff;
        margin-top: 20px;
        margin-bottom: 60px;
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
        table {
            width: 100%;
            font-size: 12px;
            text-align: center;
            thead {
                border: none;
                tr {
                    height: 45px;
                    border: none;
                    td {
                        border: none;
                        background: #E6E9EE;
                        padding: 0;
                        margin: 0;
                    }
                }
            }
            tbody {
                tr {
                    height: 35px;
                    border-bottom: 1px solid #DDDDDD;
                    td {
                        border-bottom: 1px solid #DDDDDD;
                    }
                }
            }
        }
    }
</style>

<template>
    <div id="exchangeInfo">
        <h2>
            交易
            <a href="">更多</a>
        </h2>
        <table cellspacing="0" cellpadding="0">
            <thead>
            <tr>
                <td>账户</td>
                <td>交易金额</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in exchangeInfo">
                <td class="address">{{item.txId}}</td>
                <td>{{item.txFee}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: ['exchangeInfo'],
        data() {
            return {

            }
        },
        components: {},
        computed: {},
        methods: {},
        mounted() {

        }
    }
</script>
