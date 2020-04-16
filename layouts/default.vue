<template lang="pug">
  .b-container
    CatalogBar
    Header
    main
      nuxt
    Footer
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import CatalogBar from '~/components/CatalogBar'

export default {
  components: {
    Header, Footer, CatalogBar
  },
  mounted() {

  }
}
</script>

<style lang="sass">

*,
*:before,
*:after
  box-sizing: border-box
  margin: 0
  font-family: 'Roboto', sans-serif
  font-style: normal
  font-weight: 300

main
  padding: 0 $sideMargin

h1
  font-size: 94px
  line-height: 100px
  margin: 5% 0

p
  font-size: 22px
  line-height: 26px

a
  color: #000
  text-decoration: none

article
  width: 100%

button
  border: 0
  outline: 0
  padding: 0
  cursor: pointer
  &:disabled
    cursor: default
    color: #000

.b-container
  position: relative
  max-width: 1920px
  margin: 0 auto

.container
  min-height: calc(100vh - #{$headerHeight})
  display: flex
  flex-direction: row
  padding-left: 245px
  width: 100%

/*.__nuxt-error-page*/
/*  width: 100vw*/
/*  height: 100vh*/
</style>
