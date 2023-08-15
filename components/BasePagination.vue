<template>
    <div class="wrapper">
        <ul class="pager">
            <li v-if="current > 1" class="page arrow">
                <a :href="getPath(current - 1)">
                    <i class="bi bi-caret-left"></i>
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
            <li v-for="p in pager" v-show="current - 3 <= p && p <= current + 1" :key="p" class="page">
                <a :href="getPath(p + 1)" :class="{ active: current === p + 1 }">
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
                    <i class="bi bi-caret-right"></i>
                </a>
            </li>
        </ul>
    </div>
</template>]

<style>
.pager {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
}

.pager li {
    padding: 10px;
}

.pager li a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: black;
    color: white;
}

.pager .active{
    background-color: white;
    color: black;
}
</style>

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
    },
    methods: {
        getPath(p) {
            if (p === 1) {
                return '/blog/'
            } else {
                return `/blog/page/${p}`;
            }
        },
    },
}
</script>