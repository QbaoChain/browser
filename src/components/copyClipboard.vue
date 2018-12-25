<style lang="less" scoped type="text/less">
    .copyImg {
        width: 25px;
        vertical-align: middle;
        margin-top: -3px;
        cursor: pointer;
    }
</style>

<template>
    <a>
        <img src="../assets/images/copy.png" alt="复制" class="copyImg" @click="copyToClip(value)"/>
    </a>
</template>

<script>
    export default {
        props: ['value'],
        data() {
            return {
            }
        },
        components: {
        },
        computed: {
        },
        watch: {
        },
        methods: {
            copyToClip(str) {
                function listener(e) {
                    e.clipboardData.setData("text/html", str);
                    e.clipboardData.setData("text/plain", str);
                    e.preventDefault();
                }

                document.addEventListener("copy", listener);
                document.execCommand("copy");
                document.removeEventListener("copy", listener);
            },
        },
        mounted() {
        }
    }
</script>
