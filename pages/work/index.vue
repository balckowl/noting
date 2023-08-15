<template>
  <section class="work">
    <div class="container">
      <base-heading>
        WORKS
      </base-heading>
      <layout-card-list-wrapper>
        <layout-card-list name="work" v-for="(item, index) in items" :id="item.id" :key="index" :date="item.date"
          :image="item.image" :image-url="item.image.url" :title="item.title" :body="item.body" :isShadow="true" />
      </layout-card-list-wrapper>
      <BasePagination page="work" :pager="pager" :current="Number(page)"/>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import BasePagination from '../../components/BasePagination.vue';
export default {
    async asyncData({ $config }) {
        const { data } = await axios.get(`${$config.apiUrl}/work`, {
            headers: { 'X-API-KEY': $config.apiKey },
        });
        return {
            items: data.contents,
        };
    },
    components: { BasePagination }
} 
</script>

