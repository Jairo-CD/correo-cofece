<script setup>

</script>

<template>
    <div class="padre container-fluid">
        <h5 class="titulo">Lo sentimos mucho </h5>
        <p class="text">Lo que tratas de denunciar puede ser llevado por otra institución... </p>
        <p class="text">Si requiere mas informacion puede consultar los siguientes documentos:</p>
        <div class="containe ralign-items-center">
            <div class="row justify-content-md-center">
                <div class="col-md-10 offset-md-3">
                    <p class="text-start">
                        <a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFCE_200521.pdf">
                            <span class="material-icons" style="margin-right: 10px;">picture_as_pdf</span>
                            Ley Federal De Competencia Económica
                        </a>
                    </p>
                </div>
                <div class="col-md-10 offset-md-3">
                    <p class="text-start">
                        <a href="https://www.cofece.mx/wp-content/uploads/2017/12/guia-0022015_inicio_investigaciones.pdf">
                            <span class="material-icons" style="margin-right: 10px;">picture_as_pdf</span>
                            Para El Inicio De Investigaciones Por Prácticas Monopólicas
                        </a>
                    </p>
                </div>
                <div class="col-md-10 offset-md-3">
                    <p class="text-start">
                        <a href="https://cofece.mx/wp-content/uploads/2017/12/guia-0062015_pma.pdf">
                            <span class="material-icons" style="margin-right: 10px;">picture_as_pdf</span>
                            Procedimiento De Investigación Por Prácticas Monopólicas Absolutas
                        </a>
                    </p>
                </div>
                <div class="col-md-10 offset-md-3">
                    <p class="text-start">
                        <a href="https://www.cofece.mx/wp-content/uploads/2017/12/guia-0012015_pmr.pdf">
                            <span class="material-icons" style="margin-right: 10px;">picture_as_pdf</span>
                            El Procedimiento De Investigación Por Prácticas Monopólicas Relativas o Concentraciones Ilícitas
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <router-link :to="{ name: 'home' }"><button class="btn"
                style="background-color: #51d1bd; color: white;">Regresar</button></router-link>
    </div>
</template>
<style scoped >
.padre {
    margin-top: 30px;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
}

.titulo {
    font-size: 30px;
    font-weight: bold;
    margin: 20px;
}

.btn {
    margin: 10px;
}
</style>