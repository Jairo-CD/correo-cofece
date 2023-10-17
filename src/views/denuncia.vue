<script setup>
import { ref } from 'vue'
const repuesto = ref(0)
const pAbsoluta = ref(0)
const pRelativa = ref(0)
const pIlicita = ref(0)
const pAnticom = ref(0)
const pPoderSus = ref(0)
const mostrar = ref('A')
const tipo = ref('')

function verificar(institucion) {
    return institucion === 'OTRA' ? 'B' : 'B1';
}
</script>

<template>
    <div class="navsecc">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link :to="{ name: 'home' }">Inicio</router-link></li>
                <li class="breadcrumb-item"><router-link :to="{ name: 'denuncia' }">Denuncia</router-link></li>
            </ol>
        </nav>
        {{ pAbsoluta }}
        {{ pRelativa }}
        {{ pIlicita }}
        {{ pAnticom }}
        {{ pPoderSus }}
    </div>

    <div class="casos" v-if="mostrar === 'A'">
        <div class="card ">
            <div class="card-body">
                <h5 class="card-title">¿Cual de los siguientes casos descibre mejor tu cituacion?</h5>
                <div class="p">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="COFECE" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            COFECE
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="IFT" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            IFT
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="COFEPRIS" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            COFEPRIS
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="PROFECO" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            PROFECO
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="CONDUSEF" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            CONDUSEF
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="OTRA" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            OTRA
                        </label>
                    </div>
                </div>
                <div class="gbtn">
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <button @click="() => { mostrar = 'A'; pAbsoluta = 0; pAnticom = 0 }"
                            class="btn btn-primary">ANTERIOR</button>
                    </div>
                    <div class="btn-group me-2" role="group" aria-label="Second group">
                        <button @click="() => { mostrar = verificar(tipo, mostrar); pAbsoluta = 0; pAnticom = 0 }" class="btn btn-primary">SIGUIENTE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="casos" v-if="mostrar === 'B'">
        <div class="card ">
            <div class="card-body">
                B<h5 class="card-title">¿Existe un contrato, convenio o aregglo entre uno o mas comercios pertenecientes a el
                    o los denunciantes?</h5>
                <div class="p">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="Si" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Si
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="No" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            No
                        </label>
                    </div>
                </div>
                <div class="gbtn">
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <button @click="() => { mostrar = 'A'; pAbsoluta = 0; pAnticom = 0 }"
                            class="btn btn-primary">ANTERIOR</button>
                    </div>
                    <div class="btn-group me-2" role="group" aria-label="Second group">
                        <button
                            @click="() => { tipo == 'Si' ? (pAbsoluta++, pAnticom++) : pAnticom--; mostrar = 'C' }"
                            class="btn btn-primary">
                            SIGUIENTE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="casos" v-if="mostrar === 'B1'">
        <div class="card ">
            <div class="card-body">
                B<h5 class="card-title">Probablemente necesites otra institucion</h5>
                
                <div class="gbtn">
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <button @click="() => { mostrar = 'A'; pAbsoluta = 0; pAnticom = 0 }"
                            class="btn btn-primary">ANTERIOR</button>
                    </div>
                    <div class="btn-group me-2" role="group" aria-label="Second group">
                        <button
                            @click="() => { tipo == 'Si' ? (pAbsoluta++, pAnticom++) : pAnticom--; mostrar = 'C' }"
                            class="btn btn-primary">
                            SIGUIENTE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="casos" v-if="mostrar === 'C'">
        <div class="card ">
            <div class="card-body">
               C <h5 class="card-title">¿Se ha obligado a algun comerciante a comprar, adquirir, vender o proporcionar otro bien o servicio en conjunto con otro producto?</h5>
                <div class="p">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="Si" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Si
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="No" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            No
                        </label>
                    </div>
                </div>
                <div class="gbtn">
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <button @click="() => { mostrar = 'A' }" class="btn btn-primary">ANTERIOR</button>
                    </div>
                    <div class="btn-group me-2" role="group" aria-label="Second group">
                        <button
                            @click="() => { tipo === 'Si' ? (pRelativa++, pAnticom++) : (pAnticom--); mostrar = 'D' }"
                            class="btn btn-primary">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="casos" v-if="mostrar === 'D'">
        <div class="card ">
            <div class="card-body">
                D<h5 class="card-title">¿El denunciado ha presentado tecnología que modifique o mejore la calidad de los
                    bienes o servicios?</h5>
                <div class="p">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="Si" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Si
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="No" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            No
                        </label>
                    </div>
                </div>
                <div class="gbtn">
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <button @click="() => { mostrar = 'A' }" class="btn btn-primary">ANTERIOR</button>
                    </div>
                    <div class="btn-group me-2" role="group" aria-label="Second group">
                        <button @click="() => { tipo === 'Si' ? (pAnticom--) : (repuesto--); mostrar = 'E' }"
                            class="btn btn-primary">

                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="casos" v-if="mostrar === 'E'">
        <div class="card ">
            <div class="card-body">
                E<h5 class="card-title">¿El o los denunciados fijaron, elevaron o manipularon el precio de ventas o compra de
                    bienes o servicios?</h5>
                <div class="p">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="Si" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Si
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="No" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            No
                        </label>
                    </div>
                </div>
                {{ tipo }}
                <div class="gbtn">
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <button @click="() => { mostrar = 'A' }" class="btn btn-primary">ANTERIOR</button>
                    </div>
                    <div class="btn-group me-2" role="group" aria-label="Second group">
                        <button
                            @click="() => { tipo === 'Si' ? (pAbsoluta++, pAnticom++) : (pAnticom--); mostrar = 'F' }"
                            class="btn btn-primary">
                            <p v-if="tipo == 'SI'"></p>SIGUIENTE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="casos" v-if="mostrar === 'F'">
        <div class="card ">
            <div class="card-body">
                F<h5 class="card-title">¿Ha notado un incremento en la cantidad de producion de bienes o servicios por las
                    acciones del denunciante?</h5>
                <div class="p">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="Si" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Si
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="No" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            No
                        </label>
                    </div>
                </div>
                <div class="gbtn">
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <button @click="() => { mostrar = 'A' }" class="btn btn-primary">ANTERIOR</button>
                    </div>
                    <div class="btn-group me-2" role="group" aria-label="Second group">
                        <button @click="() => { tipo === 'Si' ? (pAnticom--) : (repuesto--); mostrar = 'G' }"
                            class="btn btn-primary">
                            <p v-if="tipo == 'SI'"></p>SIGUIENTE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="casos" v-if="mostrar === 'G'">
        <div class="card ">
            <div class="card-body">
                G<h5 class="card-title">Los bienes o servicios presentados por el denunciad, ¿son novedosos?</h5>
                <div class="p">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="Si" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Si
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="No" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            No
                        </label>
                    </div>
                </div>
                <div class="gbtn">
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <button @click="() => { mostrar = 'A' }" class="btn btn-primary">ANTERIOR</button>
                    </div>
                    <div class="btn-group me-2" role="group" aria-label="Second group">
                        <button @click="() => { tipo === 'Si' ? (pAnticom--) : (repuesto--); mostrar = 'H' }"
                            class="btn btn-primary">
                            <p v-if="tipo == 'SI'"></p>SIGUIENTE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="casos" v-if="mostrar === 'H'">
        <div class="card ">
            <div class="card-body">
                H<h5 class="card-title">¿El o los comercios afectados fueron reprendidos por el denunciado al rehusarse a vender, comercializar o
                adquirir bienes o servicios de manera exclusiva?</h5>
                <div class="p">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="Si" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Si
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="No" v-model="tipo">
                        <label class="form-check-label" for="flexRadioDefault1">
                        No
                    </label>
                </div>
            </div>
            <div class="gbtn">
                <div class="btn-group me-2" role="group" aria-label="First group">
                    <button @click="() => {mostrar = 'A'}" class="btn btn-primary">ANTERIOR</button>
                </div>
                <div class="btn-group me-2" role="group" aria-label="Second group">
                    <button
                        @click="() => { tipo === 'Si' ? (pRelativa++,pAnticom++ ) : (pAnticom-- ); mostrar = 'I'}"
                        class="btn btn-primary">
                        <p v-if="tipo =='SI'"></p>SIGUIENTE
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="casos" v-if="mostrar === 'I'">
    {{'pAbsoluta  '+ pAbsoluta }}
    {{ 'pRelativa  '+pRelativa }}
    {{ 'pIlicita  '+pIlicita }}
    {{ 'pAnticom  '+pAnticom }}
    {{ 'pPoderSus  '+pPoderSus }}
</div></template>

<style scoped>.navsecc {
    padding-left: 15px;
}

.casos {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.card {
    display: flex;
    justify-content: center;
    align-items: center;
}

.gbtn {
    padding: 10px;
}</style>