<style lang="less" scoped type="text/less">

</style>

<template>
    <div id="addressInfo">
        <addressInfoHeader></addressInfoHeader>
        <tab></tab>
        <!--<pagination :total="1029" :pager-count="5"></pagination>-->
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
        <exchangesList></exchangesList>
    </div>
</template>

<script>
    import addressInfoHeader from '../components/addressInfoHeader.vue'
    import exchangesList from '../components/exchangesList.vue'
    import tab from '../components/tab.vue'
//    import pagination from '../components/pagination.vue'
	export default {
		props: [],
		data() {
			return {}
		},
		components: {
            addressInfoHeader,
            exchangesList,
            tab
//            pagination
        },
		computed: {},
		methods: {},
		mounted() {

		}
	}
</script>
