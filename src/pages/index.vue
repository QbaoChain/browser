<style lang="less" scoped type="text/less">

</style>

<template>
    <div id="index">
        <headerInfo></headerInfo>
        <blockInfo :blockInfoData="blockInfoData"></blockInfo>
        <exchangeInfo></exchangeInfo>
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
                blockInfoData: []
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
                    that.blockInfoData = JSON.parse(greet.blocks);
                });
            });
        }
    }
</script>
