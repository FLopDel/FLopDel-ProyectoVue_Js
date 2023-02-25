import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

import { firebaseApp } from './firebase.js';
import { VueFire, VueFireAuth } from 'vuefire';

import sos from './components/Sos.vue'
import programacion from './components/Programacion.vue'
import ofimatica from './components/Ofimatica.vue'
import administracion from './components/Administracion.vue'
import registro from './components/Registro.vue'
import login from './components/Login.vue'
import inicio from './components/Inicio.vue';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "./firebase.js"
import './assets/main.css'

let estaAutenticado=false;

const app = createApp(App);

const routes = [
    {
        path: '/inicio',
        component: inicio
    },
    {
        path: '/programacion',
        component: programacion
    },
    {
        path: '/ofimatica',
        component: ofimatica
    },
    {
        path: '/sos',
        component: sos
    },
    {
        path: '/administracion',
        component: administracion,
        beforeEnter: (to, from) => {
            // reject the navigation
            return estaAutenticado;
        }
    },
    {
        path: '/registro',
        component: registro
    },
    {
        path: '/login',
        component: login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});



onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      estaAutenticado=true;
    } else {
      // User is signed out
      estaAutenticado=false;
      router.push("/");
    }
});



app.use(router)
app.mount('#app')
