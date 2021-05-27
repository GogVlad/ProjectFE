<template>
  <div class="container col-10 text-light float-left">
    <h2 class="mb-2">Create Your CV Here:</h2>
    <form>
      <h4 class="mb-5">Add Sections:</h4>
      <div class="container row">
        <div class="col-3 form-group">
          <label for="title">Title:</label>
          <input
            name="title[]"
            type="text"
            class="form-control"
            placeholder="Enter Title Here"
          />
        </div>
        <div class="col-6 form-group">
          <label for="description">Description</label>
          <input
            name="description[]"
            type="text"
            class="form-control"
            id="description"
            placeholder="Enter Description Here"
          />
        </div>
        <div class="col-3 pt-4">
          <button
            type="button"
            @click="addForm"
            class="btn btn-sm btn-info m-2"
          >
            add section
          </button>
          <button
            type="button"
            @click="deleteForm(counter)"
            class="btn btn-sm btn-danger m-2"
          >
            delete last section
          </button>
        </div>
      </div>

      <div v-for="(applicant, counter) in applicants" v-bind:key="counter">
        <div class="container row">
          <div class="col-3 form-group">
            <label for="title"></label>
            <input
              name="title[]"
              type="text"
              class="form-control"
              placeholder="Enter Title Here"
            />
          </div>
          <div class="col-9  form-group">
            <label for="description"></label>
            <input
              name="description[]"
              type="text"
              class="form-control"
              id="description"
              placeholder="Enter Description Here"
            />
          </div>
        </div>
      </div>
    </form>
    <div class="container col-6 m"></div>
    <button type="submit" class="btn btn-success mt-5">Create CV</button>
    <div class="container col-6">
      <button class="btn btn-sm btn-danger m-3">
        <router-link to="/home">Homepage</router-link>
      </button>
    </div>
  </div>
</template>

<script>
var currentNumber;
export default {
  data() {
    return {
      currentNumber: "",
      applicants: [
        {
          currentNumber,
        },
      ],
    };
  },
  methods: {
    addForm() {
      currentNumber++;
      this.applicants.push({});
    },
    deleteForm(counter) {
      this.applicants.splice(counter, 1);
      currentNumber--;
    },
  },
};
</script>