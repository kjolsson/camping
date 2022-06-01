<template>
        <figure class="flex">
        <figcaption><strong>{{dish}}</strong> {{price}}:- <br> 
        {{content}}</figcaption>
        <button class="bg-slate-500 m-2 rounded hover:bg-sky-700" @click="addPrice()">Lägg till</button>
        </figure>
</template>

<script>
  export default {
    props: ["dish", "content", "img", "price"],
    emits: ['orderprice', 'addPrice'],
    methods: {
      addPrice() {
      this.$emit('orderprice', this.price, this.dish,)
    },
  },
  }
</script>

<style scoped>

</style>