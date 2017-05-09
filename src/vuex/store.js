import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import settings  from './modules/settings.js'

export const store = new Vuex.Store({
    modules: {
        settings
    }
});