<template lang="pug">
nuxt-link(to="catalog" tag="button" :disabled="$route.path !== '/'").catalog-bar
  span.catalog-bar__title Каталог
  .divider
  nav.catalog-bar__nav
    ul.catalog-bar__list
      li.catalog-bar__item Все товары
      li.catalog-bar__item Маникюр
      li.catalog-bar__item Маникюр
      li.catalog-bar__item Маникюр
      li.catalog-bar__item Маникюр
      li.catalog-bar__item Маникюр
      li.catalog-bar__item Маникюр
      li.catalog-bar__item Маникюр
      li.catalog-bar__item Маникюр
  .social
    span.social__title Подпишись и будь вкурсе
    .social__btns
      .social-btn F
      .social-btn I
      .social-btn Y
</template>

<script>
    export default {
      // methods: {
      //   homePage() {
      //     return this.$route.path === "/" || this.$route.path === "/home";
      //   }
      // }
    }
</script>

<style lang="sass">
$animDuration: .5s

.catalog-bar
  display: flex
  flex-direction: column
  align-items: flex-start
  justify-content: space-between
  position: absolute
  width: $sideMargin
  height: 100vh
  top: 0
  left: 0
  padding: 8% 2.5% 3%
  overflow: hidden
  background: #E8E8E8
  transition: width 0.5s ease-in-out
  &__nav
    position: relative
    /*top: 150px*/
    /*left: 60px*/
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: space-between
    /*height: 78%*/
    /*width: 225px*/
    //transform: rotate(-90deg) translate(35%, 32%)
    transform: translate(400px, 0)
  &__title
    position: absolute
    top: 53%
    left: 15%
    //top: calc(50% + #{$headerHeight})
    font-size: 18px
    line-height: 21px
    /*transform-origin: 0 50%*/
    transform: rotate(-90deg)
  &__item
    font-size: 12px
    line-height: 28px
    text-align: left
    cursor: pointer
  ul, li
    list-style: none
    padding: 0
  .social
    transform: translate(400px, 0)

.catalog-bar:disabled
  width: $sideMargin + 245px
  .catalog-bar__title
    animation: catalogBarTitleIn $animDuration*2 ease-out forwards
  .catalog-bar__nav,
  .social
    transform: translate(0, 0)
    transition: all $animDuration ease-out $animDuration*2

.social
  &__btns
    display: flex
    flex-direction: row
    justify-content: space-between

@keyframes catalogBarTitleIn
  from,
  33.333%
    transform: rotate(-90deg)
  66.666%
    transform: rotate(0deg)
  to
    transform: rotate(0deg) translate(0, -37vh)


</style>
