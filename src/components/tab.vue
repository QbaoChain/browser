<style lang="less" scoped type="text/less">
    #tab{
        margin: 26px auto;
        width: 240px;
        height: 24px;
        background: #ffffff;
        border-radius: 40px;
        box-shadow: 1px 1px 4px 2px rgba(0,0,0,0.1);
        overflow: hidden;
        a{
            display: inline-block;
            width: 49%;
            height: 40px;
            text-align: center;
            cursor: pointer;
            color: #26CC97;
            font-size: 14px;
            text-decoration: none;
            padding:3px 0;
        }
        .active{
            background: #26CC97;
            color: #ffffff;
        }
    }
</style>

<template>
    <div id="tab">
        <a :class="[tabs?'':'active']" @click="tabChange">交易列表</a>
        <a :class="[!tabs?'':'active']" @click="tabChange">余额变动</a>
    </div>
</template>

<script>
	export default {
		props: [],
		data() {
			return {
			    tabs: false
            }
		},
		components: {},
		computed: {},
		methods: {
            tabChange(){
                this.tabs = !this.tabs;
            }
        },
		mounted() {

		}
	}
</script>
