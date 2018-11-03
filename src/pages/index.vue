<style lang="less" scoped type="text/less">

</style>

<template>
    <div id="index">
        <headerInfo></headerInfo>
        <blockInfo></blockInfo>
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

            }
        },
        components: {
            headerInfo,
            blockInfo,
            exchangeInfo
        },
        computed: {},
        methods: {},
        mounted() {

        }
    }
</script>
