<script setup>
import { auth } from "../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import Administracion from "./Administracion.vue";
import {ref} from 'vue';

let usuarioLogeado = ref('');

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      usuarioLogeado.value=user.email;
    } else {
      // User is signed out
    }
});

function cerrarSesion(){
    signOut(auth).then(() => {
      router.push("/inicio");
      usuarioLogeado == '';
    }).catch((error) => {
    // An error happened.
    });
}

</script>

<template>
    <header>
      <h1>Aprende a Programar</h1>
  
      <nav class="menu">
        <router-link to="/inicio"> Inicio |</router-link> 
        <router-link to="/ofimatica"> Ofimatica |</router-link> 
        <router-link to="/programacion"> Programacion |</router-link> 
        <router-link to="/sos"> Sos |</router-link>
        <router-link to="/administracion" v-if="usuarioLogeado !== ''">Administracion |</router-link> 
        <router-link to="/registro" v-if="usuarioLogeado === ''" > Registro |</router-link> 
        <router-link to="/login" v-if="usuarioLogeado === ''" > Login |</router-link> 
        <button v-if="usuarioLogeado !== ''" @click=cerrarSesion() >Logout</button>

      </nav>
    </header>

</template>

<style>


h1 {
		text-align: center;
		font-size: 30px;
		color: #ecf0f1;
		text-shadow: 2px 2px 4px #000000;
		font-family: 'Cherry Swash', cursive;
	}
  
  #inicio{
    width: 500px;
    display: block;
    margin: auto;
  }

  .menu{
    font-size: 30px;
  }


</style>