<template>
  <m-card :icon="icon" :title="title">
    <div class="card-body pt-3">
      <div class="nav jc-between">
        <div
          class="nav-item"
          :class="{active: active === i}"
          v-for="(category, i) in categories"
          :key="i"
          @click="$refs.list.swiper.slideTo(i)"
        >
          <div class="nav-link">{{category.name}}</div>
        </div>
      </div>

      <div class="pt-3">
        <swiper ref="list" :options="{autoHeight: true}"
        @slide-change="() => active = $refs.list.swiper.realIndex">
          <swiper-slide v-for="(category, i) in categories" :key="i">
            <slot name="items" :category="category"></slot>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </m-card>
</template>

<script>
export default {
  props: {
    icon: { type: String, require: true },
    title: { type: String, require: true },
    categories: { type: Array, require: true }
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
</style>