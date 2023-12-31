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
                                    <a :href="this.twitterURL" class="share-tw text-white text-center py-1" target="_blank">
                                        <i class="bi bi-twitter"></i>
                                    </a>
                                </div>
                                <div class="col">
                                    <a :href="this.facebookURL" class="share-fb text-white text-center py-1">
                                        <i class="bi bi-facebook"></i>
                                    </a>
                                </div>
                                <div class="col">
                                    <a :href="this.lineURL" class="share-ln text-white text-center py-1">
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
    padding-bottom: 10px;
    border-bottom: solid 1px #cccccc;
}

article h4 {
    font-weight: 700;
    margin-top: 60px;
    margin-bottom: 40px;
    border-left: solid 10px red;
    padding-left: 10px;
}

article p {
    line-height: 2;
    margin-bottom: 13px;
}

article .marker {
    background: linear-gradient(transparent 60%, yellow 60%);
    font-weight: 700;
}

/*.code-toolbar {
  position: relative;
}*/

pre[class*=language-] {
    padding-top: 20px;
    padding-bottom: 20px;
    white-space: pre-wrap;
}

/*.toolbar-item:nth-child(1) span{
    position: absolute;
    inset: 0 auto auto 0;
    color: white;
    font-size: 14px;
    padding: 2px 4px;
    background-color: gray;
}

.toolbar-item:nth-child(2) button{
    position: absolute;
    inset: 0 0 auto auto;
}*/

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
    computed: {
        twitterURL() {
            return `https://twitter.com/intent/tweet?url=https://noticenoting.netlify.app/blog/${this.item.id}/`;
        },
        facebookURL() {
            return `http://www.facebook.com/share.php?u=https://noticenoting.netlify.app/blog/${this.item.id}/`
        },
        lineURL() {
            return `http://line.me/R/msg/text/?https://noticenoting.netlify.app/blog/${this.item.id}/`
        }
    },
    methods: {
        stripTags(val) {

            return val.replace(/<([^>]+)>/g, '');
        },
    },
    head() {
        return {
            title: this.item.title,
            meta: [
                { hid: 'og:description', property: 'og:description', content: this.stripTags(this.item.body) },
                { hid: 'og:url', property: 'og:url', content: `${this.$config.apiKey}/blog/${this.item.id}` },
                { hid: 'og:image', property: 'og:image', content: this.item.image.url },
                { hid: 'og:title', property: 'og:title', content: this.item.title },
                { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
                { hid: 'twitter:image', name: 'twitter:image', content: this.item.image.url },
            ]
        }
    },
}
</script>