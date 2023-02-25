<script setup>
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { auth } from '../firebase'
import { ref } from 'vue';
let usuario = ref("");
let password = ref("");

    function loginUsuario(){
        signInWithEmailAndPassword(auth, usuario.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    function loginGoogle(){
        signInWithPopup(auth, new GoogleAuthProvider())
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
</script>

<template>
    

        <p>
            <label for="email">Email: </label>
            <input type="text" v-model="usuario">
        </p>
        <p>
            <label for="password">Password: </label>
            <input type="password" v-model="password">
        </p>
        <p><button @click="loginUsuario">login</button></p>
        <p><button @click="loginGoogle">ACCEDER CON GOOGLE</button></p>
</template>

<style>

</style>
