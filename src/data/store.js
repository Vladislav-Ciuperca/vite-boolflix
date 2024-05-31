import { reactive } from 'vue'

const informazioni = {
    nome: "fims :",
    films: "",
    headerLinks: [
        { text: "Home", url: "#Home" },
        { text: "Serie TV", url: "#Serie TV" },
        { text: "Nuovi e popolari", url: "Nuovi e popolari" },
        { text: "La mia lista", url: "#La mia lista" },
        { text: "Sfoglia per lingua", url: "#Sfoglia per lingua" },
    ]
}



const iMieiDati = reactive(informazioni);





export default iMieiDati 