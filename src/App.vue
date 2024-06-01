<script>
import AppHeader from './components/AppHeader.vue';
import AppBody from './components/AppBody.vue';
// import axios from 'axios'

export default {
  components: {
    AppHeader,
    AppBody
  },
  data() {
    return {

    }
  },
  methods: {

  },
  created() {

  },
  mounted() {

  }
}
</script>

<template>
  <AppHeader />
  <h2>ORIGINALI NETFLIX</h2>
  <!-- main -->
  <main>
    <AppBody />
  </main>

</template>

<style scoped>
/* main {
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
  gap: 2rem;
  padding-top: 7rem;
  align-items: start;
} */
</style>
