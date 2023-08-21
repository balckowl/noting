<template>
  <div>
    <layout-visual />
    <!--about-->
    <section class="about">
      <div class="container">
        <base-heading>
          ABOUT
        </base-heading>
        <layout-writer classBreakPoint="lg-7" :isShadow="true"/>
      </div>
    </section>

    <!--works-->
    <section class="work">
      <div class="container">
        <base-heading>
          WORK
        </base-heading>
        <layout-card-list-wrapper>
          <layout-card-list name="work" v-for="(item, index) in workItems" :id="item.id" :key="index" :date="item.date"
            :image="item.image" :image-url="item.image.url" :body="item.body" :title="item.title" :isShadow="true"/>
        </layout-card-list-wrapper>
        <base-button link="/work"/>
      </div>
    </section>



    <!--blogs-->
    <section class="blog">
      <div class="container">
        <base-heading>
          BLOG
        </base-heading>
        <layout-card-list-wrapper>
          <layout-card-list name="blog" v-for="(item, index) in blogItems" :id="item.id" :key="index" :date="item.date"
            :image="item.image" :image-url="item.image.url" :body="item.body" :title="item.title" :isShadow="true"/>
        </layout-card-list-wrapper>
        <base-button link="/blog"/>
      </div>
    </section>
  </div>
</template>

<style>
section {
  padding-block: 120px;
}
</style>

<script>
import axios from 'axios'
export default {
  async asyncData({ $config }) {
    const blog = await axios.get(`${$config.apiUrl}/blog?limit=4`, {
      headers: { 'X-API-KEY': $config.apiKey },
    })
    const work = await axios.get(`${$config.apiUrl}/work?limit=4`, {
      headers: { 'X-API-KEY': $config.apiKey },
    })
    return {
      blogItems: blog.data.contents,
      workItems: work.data.contents
    }
  }
} 
</script>