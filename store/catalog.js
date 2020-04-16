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
      const catalog = await this.$axios.$get('http://my-json-server.typicode.com/Shadzen/LNShop/catalog')
      commit('setCatalog', catalog)
    } catch (e) {
      throw e
    }
  },
  async fetchCatalogItem({}, itemArticle) {
    try {
      return await this.$axios.$get('http://my-json-server.typicode.com/Shadzen/LNShop/catalog' + itemArticle)

    } catch (e) {
      throw e
    }
  }
}

export const getters = {
  catalog: state => state.catalog
}
