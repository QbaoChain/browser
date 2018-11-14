<style lang="less" scoped type="text/less">

</style>

<template>
    <div id="index">
        <headerInfo></headerInfo>
        <blockInfo :blockInfoData="blockInfoData"></blockInfo>
        <exchangeInfo :exchangeInfo ="exchangeInfo"></exchangeInfo>
    </div>
</template>

<script>
    import headerInfo from '../components/headerInfo.vue';
    import blockInfo from '../components/blockInfo.vue';
    import exchangeInfo from '../components/exchangeInfo.vue';
    import { get } from '../ajax/index';
    export default {
        props: [],
        data() {
            return {
                blockInfoData: [],
                exchangeInfo: []
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
            let socket = new SockJS('http://172.16.5.203:8081/activity-websocket');
            let stompClient = Stomp.over(socket);
            let that = this;
            stompClient.connect({}, function (frame) {
                stompClient.subscribe('/qbaoChain/response', function (greeting) {
                    let greet = JSON.parse(greeting.body);
                    that.blockInfoData.pop();
                    that.blockInfoData.unshift(greet.blocks);
                    that.exchangeInfo.pop();
                    that.exchangeInfo.unshift(greet.txs[0]);
                });
            });
        }
    }
</script>
