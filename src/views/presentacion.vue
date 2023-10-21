<script>

</script>
<template>
    <div class="cp  ">
        <div id="miCarrusel" class="carousel  slide" data-bs-ride="carousel" data-interval="false">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="5000">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Problema</h5>
                            <p class="card-text">Muchas veces, la ciudadanía hace uso del buzón de reporte de prácticas
                                anticompetitivas para reportar problemas a los que la Cofece no puede dar seguimiento
                                por no ser considerados problemas en materia de competencia económica.
                                Sin embargo, cuando los ciudadanos no ven una acción subsecuente como medida por el reporte
                                que iniciaron, tienden a considerar que su reporte no fue tomado en cuenta, lo que
                                desincentiva
                                a los usuarios de reportar prácticas en el futuro.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Objetivo</h5>
                            <p class="card-text">Desarrollar una solución tecnológica en la cual los usuarios, a través de
                                preguntas situacionales, puedan identificar
                                si una determinada conducta por la que están siendo afectados, es una en materia de
                                competencia
                                económica o no, y
                                qué herramientas tienen a su alcance para hacerle frente, es decir, la solución deberá ser
                                capaz
                                de dirigir al
                                usuario a una respuesta sobre si el problema que enfrentan es uno en materia de competencia,
                                de
                                qué tipo y qué
                                documentos, cursos, o herramientas tiene ya disponibles la Comisión en su página web para
                                orientarlo</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Solucion</h5>
                            <p class="card-text">Se decidió crear un filtro mediante preguntas, el cual comienza descartando
                                otras instituciones, así logramos que reportes no correspondientes a la institución sean
                                enviados, después se clasifica en Absoluta, Relativa, Ilícita, Anticompetitiva, Poder
                                Sustancial asignado una categoría de una forma más fácil.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Herraminetas Ocupadas</h5>
                            <p class="card-text">Para el desarrollo del proyecto se ocupo un framework llamado
                            <mark style="font-weight: bold; background-color: #00a099;  color: white;">VUE.js 3</mark> siendo uno de los principales frameworks que están en el mercado hoy en día,
                            gracias a la gran flexibilidad que tiene al momento de conjugar diferentes librerías como lo son
                            <mark style="font-weight: bold; background-color: #00a099; color: white;">Boostrap o Router</mark> las cuales fueron necesarias para el desarrollo. </p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#miCarrusel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#miCarrusel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="btnContinuar">
            <router-link :to="{ name: 'denuncia' }"><button class="btn btn-primary">COMENZAR</button></router-link>
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
    background-color: #00a099;
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
}</style>