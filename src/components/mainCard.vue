<template>
  <!-- <div class="row row-cols-6"> -->
  <!-- <div class="col"> -->
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">
        <slot name="title"></slot>
      </h5>

      <p class="info-text">
        <slot name="info"></slot>
      </p>

      <a class="btn btn-primary">
        <slot name="button"></slot>
      </a>
    </div>
  </div>
  <!-- </div>
  </div> -->
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  display: inline-flex;
  margin: 1rem;
}
</style>