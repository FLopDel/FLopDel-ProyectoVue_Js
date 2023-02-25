<script setup>
import { useFirestore, useCollection } from 'vuefire'
import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore'
import {ref} from 'vue';
import { getStorage, ref as ref2, getDownloadURL } from "firebase/storage";

// Add a new document with a generated id.
const db = useFirestore();
const programacion = useCollection(collection(db, 'programacion'));


const storage = getStorage();

getDownloadURL(ref2(storage, 'php.pdf'))
    .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        // console.log(url);
        // Or inserted into an <img> element
        document.getElementById("enlacePhp").setAttribute("href", url); 

    })
    .catch((error) => {
        // Handle any errors
});


getDownloadURL(ref2(storage, 'python.pdf'))
    .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
    // console.log(url);
    // Or inserted into an <img> element
    document.getElementById("enlacePython").setAttribute("href", url); 

    })
    .catch((error) => {
    // Handle any errors
});



getDownloadURL(ref2(storage, 'javascript.pdf'))
    .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
    // console.log(url);
    // Or inserted into an <img> element
    document.getElementById("enlaceJavaScript").setAttribute("href", url); 

    })
    .catch((error) => {
    // Handle any errors
});
</script>


<template>
    <h2>Programacion</h2>
    <table  >
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Duracion</th>
                <th>Imagen</th>
                <th>Inscripcion</th>
            </tr>
        </thead>
        <tbody v-for="cursosProgramacion in programacion">
            <tr>
                <td>{{ cursosProgramacion.nombre }}</td>
                <td>{{ cursosProgramacion.horas }}</td>
                <img v-bind:src="'./src/assets/'+cursosProgramacion.imagen" alt="">
                <td><button>Inscribirse</button></td>
            </tr>
        </tbody>
    </table>
    
    <h3>Pulsa en el enlace para obtener más informacion</h3>
    <a id="enlacePhp">Contenido PHP </a>|
    <a id="enlacePython"> Contenido Python </a>|
    <a id="enlaceJavaScript"> Contenido JavaScript </a>|
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

