<script setup>

</script>

<template>
    <div class="padre container-fluid">
            <h5 class="titulo">Lo sentimos mucho </h5>
            <p class="text">Parece que los hechos no muestran que exista una práctica anticompetitiva... </p>
            <router-link :to="{ name: 'home' }"><button class="btn btn-primary">Regresar</button></router-link>
    </div>
</template>
<style scoped >
.padre{
    margin-top: 30px;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
}
.titulo{
    font-size: 30px;
    font-weight: bold;
    margin: 20px;
}

.btn{
    margin: 10px;
}

</style>