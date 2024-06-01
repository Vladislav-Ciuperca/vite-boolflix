<script>

document.getElementById('bubu')

import axios from "axios"
import Store from '../data/store.js'

export default {
    name: "FilmCard",
    props: {
        cardImage: String,
    },

    data() {
        return {
            Store,
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

    <div>
        <img :src="cardImage" alt="">
    </div>

</template>


<style scoped>
img {
    width: 300px;
    height: 500px;
    object-fit: cover;
}

div {
    width: 900px;
    /* border: 2px dashed red; */
}
</style>
