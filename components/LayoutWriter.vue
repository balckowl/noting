<template>
    <div class="row">
        <div :class="`col-${classBreakPoint} mx-auto`">
            <div class="row align-items-center bg-white g-0 p-5 p-lg-3" :class="{'shadow': isShadow}">
                <div class="col-lg-5">
                    <div class="img-box text-center">
                        <img src="@/assets/img/icon.jpeg" alt="" class="mw-100">
                    </div>
                </div>
                <div class="col-lg-7">
                    <h4 class="fs-2 mb-3"> JavaJava</h4>
                    <p>
                        プログラミング勉強中の理系大学生です。
                    </p>
                    <div class="sns-area d-flex">
                        <div class="twitter">
                            <a href="" class="tw text-white p-2">
                                <i class="bi bi-twitter"></i>
                            </a>
                        </div>
                        <div class="instagram ps-2">
                            <a href="" class="ig text-white p-2">
                                <i class="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .tw {
        background: #00acee;
    }

    .ig {
        background: -webkit-linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
        background: linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
    }

    .ig:before {
        background: -webkit-radial-gradient(#ffdb2c 10%, rgba(255, 105, 34, 0.65) 55%, rgba(255, 88, 96, 0) 70%);
        background: radial-gradient(#ffdb2c 10%, rgba(255, 105, 34, 0.65) 55%, rgba(255, 88, 96, 0) 70%);
    }
</style>

<script>
    export default {
        name: 'LayoutWriter',
        props: {
            classBreakPoint: {
                type: String,
                default: 'lg-7'
            },
            isShadow: {
                type: Boolean,
                required: true,
            } 
        }
    }
</script>