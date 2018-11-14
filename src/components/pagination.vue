<style lang="less" scoped type="text/less">
    span{
        font-size: 14px;
        color: #2c3e50;
        font-weight: 500;
    }
    .pagination{
        display: inline-block;
        font-size: 14px;
        color: #2c3e50;
        font-weight: 500;
        >ul{
            display: inline-block;
            li{
                margin: 0;
                display: inline-block;
                min-width: 20px;
                padding: 0 5px;
                background: #f4f4f5;
                height: 30px;
                line-height: 30px;
                text-align: center;
                font-size: 14px;
                color: #2c3e50;
                font-weight: 500;
                cursor: pointer;
            }
            li.pageSizeActive{
                color: dodgerblue;
            }
        }
    }
    .page{
        display: inline-block;
        border: 1px solid #DDDDDD;
        border-radius: 4px;
        position: relative;
        box-sizing: border-box;
        button{
            padding: 2px 30px 2px 16px;
            cursor: pointer;
            background: transparent;
            border: none;
            outline: none;
            span{
                font-weight: 400;
                position: relative;
            }
            span:after{
                position: absolute;
                content: '';
                height: 6px;
                width: 6px;
                border-width: 0 2px 2px 0;
                border-color: #DDDDDD;
                border-style: solid;
                top: 50%;
                right: -20px;
                margin-top: -6px;
                transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
                transform-origin:50%;/*定义动画的旋转中心点*/
                -ms-transform-origin:50%;         /* IE 9 */
                -webkit-transform-origin:50%;  /* Safari 和 Chrome */
                -moz-transform-origin:50%;     /* Firefox */
                -o-transform-origin:50%;
                vertical-align: middle;
                transition: transform 0.4s;
            }
            span.active:after{
                -webkit-transform: translate(0,25%) rotate(225deg);
                transform: translate(0,25%) rotate(225deg);
            }
        }
        >ul{
            position: absolute;
            width: 120px;
            background: #FFFFFF;
            z-index: 20;
            border-radius: 3px;
            left: -10px;
            top: 30px;
            /*display: none;*/
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.2s;
            li{
                width: 100%;
                text-align: center;
                padding: 4px 0;
                cursor: pointer;
            }
            li:hover{
                background: #DDDDDD;
            }
        }
        >ul.showHideUl{
            display: block;
            max-height: 500px;
            overflow: auto;
            box-shadow: 2px 2px 6px 4px rgba(0,0,0,0.1);
        }
    }
    .pageSizeActive{
        color: dodgerblue;
    }
</style>

<template>
    <div class="pagination">
        <span>共{{total}}条</span>
        <div class="page">
            <button @click="isActive=!isActive" @blur="isActive=false">
                <span :class="{active: isActive}">{{size}}条/页</span>
            </button>
            <ul :class="{showHideUl: isActive}" v-model="size">
                <li
                    v-for="pageSize in pageSizes"
                    :class="{pageSizeActive: size==pageSize}"
                    @click="checked(pageSize)">
                    {{ pageSize }}条/页
                </li>
            </ul>
        </div>
        <ul v-model="pageNow">
            <li><</li>
            <li :class="{pageSizeActive: pageNow===1}" @click="pageNow=1">1</li>
            <li v-if="pageNow>4 && pageTotal>7">...</li>
            <li
                v-for="(item,index) in pagerCountShow"
                :class="{pageSizeActive: pageNow===(pageNow<=4?(item+1):(pageNow+3>pageTotal)?(pageTotal-5+index):(pageNow-2+index))}"
                @click="pageNow=(pageNow<=4?(item+1):(pageNow+3>pageTotal)?(pageTotal-5+index):(pageNow-2+index))">
                {{pageNow<=4?(item+1):(pageNow+3>pageTotal)?(pageTotal-5+index):(pageNow-2+index)}}
            </li>
            <li v-if="pageTotal>7 && pageNow+3<pageTotal">...</li>
            <li :class="{pageSizeActive: pageNow===pageTotal}" @click="pageNow=pageTotal">{{pageTotal}}</li>
            <li> > </li>
        </ul>
    </div>
</template>

<script>
	export default {
		props: ['total','pagerCount'],
		data() {
			return {
                isActive: false,
                size: 50,
                pageSizes: [10,50,100,200,400],
                pageNow: 1,
                pageTotal: 0,
                pagerCountShow: this.pagerCount
            }
		},
		components: {},
		computed: {},
		methods: {

		    /*根据pageSizes、total计算page数
		    * pageSizes：每页展示条目数
		    * total：总条目数
		    * page：总需要几页
		    * */

		    pageCount(){
                this.pageTotal = Math.ceil(this.total/this.size);
                if(this.pageTotal-2<=this.pagerCount){
                    this.pagerCountShow = this.pageTotal-2;
                }else{
                    this.pagerCountShow = this.pagerCount;
                }
            },

            checked(sizePage){
                this.size = sizePage;
                this.pageCount();
            }
        },
		mounted() {
            this.pageCount();
		}
	}
</script>
