<script>
import FilmCard from './FilmCard.vue'
import axios from "axios"
import Store from '../data/store.js'

export default {
    cosa: "",

    name: "AppBody",
    props: {

    },
    components: {
        FilmCard,
    },

    data() {
        return {
            poster: "",
            Store,
        }
    },
    methods: {
        getImage(parametro) {
            let finale = "http://image.tmdb.org/t/p/w500/" + parametro
            return finale
        },
        scrollRight() {
            document.getElementById('content').scrollLeft += 917;
            console.log("scrollato")
        },
        scrollLeft() {
            document.getElementById('content').scrollLeft -= 917;
            console.log("scrollato")
        },

    },
    created() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=99daff2c5e56d77db77860a3d4fd6818&language=en-US&page=1').then(result => {
            console.log(result.data.results)
            Store.films = result.data.results
        })
    },
    mounted() {
    }


}
</script>


<template>
    <div class="films-row">

        <div class="title">
            <h2>ORIGINALI NETLFIX</h2>
        </div>

        <div id="sx" class="scroll-button" @click="scrollLeft()">sinistra </div>
        <div id="dx" class="scroll-button" @click="scrollRight()">destra</div>

        <div id="content">
            <div class="film-container">
                <FilmCard v-for="elemento in Store.films" :cardImage="getImage(elemento.poster_path)" />
            </div>
        </div>
    </div>

</template>


<style scoped>
.scroll-button {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.671);
    cursor: pointer;
}


.films-row {
    margin-top: 5rem;
    padding-left: 2rem;
    position: relative;
}


#content {
    width: 100%;
    height: 600px;
    overflow: scroll;
    scrollbar-width: none;
    scroll-behavior: smooth;
}

#sx {
    position: absolute;
    left: 45px;
    top: 250px;
}

#dx {
    position: absolute;
    right: 45px;
    top: 250px;
}

.film-container {
    width: 200vw;
    display: flex;
    gap: 2px;
}
</style>
