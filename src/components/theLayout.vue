<template>
  <div class="container-fluid">
    <header>
      <router-link class="homebtn" to="/"><h1>Motala</h1></router-link>

      <slot name="header"> </slot>
    </header>
    <main>
      <slot></slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  components: {
  },
};
</script>

<style scoped>
header {
  display: flex;
  background-color: #fdcb6e;
}

h1 {
  margin-right: 2rem;
  margin-left: 2rem;
}

footer {
  background-color: #fdcb6e;
  text-align: center;
}

main {
  background-color: #ffeaa7;
}
.homebtn {
  color: black;
}
</style>