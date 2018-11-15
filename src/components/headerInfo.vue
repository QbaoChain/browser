<style scoped type="text/less" lang="less">
    #headerInfo {
        margin-bottom: 20px;
        padding: 15px 0;
        background: #FFFFFF;
        height: 50px;
        .content {
            width: 1200px;
            margin: 0 auto;
            > div:nth-of-type(1) {
                float: left;
                img {
                    display: inline-block;
                    height: 50px;
                    vertical-align: middle;
                }
                a:nth-of-type(2){
                    margin-left: 30px;
                }
                a {
                    cursor: pointer;
                    display: inline-block;
                    vertical-align: middle;
                    transform: translateY(2px);
                    color: #999999;
                    font-weight: 500;
                    span {
                        color: indianred;
                        font-size: 18px;
                        font-weight: 500;
                    }
                }
            }
        }
        .input {
            padding: 0;
            margin: 0;
            height: 50px;
            display: inline-block;
            float: right;
            vertical-align: middle;
            line-height: 50px;
            input{
                width: 440px;
                height: 30px;
                font-size: 16px;
                padding: 0 0 0 20px;
                color: #666666;
                border: none;
                border: 1px solid #DDDDDD;
                border-radius: 5px;
            }
        }
    }
</style>
<template>
    <div id="headerInfo">
        <div class="content">
            <div>
                <a><img src="../assets/images/logo.png" alt=""></a>
                <a>区块高度：<span>{{blockHeight}}</span></a>
            </div>
            <div class="input">
                <input type="text" placeholder="搜索 区块/交易/地址/合约/Token">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blockHeight'],
        name: 'headerInfo',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
