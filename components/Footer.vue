<template lang="pug">
  footer
    Logo
    h1 Footer
</template>

<script>
  import Logo from '~/components/Logo'

  export default {
    components: {
      Logo
    }
  }
</script>

<style lang="sass">
footer
  display: flex
  flex-direction: row
  align-items: center
  justify-content: space-between
  height: 327px
  width: 100%
  padding: 0 $sideMargin
  background-color: #B0B0B0
</style>
