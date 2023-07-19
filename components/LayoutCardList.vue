<template>
    <div class="col position-relative">
        <a :href="`/${name}/${id}/`">
            <div
                :class="`row row-cols-${classInBreakPoint} row-cols-${classSmInBreakPoint} row-cols-md-${classMdInBreakPoint} row-cols-lg-${classLgInBreakPoint} row-cols-xxl-${classXxlInBreakPoint} ${isShadow? 'shadow': ''} bg-white g-0 rounded-2`">
                <div class="col">
                    <div class="img-box">
                        <img v-if="image" :src="imageUrl" alt="" class="mw-100">
                    </div>
                </div>
                <div class="col p-4">
                    <h3 class="card-title mb-3">{{ title }}</h3>
                    <div class="card-text" v-text="body"></div>
                </div>
            </div>
            <div class="card-tag position-absolute top-0  mt-2 ms-2 p-1 text-white">
                {{ date | formatDate }}
            </div>
        </a>
    </div>
</template>

<style>
.card-title {
    font-size: 25px;
    font-weight: 700;
}

.card-text {
    font-size: 12px;
    color: #aaaaaa;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
}

.card-add-title {
    font-size: 10px;
    color: #aaaaaa;
}

.card-tag {
    font-family: 'Agdasima', sans-serif;
    background: black;
}
</style>

<script>

export default {
    name: 'LayoutCardList',
    props: {
        name: {
            type: String,
            required: true
        },
        isShadow: {
            type: Boolean,
            required: true
        },
        classInBreakPoint: {
            type: String,
            default: '1'
        },
        classSmInBreakPoint: {
            type: String,
            default: '1'
        },
        classMdInBreakPoint: {
            type: String,
            default: '2'
        },
        classLgInBreakPoint: {
            type: String,
            default: '1'
        },
        classXxlInBreakPoint: {
            type: String,
            default: '2',
        },
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        image: {
            type: Object,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        }
    }
}
</script>

