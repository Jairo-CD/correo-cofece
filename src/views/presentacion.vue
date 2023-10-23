<script>

</script>
<template>
    <div class="cp  ">
        <div class="container my-4 w-75">
            Bienvenidos a la sección de denuncias y reportes de la COFECE, antes de proceder con su reporte o denuncia le
            haremos un pequeño cuestionario con la finalidad de brindarle una ayuda personalizada al tratar su caso.
        </div>
        <div class="btnContinuar">
            <router-link :to="{ name: 'denuncia' }"><button class="btn">COMENZAR</button></router-link>
        </div>
    </div>
</template>
<style scoped>
.cp {
    margin-top: 30px;
    padding-left: 50px;
    padding-right: 50px;
}

.carousel.slide {
    -webkit-animation: none;
    animation: none;
}

.card-title {
    text-align: center;
    color: #2b325c;
    font-weight: bold;
    font-size: 30px;
}
.card-text {
    color: whitesmoke;
}

.btnContinuar {
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn {
    margin: 25px;
    background-color: #51d1bd;
    color: white;
    font-weight: bold;
    font-size: 30px;
}

.card {
    padding-left: 150px;
    padding-right: 200px;
    padding-bottom: 30px;
    background-color: #00a099;
    width: 100%;
    height: 265px;
}
</style>