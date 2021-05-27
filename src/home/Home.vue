<template>
  <div class="container col-10 bg-secondary text-dark">
    <div class="card text-center">
      <div class="card-header">Name's CV</div>
      <div class="card-body">
        <h5 class="card-title">Name here</h5>
        <div class="container">
          <span class="card-text col-6">Details here</span>
          <span class="card-text col-6"> <a class="btn btn-sm btn-outline-info m-1"><router-link to="/create-cv">Create CV</router-link></a>
          </span>
        </div>
        <div class="container col-6 card bg-primary mb-3">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">I did this</li>
            <li class="list-group-item">And this</li>
            <li class="list-group-item">And also this</li>
          </ul>
        </div>
        <a href="#" class="btn btn-primary m-1">LinkedIn</a>
      </div>
      <div class="card-footer text-muted">
        <a href="#" class="btn btn-sm btn-outline-danger m-1">Log Out</a>
      </div>
    </div>
  </div>
</template>