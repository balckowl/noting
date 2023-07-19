<template>
    <div class="row mb-5">
        <div class="col">
            <div :class="`row row-cols-${classBreakPoint} row-cols-sm-${classSmBreakPoint} row-cols-md-${classMdBreakPoint} row-cols-lg-${classLgBreakPoint} row-cols-xxl-${classXxlBreakPoint} gy-3`">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LayoutCardListWrapper',
    props: {
        classBreakPoint :{
            type: String,
            default: '1'
        },
        classSmBreakPoint: {
            type: String,
            default: '1'
        },
        classMdBreakPoint: {
            type: String,
            default: '1'
        },
        classLgBreakPoint: {
            type: String,
            default: '2'
        },
        classXxlBreakPoint: {
            type: String,
            default: '2',
        }
    } 
}
</script>

