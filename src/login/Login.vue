<template>
  <div class="container col-8">
    <h2 class="mb-5">Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="username"
          name="username"
          class="form-control"
          :class="{ 'is-invalid': submitted && !username }"
        />
        <div v-show="submitted && !username" class="invalid-feedback">
          Username is required
        </div>
      </div>
      <div class="form-group mb-5">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          v-model="password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && !password }"
        />
        <div v-show="submitted && !password" class="invalid-feedback">
          Password is required
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Login</button>
        <router-link to="/register" class="btn btn-link">Register</router-link>
      </div>
    </form>
  </div>
</template>



<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
    };
  },
};
</script>