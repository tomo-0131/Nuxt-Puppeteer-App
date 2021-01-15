export default {
  REGISTER_USER: function (state, data) {
    state.registeredUser["email"] = data["email"]
    state.registeredUser["password"] = data["password"]
    state.authUser = data
  },
  AUTHED_USER: function (state, data) {
    state.authUser = data // 入力したemailとpasswordがここに入る
  }
}
