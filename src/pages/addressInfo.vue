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
			    txInfos: [],
                address: null
            }
		},
		components: {
            addressInfoHeader,
            exchangesList,
            tab,
            headerInfo
        },
		computed: {},
		methods: {
		    initData() {
		        this.address = null;
		        Object.assign(this.addressInfo, {
                    address: '',
                    QBE: '',
                    totalNumber: ''
                });
		        this.txInfos = [];
            }
        },
		mounted() {
		},
        watch: {
            '$route' (to, from) {
                this.initData();
                this.address = to.query.address;
                this.addressInfo.address = this.address;
            }
        },
        created() {
            this.address = this.$route.query.address;
        }
    }
</script>
