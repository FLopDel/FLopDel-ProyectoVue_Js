<script setup>
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase"
import {ref} from "vue";
import { useFirestore, useCollection } from 'vuefire'
import { collection, updateDoc, addDoc, doc, deleteDoc, setDoc } from 'firebase/firestore'
import { getStorage, ref as ref2, uploadBytes, getDownloadURL } from "firebase/storage";

let nombreUsuario=ref("")
let file=ref("")



const db = useFirestore();
const CursosSos = useCollection(collection(db, 'sos'));
const CursosOfimatica = useCollection(collection(db, 'ofimatica'));
const CursosProgramacion = useCollection(collection(db, 'programacion'));

let nombreCurso = ref("");
let horasCurso = ref("");

let nombreCurso2 = ref("");
let horasCurso2 = ref("");

let nombreCurso3 = ref("");
let horasCurso3 = ref("");

function borraCurso(id){
    deleteDoc(doc(db, "ofimatica", id));
    deleteDoc(doc(db, "sos", id));
    deleteDoc(doc(db, "programacion", id));
};

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      nombreUsuario.value=user.email
    }
});

function subirArchivo(){
    const storage = getStorage();
    const storageRef = ref2(storage, file.value.files[0].name);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file.value.files[0]).then((snapshot) => {
    console.log('Uploaded a blob or file!');
    getDownloadURL(storageRef)
        .then((url) => {
            console.log(url);
        });
    });
}

function nuevoCursoProgramacion(){
    const docRef = addDoc(collection(db, "programacion"), {
        nombre: nombreCurso.value,
        horas: horasCurso.value
    });
};

function nuevoCursoOfimatica(){
    const docRef = addDoc(collection(db, "ofimatica"), {
        nombre: nombreCurso2.value,
        horas: horasCurso2.value
    });
};

function nuevoCursoSos(){
    const docRef = addDoc(collection(db, "sos"), {
        nombre: nombreCurso3.value,
        horas: horasCurso3.value
    });
};




</script>

<template>
    <h2>Administracion </h2>
    <p>Sesión: {{ nombreUsuario }}</p>

    <p id="importante"> ¡¡ Para borrar un curso pulse sobre él !!</p>
    <table border="1">
        <thead>
            <th>Cursos sobre Sos</th>
        </thead>
        <tbody v-for="programaSos in CursosSos" @click="borraCurso(programaSos.id)" :key="programaSos.id">
            <td>{{ programaSos.nombre }}</td>
        </tbody>
    </table>
    
    <table border="1">
        <thead>
            <th>Cursos sobre Ofimatica</th>
        </thead>
        <tbody v-for="programaOfimatica in CursosOfimatica" @click="borraCurso(programaOfimatica.id)" :key="programaOfimatica.id">
            <td>{{ programaOfimatica.nombre }}</td>
        </tbody>
    </table>

    <table border="1">
        <thead>
            <th>Cursos sobre programacion</th>
        </thead>
        <tbody v-for="programaProgramacion in CursosProgramacion" @click="borraCurso(programaProgramacion.id)" :key="programaProgramacion.id">
            <td>{{ programaProgramacion.nombre }}</td>
        </tbody>
    </table>
    <br>

      <div class="ofimatica">
        <h2>Subir curso de Ofimatica</h2>
            <label for="titulo">Nombre</label><br>
            <input type="text" v-model="nombreCurso2" placeholder="Escribe algo...">
            <br><br>
            <label for="horas">Horas</label><br>
            <input type="text" v-model="horasCurso2" placeholder="Escribe algo...">
            <br><br>
            <button @click="nuevoCursoOfimatica">Añadir Curso</button>
      </div>

      <div class="sos">
        <h2>Subir curso de Sos</h2>
            <label for="titulo">Nombre</label><br>
            <input type="text" v-model="nombreCurso3" placeholder="Escribe algo...">
            <br><br>
            <label for="horas">Horas</label><br>
            <input type="text" v-model="horasCurso3" placeholder="Escribe algo...">
            <br><br>
            <button @click="nuevoCursoSos">Añadir Curso</button>
      </div>
      
      <div class="programacion">
        <h2>Subir curso de Programacion</h2>
            <label for="titulo">Nombre</label><br>
            <input type="text" v-model="nombreCurso" placeholder="Escribe algo...">
            <br><br>
            <label for="horas">Horas</label><br>
            <input type="text" v-model="horasCurso" placeholder="Escribe algo...">
            <br><br>
            <button @click="nuevoCursoProgramacion">Añadir Curso</button>
      </div>

  <h2>Subir archivo</h2>
  <p><input type="file" name="" ref="file" @change="subirArchivo" ></p>

  <hr>



    
</template>

<style>
#importante{
    color: red;
}

h2{
    font-size: 30px;
    color: #ecf0f1;
    text-shadow: 2px 2px 4px #000000;
    font-family: 'Cherry Swash', cursive;
}
table{
    margin: 40px;
    width: 500px;
}

.nuevosCursos{
    display: flex;
}
</style>

