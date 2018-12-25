<style lang="less" scoped type="text/less">

</style>

<template>
    <div>
        <headerInfo></headerInfo>
        <exchange
            :searchConfig="searchConfig"
            :exchangeInfo ="exchangeInfo"
            :loading="loading"
            :paginationConfig="paginationConfig">
        </exchange>
    </div>
</template>

<script>
    import exchange from '../components/exchangeInfo.vue';
    import headerInfo from '../components/headerInfo.vue';
    import { get } from '../ajax/index'
	export default {
		props: [],
		data() {
			return {
                paginationConfig: {
                    page: 1
                },
                searchConfig: {},
                loading: true,
                exchangeInfo: []
            }
		},
		components: {
            exchange,
            headerInfo
        },
        watch: {
            '$route': 'fetchDate'
        },
		computed: {},
		methods: {
            getExchangeInfo(){
                this.loading = true;
                get('/qtumRPC/transactionInfo',{
                    page: this.paginationConfig.page - 1,
                    size: 100
                }).then(res=>{
                    this.loading = false;
                    console.log(565656,res);
                    this.exchangeInfo = res.data.content
                })
            },
            fetchDate() {
                let page = !this.$route.query.page ? 0 : Number(this.$route.query.page);
                this.paginationConfig.page = Math.max(1, page);
                this.getExchangeInfo();
            },
            changes() {
                this.$router.push({
                    path: '/exchange',
                    query: {
                        page: this.$route.query.page || 1
                    }
                })
            },
        },
		mounted() {
            this.getExchangeInfo();
		}
	}
</script>
