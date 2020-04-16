<template lang="pug">
a.catalog-item(href="#" @click.prevent="goTo(product.article)")
  .catalog-item-image
    img(:src="'/images/catalog/' + product.article + '/1.jpg'" :alt="product.name")
  article.catalog-item-description
    h4.catalog-item-brand {{product.brand}}
    p.catalog-item-name {{product.name}} {{product.volume}} {{product.color}}
  span.catalog-item-control
    span.catalog-item-price {{product.price}} P
    span.catalog-item-toCartBtn В тележку
</template>

<script>
  // import Logo from '~/components/Logo'
  //
export default {
  props: {
    // itemImg: {
    //   type: String,
    //   default: 'https://placehold.it/200x150'
    //   // default: '~static/images/catalog' +
    // },
    product: {
      type: Object
    }
  },
  methods: {
    goTo(article) {
      this.$router.push('/catalog/' + article)
      // this.$router.push({ name: 'foo', params: {title: 'test title' }})
    }
  }

  // async mounted() {
  //   console.log('ready')
  //   console.log(await request('https://sheet.zoho.com/api/v2/kehoh1ffc573c47c445dfb938957b42844a5b', 'POST', 'method=worksheet.records.fetch&worksheet_name=catalog&worksheet_id=&header_row=&criteria=&column_names=&render_option=&start_index=&count=&is_case_sensitive='))
  // }
}
// async function request(url, method = 'GET', data = null) {
//   try {
//     const headers = {}
//     let body
//
//     if (data) {
//       // headers['Content-Type'] = 'application/json'
//       // headers['Access-Control-Allow-Origin'] = '*'
//       // headers['Mode'] = 'no-cors'
//       headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
//       headers['Authorization'] = 'Zoho-oauthtoken 1000.31f97c68457e10d9e874b24b90588436.3dde6be73767f089ca9b23b7d83bac5c'
//       body = JSON.stringify(data)
//     }
//
//     const response = await fetch(url, {method, headers, body})
//
//     return await response.json()
//
//   } catch (e) {
//     console.warn('Error', e.message)
//   }
// }
</script>

<style lang="sass">
.catalog-item
  @extend %fc
  flex-direction: column
  justify-content: space-between
  width: 30%
  height: 354px
  background: #E8E8E8
  border-radius: 25px
  margin-bottom: 60px
  padding: 40px
  &-image
    @extend %fc
    height: 58%
    width: 100%
    /*border: 1px solid #000*/
    img
      width: auto
      height: 100%
  &-description
    display: flex
    flex-direction: column
    justify-content: flex-start
    height: 42%
  &-brand
    font-size: 14px
    line-height: 16px
    color: #7B7B7B
  &-name
    font-size: 16px
    line-height: 19px
    color: #000
    margin: 2% 0 0
  &-control
    width: 100%
    display: flex
    justify-content: space-between
    align-items: center
  &-price
    font-size: 20px
    line-height: 23px
    color: #000
  &-toCartBtn
    @extend %fc
    width: 133px
    height: 40px
    background: #F8F8F8
    border-radius: 25px
    cursor: pointer
    font-size: 12px
    line-height: 14px
    color: #7B7B7B
</style>
