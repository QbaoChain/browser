<style lang="less" scoped type="text/less">

</style>

<template>
    <div id="addressInfo">
        <addressInfoHeader :addressInfo="addressInfo"></addressInfoHeader>
        <tab></tab>
        <exchangesList :txInfos="txInfos"></exchangesList>
    </div>
</template>

<script>
    import addressInfoHeader from '../components/addressInfoHeader.vue'
    import exchangesList from '../components/exchangesList.vue'
    import tab from '../components/tab.vue'
    import { get } from '../ajax/index'
	export default {
		props: [],
		data() {
			return {
			    addressInfo: {
			        address: '',
                    QBE: '',
                    totalNumber: ''
                },
			    txInfos: []
            }
		},
		components: {
            addressInfoHeader,
            exchangesList,
            tab
//            pagination
        },
		computed: {},
		methods: {
        },
		mounted() {

		}
	}
</script>
