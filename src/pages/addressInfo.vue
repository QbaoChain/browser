<style lang="less" scoped type="text/less">
    #addressInfo {
        padding-bottom: 150px;
    }
</style>

<template>
    <div id="addressInfo">
        <headerInfo></headerInfo>
        <addressInfoHeader :address="address"></addressInfoHeader>
        <tab></tab>
        <exchangesList :address="address"></exchangesList>
    </div>
</template>

<script>
    import addressInfoHeader from '../components/addressInfoHeader.vue'
    import exchangesList from '../components/exchangesList.vue'
    import tab from '../components/tab.vue'
    import headerInfo from '../components/headerInfo.vue'
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
            tab,
            headerInfo
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
