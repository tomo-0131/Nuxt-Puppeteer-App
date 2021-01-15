<template>
  <div class="login-form">
    <form @submit.prevent="registration">
      <p class="error" v-if="error">{{ error }}</p>
    </form>
  </div>
</template>
