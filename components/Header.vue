<template lang="pug">
  header.header
    Logo
    span Все для салона красоты
    input.search
    .tel
      span +7 (913) 845-25-45
      span  Заказать обратный звонок
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
  .header
    position: relative
    width: 100%
    height: 90px
    background-color: #B0B0B0
    display: flex
    justify-content: space-between
    align-items: center
    padding: 0 $sideMargin
</style>
