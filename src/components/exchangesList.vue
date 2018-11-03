<style lang="less" scoped type="text/less">
    #blockInfo {
        background: #ffffff;
        margin: 20px 0 128px 0;
        h2 {
            width: 100%;
            font-size: 16px;
            color: #333333;
            text-align: center;
            height: 56px;
            line-height: 56px;
            a {
                font-size: 12px;
                color: #333333;
                text-align: center;
                float: right;
                margin-right: 52px;
            }
        }
        >div {
            padding: 20px 0;
            border-bottom: 1px solid #f6f7f9;
            ul {
                li {
                    list-style-type: none;
                    display: inline-block;
                    font-size: 16px;
                    line-height: 36px;
                }
                .tLeft {
                    text-align: left;
                    margin-left: 41px;
                    > div {

                    }
                }
                .tRight {
                    width: 46.5%;
                    text-align: right;
                    font-size: 12px;
                    color: #666666;
                    margin-right: 40px;
                }
            }
            div {
                ul {
                    li {
                        width: 100%;
                        display: block;
                        font-size: 12px;
                        line-height: 26px;
                    }
                }
                .left {
                    width: 47%;
                    float: left;
                    margin-left: 42px;
                }
                .right {
                    width: 47%;
                    float: right;
                    li {
                        margin-right: 40px;
                    }
                }
            }
        }

    }

    .moveRight { /*箭头占位符，规定宽高等*/
        width: 510px;
        height: 3px;
        display: inline-block;
        position: relative;
        cursor: pointer;
        /*background: red;*/
    }

    .moveRight:before, .moveRight:after { /*伪元素相同属性提取*/
        content: '';
        /*border-color: transparent; !*边框颜色透明*!*/
        border-style: solid;
        position: absolute; /*绝对定位，分别定位before和after描绘的内容*/
    }

    .moveRight:before { /*伪元素before绘制箭头尾部矩形*/
        border: none;
        background: red;
        height: 2px;
        width: 100%;
        top: -150%;
        /*left: 40px;*/
    }

    .moveRight:after { /*伪元素after绘制箭头的头部三角形*/
        border: 4px solid transparent;
        border-left: 16px solid #f00;
        width: 0;
        display: inline-block;
        right: -20px;
        top: -250%;
        border-left-color: red; /*如果绘制向下三角形的话，用border-top-color:#555;*/
    }
</style>

<template>
    <div id="blockInfo">
        <div v-for="item in tableList">
            <ul>
                <li class="tLeft address">dd916a534e47774224337139e513f676f2e04f4ff4694b48a61c208dd683cd10</li>
                <li class="tRight"><span class="red">3个确认</span> 2018-09-20 11:41:52</li>
            </ul>
            <div>
                <div class="left">
                    <div class="red">输入：<span class="moveRight"></span></div>
                    <ul>
                        <li>
                            <span
                                class="address">dd916a534e47774224337139e513f676f2e04f4ff4694b48a61c208dd683cd10</span>
                            0.40036160 QTUM
                        </li>
                        <li>
                            <span
                                class="address">dd916a534e47774224337139e513f676f2e04f4ff4694b48a61c208dd683cd10</span>
                            0.40036160 QTUM
                        </li>
                        <li>
                            <span
                                class="address">dd916a534e47774224337139e513f676f2e04f4ff4694b48a61c208dd683cd10</span>
                            0.40036160 QTUM
                        </li>
                        <li>
                            <span
                                class="address">dd916a534e47774224337139e513f676f2e04f4ff4694b48a61c208dd683cd10</span>
                            0.40036160 QTUM
                        </li>
                        <li>
                            <span
                                class="address">dd916a534e47774224337139e513f676f2e04f4ff4694b48a61c208dd683cd10</span>
                            0.40036160 QTUM
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <div class="red">输出：</div>
                    <ul>
                        <li>
                            <span
                                class="address">dd916a534e47774224337139e513f676f2e04f4ff4694b48a61c208dd683cd10</span>
                            0.40036160 QTUM
                        </li>
                        <li>
                            <span
                                class="address">dd916a534e47774224337139e513f676f2e04f4ff4694b48a61c208dd683cd10</span>
                            0.40036160 QTUM
                        </li>
                        <li>
                            <span
                                class="address">dd916a534e47774224337139e513f676f2e04f4ff4694b48a61c208dd683cd10</span>
                            0.40036160 QTUM
                        </li>
                        <li>
                            <span
                                class="address">dd916a534e47774224337139e513f676f2e04f4ff4694b48a61c208dd683cd10</span>
                            0.40036160 QTUM
                        </li>
                        <li>
                            <span
                                class="address">dd916a534e47774224337139e513f676f2e04f4ff4694b48a61c208dd683cd10</span>
                            0.40036160 QTUM
                        </li>
                        <li>
                            <span
                                class="address">dd916a534e47774224337139e513f676f2e04f4ff4694b48a61c208dd683cd10</span>
                            0.40036160 QTUM
                        </li>
                        <li>
                            <span
                                class="address">dd916a534e47774224337139e513f676f2e04f4ff4694b48a61c208dd683cd10</span>
                            0.40036160 QTUM
                        </li>
                        <li>
                            <span
                                class="address">dd916a534e47774224337139e513f676f2e04f4ff4694b48a61c208dd683cd10</span>
                            0.40036160 QTUM
                        </li>
                        <li>
                            <span
                                class="address">dd916a534e47774224337139e513f676f2e04f4ff4694b48a61c208dd683cd10</span>
                            0.40036160 QTUM
                        </li>
                        <li>
                            <span
                                class="address">dd916a534e47774224337139e513f676f2e04f4ff4694b48a61c208dd683cd10</span>
                            0.40036160 QTUM
                        </li>
                    </ul>
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [],
        data() {
            return {
                tableList: [{}, {}, {}, {}]
            }
        },
        components: {},
        computed: {},
        methods: {},
        mounted() {

        }
    }
</script>
