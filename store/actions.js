export default {
  async registration({ commit }, { email, password }) {
    try {
      if (email.includes("@") === false) {
        throw new Error("メールアドレスには＠が含まれている必要があります。")
      } else if (password.length >= 10 || password.length <= 5) {
        throw new Error("パスワードは5文字以上10文字以下で作成してください。")
      }
      let data = { email: email, password: password }
      commit("REGISTER_USER", data)
    } catch(e) {
      throw e
    }
  },
  async login({ commit }, { email, password, authUser }) {
    console.log(commit)
    try {
      // authUserには渡された登録ユーザーのメールアドレスとパスワードが格納されています。
      // それらの値と入力された値が異なればエラー、同じなら次の処理に進みます。
      if (email != authUser.email || password != authUser.password) {
        throw new Error("error!!!")
      }
      let data = { email: email, password: password }
      commit("AUTHED_USER", data)
    } catch (e) {
      throw e
    }
  }
}
