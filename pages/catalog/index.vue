<template lang="pug">
section.container
  .catalog
    .catalog__filter
      h2 ФИЛЬТР
    CatalogItem(v-for="item of items" :key="item.article" :product="item")
</template>

<script>
import CatalogItem from '~/components/CatalogItem'
import catalog from '~/static/catalog.json'

export default {
  components: {
    CatalogItem
  },
  data() {
    return {
      // url: 'catalog.json',
      // items: [],
      items: catalog.catalog,
    }
  },
  methods: {
    // getData(url) {
    //   return fetch(url).then(d => d.json())
    // }
  },
  mounted() {
    // this.$parent.getData(this.url)
    // this.getData(this.url)
    //   .then(data => {this.items = data})
    // // this.items = ''
    // console.log(this.items)
  }
}
</script>

<style lang="sass">
.catalog
  display: flex
  flex-direction: row
  justify-content: space-between
  flex-wrap: wrap
  width: 100%
  height: 100%
  padding: 60px 0 0 $sideMargin
  &:after
    content: ""
    flex: 0 0 30%
  &__filter
    @extend %fc
    width: 100%
    height: $headerHeight
    background: #E8E8E8
    border-radius: 25px
    margin-bottom: 60px
</style>
