<style lang="less" scoped type="text/less">
    #index {
        padding-bottom: 150px;
    }
</style>

<template>
    <div id="index">
        <headerInfo :blockHeight="blockHeight"></headerInfo>
        <blockInfo :blockInfoData="blockInfoData" :more="true"></blockInfo>
        <exchangeInfo :exchangeInfo ="exchangeInfo" :more="true"></exchangeInfo>
    </div>
</template>

<script>
    import headerInfo from '../components/headerInfo.vue';
    import blockInfo from '../components/blockInfo.vue';
    import exchangeInfo from '../components/exchangeInfo.vue';
    import { get, getBaseUrl } from '../ajax/index';
    export default {
        props: [],
        data() {
            return {
                blockInfoData: [],
                exchangeInfo: [],
                blockHeight: ''
            }
        },
        components: {
            headerInfo,
            blockInfo,
            exchangeInfo
        },
        computed: {},
        methods: {
            getBlockInfos(){
                get('/qtumRPC/blockInfos', {
                    size: 10,
                    page: 0
                }).then(res => {
                    console.log('blockInfos', res);
                    this.blockHeight = res.data.blockInfos[0].blockHeight;
                    this.blockInfoData = res.data.blockInfos;
                })
            },
            exchange(){
                get('/qtumRPC/transactionInfo',{
                    size: 20,
                    page: 0
                }).then(res=>{
                    console.log('exchangeInfo', res);
                    this.exchangeInfo = res.data.content;
                })
            }
        },
        mounted() {
            this.getBlockInfos();
            this.exchange();
            let baseUrl = getBaseUrl();
            let socket = new SockJS(`${baseUrl}activity-websocket`);
            let stompClient = Stomp.over(socket);
            let that = this;
            stompClient.connect({}, function (frame) {
                stompClient.subscribe('/qbaoChain/response', function (greeting) {
                    let greet = JSON.parse(greeting.body);
                    that.blockInfoData.pop();
                    that.blockInfoData.unshift(greet.blocks);
                    that.exchangeInfo.pop();
                    that.exchangeInfo.unshift(greet.txs[0]);
                    console.log(4343,greet);
                    that.blockHeight = greet.blockHeight
                });
            });
        }
    }
</script>
