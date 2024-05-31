<script>
import Store from '../data/store.js'
import Fontawesome from "fontawesome"

export default {
  name: "AppHeader",

  data() {
    return {
      title: "netflix",
      Store,
      Fontawesome,
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

    <!-- destra headre -->
    <div class="sx">
      <h1>{{ title }}</h1>
      <ul>
        <li v-for="link in Store.headerLinks">
          <a :href="link.url">{{ link.text }}</a>
        </li>
      </ul>
    </div>

    <!-- sinistra header -->
    <div class="dx">
      <i class="fa-solid fa-magnifying-glass"></i>
      <a href="#Bambini">Bambini</a>
      <i class="fa-regular fa-bell"></i>
    </div>
  </header>
</template>


<style scoped>
header {
  background: #141414;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  color: white;
}

ul {
  list-style-type: none;
}

li,
.dx * {
  display: inline-block;
  padding: 0 1rem
}

a {
  text-decoration: none;
  color: unset;
}

i {
  font-size: 1.4rem;
}

.dx,
.sx {
  display: flex;
  align-items: center;
  font-weight: 500;
}
</style>
