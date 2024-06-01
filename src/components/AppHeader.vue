<script>
import Store from '../data/store.js'
import axios from 'axios'

export default {
  name: "AppHeader",

  data() {
    return {
      title: "netflix",
      Store,
      clicked: false,
      collegam: "",
    }
  },
  methods: {
    changeStoreSearch(param) {
      this.Store.search = param
    },

    searchFilm() {
      axios.get('https://api.themoviedb.org/3/search/tv?api_key=99daff2c5e56d77db77860a3d4fd6818&language=it_it&query=' + Store.search).then(result => {
        console.log(result.data.results)
        Store.films = result.data.results
      })
    },
    showPopular() {
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=99daff2c5e56d77db77860a3d4fd6818&language=en-US&page=1').then(result => {
        console.log(result.data.results)
        Store.films = result.data.results
      })
    },
  },

  created() {


  },
  mounted() {
    console.log("ciao primo")
    console.log("pure il secondo")
  }


}
</script>


<template>
  <header>

    <!-- destra headre -->
    <div class="sx">
      <h1 @click="showPopular()">{{ title }}</h1>
      <ul>
        <li v-for="link in Store.headerLinks">
          <a :href="link.url">{{ link.text }}</a>
        </li>
      </ul>
    </div>

    <!-- sinistra header -->
    <div class="dx">
      <input class="prova" v-model="collegam" @keyup="changeStoreSearch(collegam), searchFilm()"
        :class="{ active: clicked }" type="text">
      <i :class="{ hidden: clicked }" @click="clicked = !clicked" id="cerca" class="fa-solid fa-magnifying-glass"></i>
      <a href="#Bambini">Bambini</a>
      <i class="fa-regular fa-bell"></i>
    </div>
  </header>
</template>


<style scoped>
.debug {
  border: 2px dashed red;
}

h1 {
  cursor: pointer;
}

header {
  background: #141414;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  color: white;
  position: fixed;
  width: 100%;
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



.prova {
  border: 2px solid #ffffff00;
  background: #ffffff00;
  width: 10px;
  height: 30px;
  border-radius: 8px;
  color: #aaa;
  text-decoration: none;
  outline: none;
  transition: 0.2s;
}

.active {
  border: 2px solid #aaa;
  background: #000;
  display: block;
  width: 500px;
}

.hidden {
  display: none;
}
</style>
