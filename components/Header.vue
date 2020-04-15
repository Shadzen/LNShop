<template lang="pug">
header
  Logo
  span Все для салона красоты
  input.search
  .tel
    span +7 (913) 845-25-45
    span  Заказать обратный звонок
  .btns-container
    .c-btn.cart
      span C
    .c-btn.cabinet
      span C
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
header
  position: relative
  width: 100%
  height: $headerHeight
  background-color: #B0B0B0
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 $sideMargin

.search
  position: relative
  width: 738px
  height: 50px
  background: #F8F8F8
  border-radius: 25px
  border: 0
  outline: 0

.tel
  display: flex
  flex-direction: column
  text-align: right
  color: #fff

.btns-container
  display: flex
  flex-direction: row

.c-btn
  @extend %fc
  width: 50px
  height: 50px
  background: #F8F8F8
  border-radius: 25px
  cursor: pointer
  margin-left: 20px
</style>
