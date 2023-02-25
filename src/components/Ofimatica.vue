<script setup>
import { useFirestore, useCollection } from 'vuefire'
import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore'
import {ref} from 'vue';
import { getStorage, ref as ref2, getDownloadURL } from "firebase/storage";


const db = useFirestore();
const ofimatica = useCollection(collection(db, 'ofimatica'))

const storage = getStorage();

getDownloadURL(ref2(storage, 'excel.pdf'))
    .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        // console.log(url);
        // Or inserted into an <img> element
        document.getElementById("enlaceExcel").setAttribute("href", url); 

    })
    .catch((error) => {
        // Handle any errors
});


getDownloadURL(ref2(storage, 'office.pdf'))
    .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
    // console.log(url);
    // Or inserted into an <img> element
    document.getElementById("enlaceOffice").setAttribute("href", url); 

    })
    .catch((error) => {
    // Handle any errors
});



getDownloadURL(ref2(storage, 'word.pdf'))
    .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
    // console.log(url);
    // Or inserted into an <img> element
    document.getElementById("enlaceWord").setAttribute("href", url); 

    })
    .catch((error) => {
    // Handle any errors
});

</script>

<template>
    <h2>Ofimatica</h2>
    <table  >
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Duracion</th>
                <th>Imagen</th>
                <th>Inscripcion</th>
            </tr>
        </thead>
        <tbody v-for="cursosOfimatica in ofimatica">
            <tr>
                <td>{{ cursosOfimatica.nombre }}</td>
                <td>{{ cursosOfimatica.horas }}</td>
                <img v-bind:src="'./src/assets/'+cursosOfimatica.imagen" alt="">
                <td><button>Inscribirse</button></td>
            </tr>
        </tbody>
    </table>
    
    <h3>Pulsa en el enlace para obtener más informacion</h3>
    <a id="enlaceExcel">Contenido Excel </a>|
    <a id="enlaceOffice"> Contenido Office </a>|
    <a id="enlaceWord"> Contenido Word </a>|



</template>

<style>
table{
    text-align: center;
}
img{
    width: 80px;
}

table, th, td{
    border: 2px solid black;
}

h2{
    font-size: 30px;
    color: #ecf0f1;
    text-shadow: 2px 2px 4px #000000;
    font-family: 'Cherry Swash', cursive;
}

</style>
