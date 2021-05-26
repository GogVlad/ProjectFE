<template>
  <div class="container col-6">
    <h2>Register</h2>
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          type="text"
          v-model="user.firstName"
          v-validate="{ required: true, alpha: true }"
          name="firstName"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('firstName') }"
        />
        <div
          v-if="submitted && errors.has('firstName')"
          class="invalid-feedback"
        >
          {{ errors.first("firstName") }}
        </div>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          v-model="user.lastName"
          v-validate="{ required: true, alpha: true }"
          name="lastName"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('lastName') }"
        />
        <div
          v-if="submitted && errors.has('lastName')"
          class="invalid-feedback"
        >
          {{ errors.first("lastName") }}
        </div>
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="user.username"
          v-validate="{ required: true, email: true }"
          name="username"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('username') }"
        />
        <div
          v-if="submitted && errors.has('username')"
          class="invalid-feedback"
        >
          {{ errors.first("username") }}
        </div>
      </div>
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          v-model="user.password"
          v-validate="'required|min:8|number|upCase'"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('password') }"
        />
        <div
          v-if="submitted && errors.has('password')"
          class="invalid-feedback"
        >
          {{ errors.first("password") }}
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" v-on:click="clickFunction()">
          Register
        </button>
        <router-link to="/login" class="btn btn-link">Cancel</router-link>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        firstName: "",

        lastName: "",

        username: "",

        password: "",
      },

      submitted: false,
    };
  },

  created() {
    this.$validator.extend("upCase", {
      getMessage: () => "One uppercase character",

      validate: (value) => value.match(/[A-Z]/g) !== null,
    });

    this.$validator.extend("number", {
      getMessage: () => "One number",

      validate: (value) => value.match(/[0-9]/g) !== null,
    });
  },

  methods: {
    clickFunction() {
      
     axios.get("http://192.168.1.101:8080/GetAllCars?")
     .then(response => console.log(response))
     .catch(error => console.log(error));
    },
  },
};
</script>
