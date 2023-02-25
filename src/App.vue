<script setup>
import Cabecera from './components/Cabecera.vue';
import Pie from './components/Pie.vue';
import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(() => {
  // Aquí obtén los datos
  // Cuando se hayan obtenido, establece loading en false después de 2 segundos
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>

<template>
  <header>
      <Cabecera></Cabecera>
      <div v-if="loading" class="preload"></div>

  </header>
  <main>
    <router-view></router-view>
  </main>

  <footer>
    <Pie></Pie>
  </footer>
</template>



<style scoped>
.preload {
  width: 60px;
  height: 60px;
  border: 8px solid #ffffff;
  border-top: 8px solid #db34b1;
  border-radius: 50%;
  animation: spin 0.8s ease-in-out infinite;
  margin: 0 auto;
  backdrop-filter: blur(100px);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

h1 {
  font-weight: 700;
  font-size: 2.9rem;
  top: -10px;
}

.bienvenido{
  margin-top: 100px;
}

p{
  margin: 20px;
}

#inicio{
  width: 500px;
  height: 250px;
}

.menu{
  font-size: 30px;
}
</style>
