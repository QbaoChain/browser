<style scoped type="text/less" lang="less">
    #headerInfo{
        width: 100%;
        background: #332E9C;
        ul{
            padding: 60px 0 51px 0;
            li{
                display: inline-block;
                width: 30%;
            }
            .key{
                opacity: 0.5;
                font-size: 16px;
                color: #FFFFFF;
                text-align: center;
                padding-bottom: 10px;
            }
            .value{
                font-size: 20px;
                color: #FFFFFF;
                text-align: center;
                padding-top: 10px;
            }
        }
    }
</style>
<template>
    <div id="headerInfo">
        <ul>
            <li>
                <div class="key">区块高度: </div>
                <div class="value">230,602</div>
            </li>
            <li>
                <div class="key">
                    网络权重
                </div>
                <div class="value">
                    12,079,138.95895302
                </div>
            </li>
            <li>
                <div class="key">费率</div>
                <div class="value">0.00510672 kB/QTUM</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'headerInfo',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
