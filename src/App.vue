<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <img class="cofece-logo" src="./assets/Cofece-3010-2-logo1000px.png" alt="COFECE-Logo" />
    <nav class="navbar justify-content-center">
      <router-link :to="{ name: 'home' }">
        <a class="navbar-link" >HOME</a>
      </router-link>

      <a class="navbar-link" >SOBRE LA COFECE</a>
      <a class="navbar-link" >BUSQUEDA DE INFORMACION</a>
      <a class="navbar-link" >PUBLICACIONES</a>
      <a class="navbar-link" >CONSULTAS Y CONVOCATORIAS</a>
      <a class="navbar-link" >TRANSAPARENCIA</a>
      <a class="navbar-link" >CONTACTO</a>
      <a class="navbar-link" >IDIOMA</a>
    </nav>
    <div class="searchbar">
    </div>
  </header>
  <main class="main">
    <h1 style="text-align: center;font-size: 30px; padding-top: 20px; margin-bottom: 20px; color: #45545e;">Denuncia o Reporte de Practicas Anticompetitivas</h1>
    <router-view></router-view>
  </main>
  <footer>
  </footer>
</template>

<style scoped>
.cofece-logo {
  width: 32%;
  padding-left: 70px;
  padding-top: 5px;
}

.navbar {
  background-color: #f4f4f4;
  width: 100%;
  height: 7vh;
}

.navbar-link {
  text-decoration: none;
  color: #45545e;
  font-size: 15px;
  padding-right: 15px;
}

.searchbar {
  background-color: #00a099;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
.main{
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}
</style>
