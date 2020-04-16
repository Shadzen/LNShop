export const state = () => ({
  catalog: []
})

export const mutations = {
  setCatalog(state, catalog) {
    state.catalog = catalog
  }
}

export const actions = {
  async fetchCatalog({commit}) {
    try {
      const catalog = await this.$axios.$get('https://raw.githubusercontent.com/Shadzen/LNShop/master/static/catalog.json')

      // const test = {1:1}
      // // test = catalog

      // console.log(catalog)

      commit('setCatalog', catalog)
    } catch (e) {
      throw e
    }
  },
  // async fetchCatalogItem({}, itemArticle) {
  //   try {
  //
  //     return await this.$axios.$get('https://raw.githubusercontent.com/Shadzen/LNShop/master/static/catalog.json')
  //
  //   } catch (e) {
  //     throw e
  //   }
  // }
}

export const getters = {
  catalog: state => state.catalog
}
