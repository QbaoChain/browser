<style lang="less" scoped type="text/less">

</style>

<template>
    <div id="addressInfo">
        <addressInfoHeader></addressInfoHeader>
        <tab></tab>
        <exchangesList></exchangesList>
    </div>
</template>

<script>
    import addressInfoHeader from '../components/addressInfoHeader.vue'
    import exchangesList from '../components/exchangesList.vue'
    import tab from '../components/tab.vue'
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
