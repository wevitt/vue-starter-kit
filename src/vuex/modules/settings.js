import Vue from 'vue'

const state = {}
const mutations = {}
const getters = {};
const actions = {
    getTest({ commit }) {
        return Vue.axios.get('/componentitariffarie').then(
            (response) => {
                commit('GET_COMPONENTI', response.data.data)
                return Promise.resolve(response.data)
            }
        )
        .catch(
            (error) => {
                commit('API_FAILURE', error.response.data)
                return Promise.reject(error.response)
            }
        );      
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}