<template>
  <section class="blog">
    <div class="container">
      <base-heading>
        BLOGS
      </base-heading>
      <layout-card-list-wrapper>
        <layout-card-list name="blog" v-for="(item, index) in items" :id="item.id" :key="index" :date="item.date"
          :image="item.image" :image-url="item.image.url" :body="item.body" :title="item.title" :isShadow="true"/>
      </layout-card-list-wrapper>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ $config }) {
    const { data } = await axios.get(`${$config.apiUrl}/blog`, {
      headers: { 'X-API-KEY': $config.apiKey },
    })
    return {
      items: data.contents,
    }
  },
}
</script>