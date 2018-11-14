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
    import exchangeInfo from '../components/exchangeInfo.vue'
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

        },
        mounted() {
            let socket = new SockJS('http://172.16.5.203:8081/activity-websocket');
            let stompClient = Stomp.over(socket);
            let that = this;
            stompClient.connect({}, function (frame) {
                stompClient.subscribe('/qbaoChain/response', function (greeting) {
                    let greet = JSON.parse(greeting.body);
                    console.log(3333,greet);
                    that.blockInfoData = greet.blocks;
                    that.exchangeInfo = greet.txs;
                });
            });
        }
    }
</script>
