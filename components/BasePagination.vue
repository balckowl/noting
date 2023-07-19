<template>
    <div class="wrapper">
        <ul class="pager">
            <li v-if="current > 1" class="page arrow">
                <a :href="getPath(current - 1)">
                    前のページへ
                </a>
            </li>
            <li v-if="3 < current" class="page">
                <a :href="getPath(1)">
                    1
                </a>
            </li>
            <li v-if="4 < current" class="omission">
                ...
            </li>
            <li v-for="p in pager" v-show="current - 3 <= p && p <= current + 1" :key="p" class="page"
                :class="{ active: current === p + 1 }">
                <a :href="getPath(p + 1)">
                    {{ p + 1 }}
                </a>
            </li>
            <li v-if="current + 3 < pager.length" class="omission">
                ...
            </li>
            <li v-if="current + 2 < pager.length" class="page">
                <a :href="getPath(pager.length)">
                    {{ pager.length }}
                </a>
            </li>
            <li v-if="current < pager.length" class="page arrow">
                <a :href="getPath(current + 1)">
                    次のページへ
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'BasePagination',
    props: {
        pager: {
            type: Array,
            required: false,
            default: () => [],
        },
        current: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: false,
        },
    },
    methods: {
        getPath(p) {
            return `/work/${p}`;
        },
    },
}
</script>