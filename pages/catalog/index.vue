<template lang="pug">
section.container
  .catalog
    .catalog__filter
      h2 ФИЛЬТР
    CatalogItem(v-for="item of items.catalog" :key="item.article" :product="item")
</template>

<script>
import CatalogItem from '~/components/CatalogItem'
// import catalog from '~/static/catalog.json'

export default {
  components: {
    CatalogItem
  },
  async asyncData({$axios, error}) {
    try {
      const items = await $axios.$get('https://raw.githubusercontent.com/Shadzen/LNShop/master/static/catalog.json')
      // console.log(items)
      return {items}
    } catch (e) {
      error(e)
    }
  },
  // async fetch({store, error}) {
  //   try {
  //     if (store.getters['catalog/catalog'].length === 0) {
  //       await store.dispatch('catalog/fetchCatalog')
  //       // const test = {1:1}
  //       // // test = catalog
  //       //
  //       // console.log(test)
  //     }
  //   } catch (e) {
  //     error(e)
  //   }
  // },
  data() {
    return {
      // url: 'catalog.json',
      // items: [],
      // items: this.$store.getters['catalog/catalog']
    }
  },
  // computed: {
  //   items() {
  //     return this.$store.getters['catalog/catalog']
  //   }
  // },
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
    // console.log(this.$store.getters['catalog/catalog'])
    console.log(this.items)
    // console.log(JSON.stringify(JSON.parse(this.items)))
    // console.log(JSON.parse(this.items))
    // console.log('{"names": [{"Topo": "1", "Yolo": "2"}]}')
    // console.log(JSON.parse('{"names": [{"Topo": "1", "Yolo": "2"}]}'))
    // let test = JSON.parse('this: 1')
    // console.log((JSON.parse('this: 1'))
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
