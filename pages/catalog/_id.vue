<template lang="pug">
section.container
  h1 {{$route.params.id}}
<!--  h1 {{item.catalog}}-->
</template>

<script>
export default {
  validate({params}) {
    console.log('Params ID: ' + params.id)

    // if () {
      return true
    // } else {
    //   return false
    // }
  },
  // async asyncData({params, error, store}) {
  //   try {
  //     const item = await store.dispatch('catalog/fetchCatalogItem', params.id)
  //     // item = item.catalog
  //     // console.log(item.filter('article', params.id))
  //     // console.log(params.id)
  //     return {item}
  //   } catch (e) {
  //     error(e)
  //   }
  // },
  data() {
    return {

    }
  },
  mounted() {
    // console.log(this.item)
  }
}
</script>

<style lang="sass">

</style>
