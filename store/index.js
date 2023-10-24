// store/index.js
import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      logged: false,
    };
  },
  mutations: {
    toggleLogged(state) {
      state.logged = !state.logged;
    },
  },
});