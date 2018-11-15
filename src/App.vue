<style lang="less" type="text/less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        >div{
            margin: 0 auto;
        }
        footer{
            min-width: 1200px;
            text-align: center;
            .linkicon{
                padding:0;margin:0;
                a {
                    display: inline-block;
                    width: 36px;
                    height: 36px;
                    line-height: 36px;
                    margin-right: 6px;
                    margin-left: 6px;
                    vertical-align: middle;
                    color: #f6f7f9;
                    background: rgba(255,255,255,0.10);
                    font-size: 16px;
                    border-radius: 50%;
                    &:hover{
                        color: gray;
                        cursor: pointer;
                    }
                    &.fa-twitter{
                        font-size: 22px;
                    }
                    &.icon-kakao{
                        font-size: 23px;
                    }
                    &.fa-slack{
                        font-size: 19px;
                    }
                    &.fa-facebook-square{
                        font-size: 20px;
                    }
                    &.fa-slack{
                        font-size: 20px;
                    }
                    &.fa-reddit{
                        font-size: 19px;
                    }
                    &.fa-weibo{
                        font-size: 21px;
                        /*margin-right:20px;*/
                    }
                    &.blogicon{
                        display: inline-block;
                        i{
                            display: inline-block;
                            width:20px;height:22px;
                            background: url("./assets/images/blog.png") no-repeat;
                            -webkit-background-size: contain;
                            background-size: contain;
                            vertical-align: middle;
                            margin-top:4px;
                        }
                    }
                }
            }
        }
        footer div:nth-of-type(1){
            height: 90px;
            background: #272A30;
            line-height: 90px;
        }
        footer div:nth-of-type(2){
            height: 60px;
            background: #000000;
            line-height: 60px;
            font-size: 14px;
            color: #9999A9;
            letter-spacing: -0.28px;
        }
    }
</style>

<template>
    <div id="app">
        <div>
            <router-view/>
        </div>
        <footer>
            <div class="linkicon">
                <a v-for="(i,index) in linkbar" :key="index" :class="['fa',i.className]" @click="iconDetail(i)"></a>
                <a class="blogicon" href="https://blog.naver.com/qbaonetwork"><i></i></a>
            </div>
            <div>
                Copyright © 2018 Qbao Network All rights reserved.
            </div>
        </footer>
    </div>
</template>

<script>
    import {get,post} from './ajax/index.js'
    export default {
        name: 'App',
        data(){
            return {
                linkbar: [
                    {
                        className: 'fa-twitter',
                        herf: 'https://twitter.com/Qbao2339'
                    },
                    {
                        className: 'fa-facebook-square',
                        herf: 'https://www.facebook.com/Qbao-120845068623551/'
                    },
                    {
                        className: 'fa-medium',
                        herf: 'https://medium.com/@Qbao2339'
                    },
                    {
                        className: 'icon-kakao',
                        herf: 'https://open.kakao.com/o/gRC5BDL'
                    },
                    {
                        className: 'fa-slack',
                        herf: 'https://qbao.slack.com'
                    },
                    {
                        className: 'fa-envelope',
                        herf: 'mailto:support@qbao.fund'
                    },
                    {
                        className: 'fa-reddit',
                        herf: 'https://www.reddit.com/r/Qbao/'
                    },
                    {
                        className: 'fa-camera',
                        herf: 'https://www.instagram.com/qbaonetwork/'
                    },
                    {
                        className: 'fa-wechat',
                        herf: ''
                    },
                    {
                        className: 'fa-qq',
                        herf: ''
                    },
                    {
                        className: 'fa-weibo',
                        herf: 'https://weibo.com/6416945905/profile?topnav=1&wvr=6'
                    }
                ]
            }
        },
        methods: {
            iconDetail(i) {
                if (i.herf) {
                    window.open(i.herf);
                } else {
                    if (i.className === 'fa-wechat') {
                        this.weiChat.show = true;
                        this.mark = true;
                    } else {
                        this.qq.show = true;
                        this.mark = true;
                    }
                }
            },
            sss(){
//                get('qtumRPC/transactionInfo',{txHash: 'b02060c07b537f1f7f3e0e8337baf9954e6a2a6656fd784e4844819799fcaf1c'}).then((res)=>{
//                    console.log('success',res);
//                })
            }
        },
        mounted(){
            this.sss();
        }
    }
</script>
