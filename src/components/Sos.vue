<script setup>
import { useFirestore, useCollection } from 'vuefire'
import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore'
import {ref} from 'vue';
import { getStorage, ref as ref2, getDownloadURL } from "firebase/storage";

// Add a new document with a generated id.
const db = useFirestore();
const sos = useCollection(collection(db, 'sos'));

const storage = getStorage();

getDownloadURL(ref2(storage, 'ciberseguridad.pdf'))
    .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        // console.log(url);
        // Or inserted into an <img> element
        document.getElementById("enlaceCiberseguridad").setAttribute("href", url); 

    })
    .catch((error) => {
        // Handle any errors
});


getDownloadURL(ref2(storage, 'seguridad.pdf'))
    .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
    // console.log(url);
    // Or inserted into an <img> element
    document.getElementById("enlaceSeguridad").setAttribute("href", url); 

    })
    .catch((error) => {
    // Handle any errors
});



getDownloadURL(ref2(storage, 'ransomware.pdf'))
    .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
    // console.log(url);
    // Or inserted into an <img> element
    document.getElementById("enlaceRansomware").setAttribute("href", url); 

    })
    .catch((error) => {
    // Handle any errors
});
</script>

<template>
    <h2>S.O.S</h2>
    <table  >
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Duracion</th>
                <th>Imagen</th>
                <th>Inscripcion</th>
            </tr>
        </thead>
        <tbody v-for="cursosSos in sos">
            <tr>
                <td>{{ cursosSos.nombre }}</td>
                <td>{{ cursosSos.horas }}</td>
                <img v-bind:src="'./src/assets/'+cursosSos.imagen" alt="">
                <td><button>Inscribirse</button></td>
            </tr>
        </tbody>
    </table>
    
    <h3>Pulsa en el enlace para obtener más informacion</h3>
    <a id="enlaceCiberseguridad">Contenido Ciberseguridad </a>|
    <a id="enlaceSeguridad"> Contenido Seguridad </a>|
    <a id="enlaceRansomware"> Contenido Ransomware </a>|
</template>

<style>
table{
    text-align: center;
}
img{
    width: 80px;
}

h2{
    font-size: 30px;
    color: #ecf0f1;
    text-shadow: 2px 2px 4px #000000;
    font-family: 'Cherry Swash', cursive;
}
</style>