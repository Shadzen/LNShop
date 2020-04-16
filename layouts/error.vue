<template lang="pug">
section.error-page
  h1 Error 404
  nuxt-link(to="/") Go to Main Page
</template>

<script>
  export default {
    // components: {
    //   Header, Footer, CatalogBar
    // }
  }
</script>

<style lang="sass">
.error-page
  @extend %fc
  flex-direction: column
  position: absolute
  top: 0
  left: 0
  background: gainsboro
  width: 100vw
  height: 100vh
</style>
