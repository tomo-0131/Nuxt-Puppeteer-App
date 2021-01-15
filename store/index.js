import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

const store = () => {
  return new Vuex.Store({
    state: {
      authUser: null
    },
      mutations,
      actions
  })
}

export default store;
