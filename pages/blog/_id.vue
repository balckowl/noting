<template>
    <!--article-->
    <section class="article">
        <div class="container">
            <div class="row g-0">
                <div class="col-lg-8 mx-auto shadow p-2 p-sm-3">
                    <article>
                        <!--タイトル、サムネ-->
                        <h2 class="fs-1 p-3">{{ item.title }}</h2>

                        <div class="post-time text-end">
                            <time>{{ item.date | formatDate }}</time>
                        </div>

                        <div class="thumbnail mb-3">
                            <img :src="item.image.url" alt="" class="mw-100">
                        </div>

                        <!--本文-->
                        <div class="line-numbers" v-html="item.body"></div>
                    </article>

                    <div class="share mb-5">
                        <div class="container">
                            <div class="row g-0">
                                <div class="col">
                                    <a href="" class="share-tw text-white text-center py-1">
                                        <i class="bi bi-twitter"></i>
                                    </a>
                                </div>
                                <div class="col">
                                    <a href="" class="share-fb text-white text-center py-1">
                                        <i class="bi bi-facebook"></i>
                                    </a>
                                </div>
                                <div class="col">
                                    <a href="" class="share-ln text-white text-center py-1">
                                        <i class="bi bi-line"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="recommend">
                        <layout-card-list-wrapper classBreakPoint="1" classSmBreakPoint="2" classMdBreakPoint="2"
                            classLgBreakPoint="2" classXxlBreakPoint="3">
                            <layout-card-list name="blog" v-for="(item, index) in blogItems" :id="item.id" :key="index"
                                :date="item.date" :image="item.image" :image-url="item.image.url" :body="item.body"
                                :title="item.title" :isShadow="false" classInBreakPoint="1" classSmInBreakPoint="1"
                                classMdInBreakPoint="1" classLgInBreakPoint="1" classXxlInBreakPoint="1" />
                        </layout-card-list-wrapper>
                    </div>

                    <div class="writer">
                        <layout-writer classBreakPoint="lg-10" :isShadow="false" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
article {
    margin-bottom: 40px;
}

article h2 {
    font-weight: 700;
}

.post-time time {
    font-family: 'Agdasima', sans-serif;
}

article h3 {
    font-weight: 700;
    margin-top: 80px;
    margin-bottom: 20px;
}

article p {
    line-height: 1.7;
    margin-bottom: 13px;
}

article .marker {
    background: linear-gradient(transparent 60%, yellow 60%);
    font-weight: 700;
}

.share-tw {
    display: block;
    background: #00acee;
}

.share-fb {
    display: block;
    background: #3b5998;
}

.share-ln {
    display: block;
    background: #00B900;
}
</style>

<script>
import axios from 'axios'
import Prism from '~/plugins/prism'

export default {
    async asyncData({ $config, params, error }) {
        try {
            const { data } = await axios.get(
                `${$config.apiUrl}/blog/${params.id}`,
                {
                    headers: { 'X-API-KEY': $config.apiKey },
                }
            )
            const blog = await axios.get(`${$config.apiUrl}/blog?limit=3&filters=flag[equals]true`, {
                headers: { 'X-API-KEY': $config.apiKey },
            })
            return {
                item: data,
                blogItems: blog.data.contents,
            }
        } catch (err) {
            error({
                errorCode: 404,
            })
        }
    },
    mounted() {
        Prism.highlightAll()
    },
    head() {
        return {
            title: this.item.title,
        }
    },
}
</script>