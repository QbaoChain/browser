<template>
    <div id="addressInfoHeader">
        <h2>
            账户信息
        </h2>
        <ul>
            <li>
                <label>交易hash：</label><span class="address">{{txInfo.txId}}</span>
            </li>
            <li>
                <label>区块hash：</label><span>{{txInfo.blockHash}}</span>
            </li>
            <li>
                <label>区块高度：</label><span>{{txInfo.blockHeight}}</span>
            </li>
            <li>
                <label>交易大小：</label><span>{{txInfo.size}}</span>
            </li>
            <li>
                <label>确认数：</label><span>3</span>
            </li>
            <li>
                <label>手续费：</label><span>{{txInfo.txFee}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import { get } from '../ajax/index'
    export default {
        props: ['txHash'],
        data() {
            return {
                txInfo: {
                    txId: null,
                    time: null,
                    blockHash: null,
                    blockHeight: null,
                    size: null,
                    txFee: null,
                    txVin: null,
                    txVout: null
                }
            }
        },
        components: {},
        computed: {},
        methods: {},
        mounted() {
        }
    }
</script>
