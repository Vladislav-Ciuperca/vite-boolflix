<script>
import axios from "axios"
import Store from '../data/store.js'

export default {
    name: "FilmCard",

    data() {
        return {
            Store,
            options: {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/popular',
                params: { language: 'en-US', page: '1' },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWRhZmYyYzVlNTZkNzdkYjc3ODYwYTNkNGZkNjgxOCIsInN1YiI6IjY2NTg4NTg0YzNlNzc2ZmE1MzJkMmFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eyeLv0LBZRYyJXAyjbYejSuqxvs6xiHWLCFK7qd0wd8'
                }
            },

        }
    },
    methods: {
        getImage(parametro) {
            let finale = "http://image.tmdb.org/t/p/w500/" + parametro
            return finale
        }
    },
    created() {
        axios
            .request(this.options)
            .then(response => {
                console.log(response.data.results);
                Store.films = response.data.results
            })

    },
    mounted() {
    }


}
</script>


<template>

    <div v-for="elemento in Store.films">
        <img :src="getImage(elemento.poster_path)" alt="">
    </div>

</template>


<style scoped></style>
