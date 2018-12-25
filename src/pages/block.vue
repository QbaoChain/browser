<style lang="less" scoped type="text/less">

</style>

<template>
    <div>
        <headerInfo></headerInfo>
        <blockInfo
            :blockInfoData="blockInfoData"
            :more="false"
            :paginationConfig="paginationConfig"
            :loading="loading"
            :searchConfig="searchConfig">
        </blockInfo>
    </div>
</template>

<script>
    import blockInfo from '../components/blockInfo.vue'
    import headerInfo from '../components/headerInfo.vue'
    import { get } from '../ajax/index'
	export default {
		props: [],
		data() {
			return {
                blockInfoData: [],
                paginationConfig: {
                    page: 1
                },
                searchConfig: {},
                loading: true
            }
		},
		components: {
            blockInfo,
            headerInfo
        },
		computed: {},
        watch: {
            '$route': 'fetchDate'
        },
		methods: {
		    getBlockInfoData(){
		        this.loading = true;
                get('/qtumRPC/blockInfos',{
                    page: this.paginationConfig.page - 1,
                    size: 100
                }).then(res=>{
                    this.loading = false;
                    this.blockInfoData = res.data.blockInfos
                })
            },
            fetchDate() {
                let page = !this.$route.query.page ? 0 : Number(this.$route.query.page);
                this.paginationConfig.page = Math.max(1, page);
                this.getBlockInfoData()
            },
            changes() {
                this.$router.push({
                    path: '/block',
                    query: {
                        page: this.$route.query.page || 1
                    }
                })
            },
        },
		mounted() {
            this.getBlockInfoData();
		}
	}
</script>
