import Vuex from "vuex"
import mutations from "./mutations"
import actions from "./actions"

const store = () => {
  return new Vuex.Store({
    state: {
      registered_user: {},
      authUser: null
    },
      mutations,
      actions
    })
}
export default store;
