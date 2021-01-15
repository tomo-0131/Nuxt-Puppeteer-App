<template>
  <v-card class="pa-md-9 mx-lg-auto" width="500px">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        prepend-icon="mdi-email"
        v-model="email"
        :rules="emailRules"
        label="E-MAIL"
        required
      ></v-text-field>

      <v-text-field
        v-bind:type="showPassword ? 'text' : 'password'"
        prepend-icon="mdi-lock"
        v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        label="パスワード"
        @click:append="showPassword = !showPassword"
        v-model="password"
        :rules="passwordRules"
        required
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    showPassword: false;
    return {
      error: null,
      email: "",
      password: "",
    };
  },
  methods: {
    async registration() {
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        this.$router.push("/");
      } catch (e) {
        this.error = e.message;
      }
    },
  },
};
</script>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    passwordRules: [
      (v) => !!v || "PASSWORD is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-MAILS is required",
      (v) => /.+@.+\..+/.test(v) || "E-MAIL must be valid",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
