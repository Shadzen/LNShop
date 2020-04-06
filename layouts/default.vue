<template lang="pug">
  .b-container
    Header
    main
      nuxt
    Footer
</template>

<script>
  import Header from '~/components/Header'
  import Footer from '~/components/Footer'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="sass">
  $sideMargin: 100px

  *,
  *:before,
  *:after
    box-sizing: border-box
    margin: 0
</style>
