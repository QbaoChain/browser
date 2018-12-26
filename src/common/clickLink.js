export function clickBlock(Vue) {
    Vue.prototype.clickBlock = function (router, block) {
        router.push({
            path: '/blockDetail',
            query: {
                block
            }
        });
    };
}

export function clickAddress(Vue) {
    Vue.prototype.clickAddress = function (router, address) {
        if (address !== 'Coinbase') {
            router.push({
                path: '/addressInfo',
                query: {
                    address
                }
            });
        }
    }
}

export function clickTransaction(Vue) {
    Vue.prototype.clickTransaction = function (router, txHash) {
        router.push({
            path: '/txInfo',
            query: {
                txHash
            }
        });
    }
}
