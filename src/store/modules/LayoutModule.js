const LayoutModule = {
    namespaced: true,
    state: {
        layout: ''
    },
    mutations: {
        updateLayout(state, layout) {
            state.layout = layout;
        }
    },
    actions: {
        updateLayout({ commit }, layout) {
            commit('updateLayout', layout);
        }
    }
}

export default LayoutModule
