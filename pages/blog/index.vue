<template>
  <section class="blog">
    <div class="container">
      <base-heading>
        BLOGS
      </base-heading>
      <layout-card-list-wrapper>
        <layout-card-list name="blog" v-for="(item, index) in items" :id="item.id" :key="index" :date="item.date"
          :image="item.image" :image-url="item.image.url" :body="item.body" :title="item.title" :isShadow="true" />
      </layout-card-list-wrapper>
      <BasePagination :pager="pager" :current="Number(page)" />
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import BasePagination from '../../components/BasePagination.vue'

export default {
  async asyncData({ $config, params }) {
    const page = params.p || '1'
    const limit = 8

    const { data } = await axios.get(`${$config.apiUrl}/blog?limit=${limit}&offset=${(page - 1) * limit}`, {
      headers: { 'X-API-KEY': $config.apiKey },
    });
    return {
      items: data.contents,
      page,
      pager: [...Array(Math.ceil(data.totalCount / limit)).keys()],
    };
  },
  components: { BasePagination }
}
</script>