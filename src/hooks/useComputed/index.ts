import { computed } from "vue";

export default function useComputed(fun: (...args: any[]) => any) {
    const cache = new Map()
    function compare(arg1: any[], arg2: any[]) {
        return arg1.length === arg2.length &&
            arg1.every((item, index) => Object.is(item, arg2[index]))
    }
    function getCache(args: any[]): any {
        const keys = [...cache.keys()];
        const key = keys.find(item => compare(item, args))
        if (key) {
            return cache.get(key)
        }
    }
    return function (...args: any[]) {
        const cacheResult = getCache(args)
        if (cacheResult) {
            return cacheResult.value
        }
        const result = computed(() => fun(...args));
        cache.set(args, result)
        return result.value
    }
}