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
            position: relative;
            input{
                width: 480px;
                height: 30px;
                font-size: 16px;
                padding: 0 0 0 20px;
                color: #666666;
                border: none;
                border: 1px solid #DDDDDD;
                border-radius: 5px;
            }
        }
        .notFound {
            position: absolute;
            width: 480px;
            height: 40px;
            top: 40px;
            font-weight: 500;
            border: 1px solid #DDDDDD;
            padding-left: 20px;
        }
    }
</style>
<template>
    <div id="headerInfo">
        <div class="content">
            <div>
                <a href="/"><img src="../assets/images/logo.png" alt=""></a>
            </div>
            <div class="input">
                <input type="text" placeholder="搜索 区块/交易/地址" v-model="str" @keyup.enter="search()">
                <div class="notFound" v-show="showNotFound">找不到相应的记录</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { get } from '../ajax/index'
    export default {
        props: [],
        name: 'headerInfo',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                str: null,
                showNotFound: false
            }
        },
        watch: {
            '$route' (to, from) {
                this.str = null;
            }
        },
        methods: {
            search() {
                let str = this.str.trim();
                get("/qtumRPC/queryByParam", {param: str})
                    .then(res => {
                        let type = res.data.type;
                        this.showNotFound = false;
                        switch (type) {
                            case 'block':
                                this.$router.push({
                                    path: '/blockDetail',
                                    query: {
                                        block: str
                                    }
                                });
                                break;
                            case 'transaction':
                                this.$router.push({
                                    path: '/txInfo',
                                    query: {
                                        txHash: str
                                    }
                                });
                                break;
                            case 'address':
                                this.$router.push({
                                    path: '/addressInfo',
                                    query: {
                                        address: str
                                    }
                                });
                                break;
                            default:
                                this.showNotFound = true;
                                setTimeout(() => {
                                    this.showNotFound = false;
                                }, 2000)
                        }
                    })
            }
        }
    }
</script>
