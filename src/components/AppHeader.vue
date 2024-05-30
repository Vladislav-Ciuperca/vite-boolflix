<script>

export default {
  name: "AppHeader",

  data() {
    return {
      title: "netflix",
    }
  },
  methods: {

  },
  mounted() {

  }


}
</script>


<template>
  <header>
    <h1>{{ title }}</h1>
    <ul>
      <!-- <li v-for="prova in links">
        <a :href="prova.link">{{ prova.text }}</a>
      </li> -->
    </ul>
  </header>
</template>


<style scoped>
header {
  background: rgb(255, 255, 255);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  color: #111;
}

ul {
  list-style-type: none;
}

li {
  display: inline-block;
  padding: 0 1rem
}

a {
  text-decoration: none;
  color: unset;
}
</style>
