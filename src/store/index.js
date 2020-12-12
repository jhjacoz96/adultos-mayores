import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
Vue.use(Vuex)

const url = 'http://localhost:3004/api'

export default new Vuex.Store({
    state: {
        credenciales: {
            username: 'admin',
            password: '12345678',
        },
        loggout: false,
        snackbar: {
            visible: false,
            color: 'success',
            text: null,
            timeout: 10000,
            multiline: false,
        },
        comentarios: [],
        citas: [],
    },
    getters: {

    },
    mutations: {
        alert (state, payload) {
            state.snackbar.text = payload.text
            state.snackbar.multiline = payload.text.length
            // Si es mas de 50 caracteres definirlo como multilinea
            if (payload.multiline > 50) {
              state.snackbar.multiline = payload.multiline
            }
            // Color para mensajes de error o éxito
            if (payload.color) {
              state.snackbar.color = payload.color
            }
           // Tiempo de duración
            if (payload.timeout) {
              state.snackbar.timeout = payload.timeout
            }
            state.snackbar.visible = true
         },
         closeAlert (state) {
            state.snackbar.visible = false
            state.snackbar.multiline = false
            state.snackbar.text = null
          },
        SET_COMENTARIOS (state, payload) {
            state.comentarios = payload
        },
        SET_CITAS (state, payload) {
            state.citas = payload
        },
        PUSH_COMENTARIO (state, payload) {
            state.comentarios.push(payload)
        },
        SET_COMENTARIO (state, payload) {
            const comentarios = state.comentarios.map(com => {
                if (com._id === payload._id) {
                    com = payload
                    console.log(com)
                }
                return com
            })
            state.comentarios = comentarios
        },
        LOGIN (state, payload) {
            state.loggout = payload
            router.push('/administrador')
        },
        sessionOff (state, payload) {
            state.loggout = payload
            router.push('/')
        },
    },
    actions: {
        getComentarios ({ commit }) {
            axios.get(`${url}/comentario`).then(res => {
                if (res.data.ok) {
                    commit('SET_COMENTARIOS', res.data.comentario)
                } else {
                    commit('alert', {
                        color: 'error',
                        text: res.data.message,
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        postComentario ({ commit }, payload) {
            axios.post(`${url}/comentario`, payload).then(res => {
                if (res.data.ok) {
                    console.log(res.data)
                    commit('PUSH_COMENTARIO', res.data.comentario)
                    commit('alert', {
                        color: 'success',
                        text: res.data.message,
                    })
                } else {
                    commit('alert', {
                        color: 'error',
                        text: res.data.message,
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        postCita ({ commit }, payload) {
            axios.post(`${url}/cita`, payload).then(res => {
                if (res.data.ok) {
                    console.log(res.data)
                    commit('alert', {
                        color: 'success',
                        text: res.data.message,
                    })
                } else {
                    commit('alert', {
                        color: 'error',
                        text: res.data.message,
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        getCitas ({ commit }) {
            axios.get(`${url}/cita`).then(res => {
                if (res.data.ok) {
                    commit('SET_CITAS', res.data.cita)
                } else {
                    commit('alert', {
                        color: 'error',
                        text: res.data.message,
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        modificarCita ({ commit }, payload) {
            var body = { respuesta: payload.respuesta }
            axios.put(`${url}/comentario/${payload.comentario._id}`, body)
            .then(res => {
                if (res.data.ok) {
                    commit('SET_COMENTARIO', res.data.comentario)
                    commit('alert', {
                        color: 'success',
                        text: res.data.message,
                    })
                } else {
                    commit('alert', {
                        color: 'error',
                        text: res.data.message,
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
    },
})
