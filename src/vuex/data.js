import {nanoid} from 'nanoid';

export default {
    namespaced: true,
    state: {
        user: null,
        messages: null,
        needAuth: true,
    },
    mutations: {
        ['ADD_MESSAGES'](state, payload) {
            state.messages = payload;
        },
        ['SET_USER'](state, payload) {
            state.user = payload;
        },
        ['NEED_AUTH'](state, payload) {
            state.needAuth = payload;
        }
    },

    actions: {
        getUser({commit}) {
            const user = sessionStorage.getItem('user');
            if (user) {
                commit('SET_USER', JSON.parse(user));
                commit('NEED_AUTH', false);
            } else {
                commit('NEED_AUTH', true);
            }
        },
        addUser({commit}, payload) {
            const user = {
                name: payload,
                id: nanoid()
            };
            sessionStorage.setItem('user', JSON.stringify(user));
            commit('SET_USER', user); 
            commit('NEED_AUTH', false);    
        },
        fetchMessages({commit}) {
            const messages = localStorage.getItem('messages');
            if (messages) {
                commit('ADD_MESSAGES', JSON.parse(messages));

            } else {
                localStorage.setItem('messages', '[]');
                commit('ADD_MESSAGES', []);
            }
                

        },
        addNewMessage({dispatch}, payload) {
            const messages = JSON.parse(localStorage.getItem('messages'));
            messages.push(payload);
            if (messages.length === 9) {
                messages.shift();
            }
            localStorage.messages = JSON.stringify(messages);
            dispatch('fetchMessages');
            
        }
    },
    getters: {
        get_status_need_auth(state) {
            return state.needAuth;
        },
        get_user(state) {
            return state.user;
        },
        get_messages(state) {
            return state.messages;
        },
        get_users(state) {
            if (state.messages) {
                return Array.from(new Set(state.messages.map(el => el.user.name)));
            } else {
                return [];
            }
            
        },
    }
}