<style lang="less" scoped type="text/less">
    #index {
        padding-bottom: 150px;
    }
</style>

<template>
    <div id="index">
        <headerInfo></headerInfo>
        <blockInfo :blockInfoData="blockInfoData" :more="true" :isIndex="true"></blockInfo>
        <exchangeInfo :exchangeInfo ="exchangeInfo" :more="true" :isIndex="true"></exchangeInfo>
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
                blockHeight: '',
                stompClient: null
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
                    // console.log('blockInfos', res);
                    this.blockHeight = res.data.blockInfos[0].blockHeight;
                    this.blockInfoData = res.data.blockInfos;
                })
            },
            exchange(){
                get('/qtumRPC/transactionInfo',{
                    size: 20,
                    page: 0
                }).then(res=>{
                    // console.log('exchangeInfo', res);
                    this.exchangeInfo = res.data.content;
                })
            }
        },
        mounted() {
            this.getBlockInfos();
            this.exchange();
            let baseUrl = getBaseUrl();
            let socket = new SockJS(`${baseUrl}activity-websocket`);
            this.stompClient = Stomp.over(socket);
            this.stompClient.debug = null;
            let that = this;
            let i = 0;
            this.stompClient.connect({}, (frame) => {
                this.stompClient.subscribe('/qbaoChain/response', function (greeting) {
                    let greet = JSON.parse(greeting.body);
                    that.blockInfoData.pop();
                    that.blockInfoData.unshift(greet.blocks);
                    that.exchangeInfo.pop();
                    that.exchangeInfo.unshift(greet.txs[0]);
                    console.log(i++);
                    that.blockHeight = greet.blockHeight
                });
            });
        },
        beforeDestroy() {
            console.log("stomp disconnect");
            this.stompClient.disconnect();
        }
    }
</script>
