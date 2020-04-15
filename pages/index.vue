<template lang="pug">
section.container
  .side._left
    article
      h1 Все для салона красоты
      p Товары для наращивания ногтей, маникюра, ухода за собой
  .side._right
</template>

<script>
// import Logo from '~/components/Logo.vue'
//
// export default {
//   components: {
//     Logo
//   }
// }
</script>

<style lang="sass">
  .side
    display: flex
    flex-direction: column
    width: 50%
    &._left
      justify-content: center
</style>
