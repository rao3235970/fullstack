<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-back text-blue"></div>
      <strong class="flex-1 text-blue pl-2">
        {{model.title}}
      </strong>
      <div class="text-grey fs-xs">

      </div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
    <div class="px-3 border-top py-2">
      <div class="d-flex ai-center pb-3">
        <i class="iconfont icon-link"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="py-1">
        <router-link 
        tag="div" :to="`/articles/${item._id}`" 
        v-for="item in model.related" :key="item.id">
          {{item.title}}
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {require: true}
  },
  data(){
    return {
      model: {}
    }
  },
  watch:{
    id: 'fetch',
    // id(){
    //   this.fetch()
    // }
  },
  methods: {
    async fetch(){
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created(){
    this.fetch()
  }
}
</script>

<style lang="scss">
.page-article {
  .icon-back {
    font-size: 1.6923rem;
  }
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>