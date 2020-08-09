import {createStore} from 'vuex';

export const store = createStore({
  state() {
    return {
      toasts: [
        {
          content: 'This is a toast...'
        },
        {
          content: 'Toast with timeout'
        },
        {
          content: 'Another toast...'
        },
        {
          content: 'And yet another'
        }
      ]
    };
  },
  mutations: {
    ADD_TOAST(state, data) {
      state.toasts.push(data);
    },
    REMOVE_TOAST(state, index) {
      state.toasts.splice(index, 1);
    }
  },
  actions: {
    toast({commit}, data = null) {
      commit('ADD_TOAST', data);
    },
    endToast({commit}, index = null) {
      commit('REMOVE_TOAST', index);
    }
  }
});
