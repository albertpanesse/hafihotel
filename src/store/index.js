import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { LayoutModule } from '@/store/modules'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    key: 'vuex',
    storage: window.localStorage
})

const store = new Vuex.Store({
    modules: {
        LayoutModule
    },
    plugins: [vuexLocal.plugin]
})

export default store
