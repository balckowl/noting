<template>
    <div class="text-center">
        <a :href="link">
            <button class="btn-lg btn-dark">{{ name }}</button>
        </a>
    </div>
</template>

<style>
    .btn-lg {
        padding-inline: 100px;
    }
</style>

<script>
export default{
    name: 'BaseButton',
    props: {
        name: {
            type: String,
            default: 'MORE'
        },
        link: {
            type: String,
            required: true,
        }
    }
} 
</script>