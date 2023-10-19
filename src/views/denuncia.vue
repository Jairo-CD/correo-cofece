<script>
import PreguntaComponent from './../components/PreguntaComponent.vue';

export default {
    name: "denuncia",
    props: {},
    methods: {
        setValues(obj) {
            console.log(this.state)

            this.state = obj;
        },
        verificarInstitucion(){
            if(this.state.institucion === 'OTRA' || this.state.institucion === 'COFECE'){
                this.state.mostrar = 'B';
            }else if(this.state.institucion === ''){
                alert('!Seleccione una opción!');
            }else{
                alert('Aqui no manito');
            }
        }
    },
    components: {
        PreguntaComponent
    },
    data() {
        return {
            state: {
                repuesto: 0,
                pAbsoluta: 0,
                pRelativa: 0,
                pIlicita: 0,
                pAnticom: 0,
                pPoderSus: 0,
                mostrar: 'A',
                institucion: ''
            },
            keyVal:0
        };
    }
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

        {{ this.state.pAbsoluta }}
        {{ this.state.pRelativa }}
        {{ this.state.pIlicita }}
        {{ this.state.pAnticom }}
        {{ this.state.pPoderSus }}
        {{ this.state.mostrar }}

    </div>

    <div class="casos" v-if="this.state.mostrar === 'A'">
        <div class="card ">
            <div class="card-body">
                <h5 class="card-title">¿Cual de los siguientes casos descibre mejor tu situacion?</h5>
                <div class="p">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="COFECE" v-model="this.state.institucion">
                        <label class="form-check-label" for="flexRadioDefault1">
                            COFECE
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="IFT" v-model="this.state.institucion">
                        <label class="form-check-label" for="flexRadioDefault1">
                            IFT
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="COFEPRIS" v-model="this.state.institucion">
                        <label class="form-check-label" for="flexRadioDefault1">
                            COFEPRIS
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="PROFECO" v-model="this.state.institucion">
                        <label class="form-check-label" for="flexRadioDefault1">
                            PROFECO
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="CONDUSEF" v-model="this.state.institucion">
                        <label class="form-check-label" for="flexRadioDefault1">
                            CONDUSEF
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            value="OTRA" v-model="this.state.institucion">
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
                        <button @click="() => {verificarInstitucion()}" class="btn btn-primary">SIGUIENTE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="casos" v-if="this.state.mostrar === 'B'">
        <pregunta-component :sigOp="1"
        title="¿Existe un contrato, convenio o areglo entre uno o mas comercios pertenecientes a el o los denunciantes?"
        v-if="this.state" :dataArr="this.state" nextQuest="C" toAdd="pAbsoluta,pAnticom" toSubs="pAnticom" @getValues="setValues" />
    </div>

    <div class="casos" v-if="this.state.mostrar === 'C'">
        <pregunta-component :sigOp="1"
        title="¿Se ha obligado a algún comerciante a comprar, adquirir, vender o proporcionar otro bien o servicio en conjunto con otro producto?"
        v-if="this.state" :dataArr="this.state" nextQuest="D" toAdd="pRelativa,pAnticom" toSubs="pAnticom" @getValues="setValues" />
    </div>

    <div class="casos" v-if="this.state.mostrar === 'D'">
        <pregunta-component :sigOp="-1"
        title="¿El denunciado ha presentado tecnología que modifique los bienes o servicios?"
        v-if="this.state" :dataArr="this.state" nextQuest="E" toAdd="pAnticom" toSubs="" @getValues="setValues" />
    </div>

    <div class="casos" v-if="this.state.mostrar === 'E'">
        <pregunta-component :sigOp="1"
        title="¿Él o los denunciados fijaron, elevaron o manipularon el precio de venta o compra de bienes o servicios?"
        v-if="this.state" :dataArr="this.state" nextQuest="F" toAdd="pAbsoluta,pAnticom" toSubs="pAnticom" @getValues="setValues" />
    </div>
    
    <div class="casos" v-if="this.state.mostrar === 'F'">
        <pregunta-component :sigOp="-1"
        title="¿Ha notado un incremento en la cantidad de producción de bienes o servicios por parte del denunciado?"
        v-if="this.state" :dataArr="this.state" nextQuest="G" toAdd="pAnticom" toSubs="" @getValues="setValues" />
    </div>
    
    <div class="casos" v-if="this.state.mostrar === 'G'">
        <pregunta-component :sigOp="-1"
        title="Los bienes o servicios presentados por el denunciado, ¿son novedosos?" 
        v-if="this.state" :dataArr="this.state" nextQuest="H" toAdd="pAnticom" toSubs="" @getValues="setValues" />
    </div>
    
    <div class="casos" v-if="this.state.mostrar === 'H'">
        <pregunta-component :sigOp="1"
        title="¿El o los comercios afectados fueron reprendidos por el denunciado al rehusarse a vender, comercializar o adquirir bienes o servicios de manera exclusiva?"
        v-if="this.state" :dataArr="this.state" nextQuest="I" toAdd="pRelativa,pAnticom" toSubs="pAnticom" @getValues="setValues" />
    </div>
    
    <div class="casos" v-if="this.state.mostrar === 'I'">
        <pregunta-component :sigOp="1"
        title="¿Las acciones del denunciado, ¿han impedido que otros interesados ingresen en el mercado actual??"
        v-if="this.state" :dataArr="this.state" nextQuest="J" toAdd="pIlicita,pAnticom" toSubs="pAnticom" @getValues="setValues" />
    </div>

    <div class="casos" v-if="this.state.mostrar === 'J'">
        <pregunta-component :sigOp="-1"
        title="¿Han bajado los precios por un cambio en los métodos o técnicas de producción impuestos por el denunciado?"
        v-if="this.state" :dataArr="this.state" nextQuest="K" toAdd="pAnticom" toSubs="" @getValues="setValues" />
    </div>

    <div class="casos" v-if="this.state.mostrar === 'K'">
        <pregunta-component :sigOp="1"
        title="¿Las acciones del denunciado, ¿han influido en el cierre de uno o varios comercios del mismo mercado?"
        v-if="this.state" :dataArr="this.state" nextQuest="L" toAdd="pIlicita,pAnticom" toSubs="pAnticom" @getValues="setValues" />
    </div>

    <div class="casos" v-if="this.state.mostrar === 'L'">
        {{ this.state.pAbsoluta }}
        {{ this.state.pRelativa }}
        {{ this.state.pIlicita }}
        {{ this.state.pAnticom }}
        {{ this.state.pPoderSus }}
        {{ this.state.mostrar }}
    </div>
</template>

<style scoped>
.navsecc {
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
}
</style>