<style lang="less" scoped type="text/less">

</style>

<template>
    <div id="addressInfo">
        <addressInfoHeader :address="address"></addressInfoHeader>
        <tab></tab>
        <exchangesList :address="address"></exchangesList>
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
		},
        created() {
            this.address = this.$route.query.address;
        }
    }
</script>
