<script setup>

</script>

<template>
    <div class="row">
        <div class="col-sm-6">
            <div class="card h-100">
                <h5 class="card-header">Denuncia Prácticas Anticompetitivas</h5>
                <div class="card-body">
                    <p class="card-text">Cualquier persona podrá presentar una denuncia por, ante la Autoridad
                        Investigadora, estas no podrán ser anónimas.</p>
                    <ul>
                        <li>Prácticas monopólicas absolutas</li>
                        <li>Prácticas monopólicas relativas</li>
                        <li>Concentraciones ilícitas</li>
                    </ul>
                    <p class="card-text " style="font-weight: bold;">El escrito de denuncia debe cumplir con todos
                        los
                        requisitos previstos en el artículo 68 de la LFCE para ser admitida.</p>

                </div>
                <div class="btndiv">
                    <router-link :to="{ name: 'denuncia' }"><button class="btn btn-primary">DENUNCIA</button></router-link>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card h-100">
                <h5 class="card-header">Reporta Prácticas Anticompetitivas</h5>
                <div class="card-body">
                    <p class="card-text">Cualquier persona puede reportar ante la COFECE y de manera anónima (si así
                        lo
                        desea), segura y confidencial, hechos de los que tenga conocimiento y considere que
                        constituyen
                        alguna de las siguientes prácticas anticompetitivas.</p>
                    <ul>
                        <li>Prácticas monopólicas absolutas</li>
                        <li>Prácticas monopólicas relativas</li>
                        <li>Concentraciones ilícitas</li>
                    </ul>
                    <p class="card-text">Los reportes, a diferencia de las denuncias, no tienen que cumplir con
                        ningún
                        requisito específico para su presentación.</p>
                </div>
                <div class="btndiv">
                    <router-link :to="{ name: 'reporte' }"><button class="btn btn-primary">REPORTE</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn {
    width: 250px;
}
.btndiv {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.row {
    padding-left: 50px;
    padding-right: 50px;
}

.card-body {
    font-size: 20px;
}
</style>