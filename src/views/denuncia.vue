<script>
import PreguntaComponent from './../components/PreguntaComponent.vue';

export default {
    name: "denuncia",
    props: {},
    methods: {
        setValues(obj) {
            if(obj.mostrar === 'L' && obj.pAnticom < 3){
                console.log('No es anticompetitiva');

                this.$router.push("/");
            }
            if(obj.mostrar === 'N' && obj.pPoderSus === 2){
                console.log('Es relativa');

                this.$router.push("/");
            }
            if(obj.mostrar === 'S'){
                if(obj.pRelativa > obj.pAbsoluta){
                    console.log('Es relativa');

                    this.$router.push("/");
                }else if(obj.pAbsoluta > obj.pRelativa){
                    console.log('Es absoluta');

                    this.$router.push("/");
                }else if(obj.pPoderSus > 0){
                    console.log('Es relativa');

                    this.$router.push("/");
                }else{
                    console.log('Es absoluta');

                    this.$router.push("/");
                }
            }

            this.state = obj;
        },
        setPrev(obj){
            this.state = obj.prevState;
        },
        verificarInstitucion(){
            if(this.state.institucion === 'OTRA' || this.state.institucion === 'COFECE'){
                this.state.mostrar = 'B';
            }else if(this.state.institucion === ''){
                alert('!Seleccione una opción!');
            }else{
                this.$router.push("/");
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
                institucion: '',
                prevState:{
                    repuesto: 0,
                    pAbsoluta: 0,
                    pRelativa: 0,
                    pIlicita: 0,
                    pAnticom: 0,
                    pPoderSus: 0,
                    mostrar: 'A'
                }
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
                        <button @click="() => { this.$router.push('/'); }"
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
        <pregunta-component :sigOp="1" @getPrev="setPrev"
        title="¿Existe un contrato, convenio o areglo entre uno o mas comercios pertenecientes a el o los denunciantes?"
        v-if="this.state" :dataArr="this.state" nextQuest="C" toAdd="pAbsoluta,pAnticom" toSubs="pAnticom" @getValues="setValues" />
    </div>

    <div class="casos" v-if="this.state.mostrar === 'C'">
        <pregunta-component :sigOp="1" @getPrev="setPrev"
        title="¿Se ha obligado a algún comerciante a comprar, adquirir, vender o proporcionar otro bien o servicio en conjunto con otro producto?"
        v-if="this.state" :dataArr="this.state" nextQuest="D" toAdd="pRelativa,pAnticom" toSubs="pAnticom" @getValues="setValues" />
    </div>

    <div class="casos" v-if="this.state.mostrar === 'D'">
        <pregunta-component :sigOp="-1" @getPrev="setPrev"
        title="¿El denunciado ha presentado tecnología que modifique los bienes o servicios?"
        v-if="this.state" :dataArr="this.state" nextQuest="E" toAdd="pAnticom" toSubs="" @getValues="setValues" />
    </div>

    <div class="casos" v-if="this.state.mostrar === 'E'">
        <pregunta-component :sigOp="1" @getPrev="setPrev"
        title="¿Él o los denunciados fijaron, elevaron o manipularon el precio de venta o compra de bienes o servicios?"
        v-if="this.state" :dataArr="this.state" nextQuest="F" toAdd="pAbsoluta,pAnticom" toSubs="pAnticom" @getValues="setValues" />
    </div>
    
    <div class="casos" v-if="this.state.mostrar === 'F'">
        <pregunta-component :sigOp="-1" @getPrev="setPrev"
        title="¿Ha notado un incremento en la cantidad de producción de bienes o servicios por parte del denunciado?"
        v-if="this.state" :dataArr="this.state" nextQuest="G" toAdd="pAnticom" toSubs="" @getValues="setValues" />
    </div>
    
    <div class="casos" v-if="this.state.mostrar === 'G'">
        <pregunta-component :sigOp="-1" @getPrev="setPrev"
        title="Los bienes o servicios presentados por el denunciado, ¿son novedosos?" 
        v-if="this.state" :dataArr="this.state" nextQuest="H" toAdd="pAnticom" toSubs="" @getValues="setValues" />
    </div>
    
    <div class="casos" v-if="this.state.mostrar === 'H'">
        <pregunta-component :sigOp="1" @getPrev="setPrev"
        title="¿El o los comercios afectados fueron reprendidos por el denunciado al rehusarse a vender, comercializar o adquirir bienes o servicios de manera exclusiva?"
        v-if="this.state" :dataArr="this.state" nextQuest="I" toAdd="pRelativa,pAnticom" toSubs="pAnticom" @getValues="setValues" />
    </div>
    
    <div class="casos" v-if="this.state.mostrar === 'I'">
        <pregunta-component :sigOp="1" @getPrev="setPrev"
        title="Las acciones del denunciado, ¿han impedido que otros interesados ingresen en el mercado actual?"
        v-if="this.state" :dataArr="this.state" nextQuest="J" toAdd="pIlicita,pAnticom" toSubs="pAnticom" @getValues="setValues" />
    </div>

    <div class="casos" v-if="this.state.mostrar === 'J'">
        <pregunta-component :sigOp="-1" @getPrev="setPrev"
        title="¿Han bajado los precios por un cambio en los métodos o técnicas de producción impuestos por el denunciado?"
        v-if="this.state" :dataArr="this.state" nextQuest="K" toAdd="pAnticom" toSubs="" @getValues="setValues" />
    </div>

    <div class="casos" v-if="this.state.mostrar === 'K'">
        <pregunta-component :sigOp="1" @getPrev="setPrev"
        title="¿Las acciones del denunciado, ¿han influido en el cierre de uno o varios comercios del mismo mercado?"
        v-if="this.state" :dataArr="this.state" nextQuest="L" toAdd="pIlicita,pAnticom" toSubs="pAnticom" @getValues="setValues" />
    </div>

    <!-- PODER SUSTANCIAL -->
    <div class="casos" v-if="this.state.mostrar === 'L'">
        <pregunta-component :sigOp="1" @getPrev="setPrev"
        title="¿El o los denunciados tiene el poder de fijar precios o restringir el abasto de los afectados sin que puedan, ahora o en un futuro, contrarrestar dicho poder?"
        v-if="this.state" :dataArr="this.state" nextQuest="M" toAdd="pPoderSus" toSubs="" @getValues="setValues" />
    </div>

    <div class="casos" v-if="this.state.mostrar === 'M'">
        <pregunta-component :sigOp="1" @getPrev="setPrev"
        title="¿Los afectados u otros comercios tienen otra vía de insumos ajena al o los denunciados?"
        v-if="this.state" :dataArr="this.state" nextQuest="N" toAdd="pPoderSus" toSubs="" @getValues="setValues" />
    </div>


    <!-- CLASIFICACION -->
    <div class="casos" v-if="this.state.mostrar === 'N'">
        <pregunta-component :sigOp="1" @getPrev="setPrev"
        title="La fabricación de ciertos bienes o servicios, ¿fue limitada a una temporada o fecha específica por el denunciado?"
        v-if="this.state" :dataArr="this.state" nextQuest="O" toAdd="pRelativa" toSubs="" @getValues="setValues" />
    </div>

    <div class="casos" v-if="this.state.mostrar === 'O'">
        <pregunta-component :sigOp="1" @getPrev="setPrev"
        title="¿Existe prueba de que los denunciados realizaron un contrato, convenio o arreglo y que además sus comercios pertenecen al mismo público objetivo?"
        v-if="this.state" :dataArr="this.state" nextQuest="P" toAdd="pAbsoluta" toSubs="" @getValues="setValues" />
    </div>

    <div class="casos" v-if="this.state.mostrar === 'P'">
        <pregunta-component :sigOp="1" @getPrev="setPrev"
        title="¿Se ha limitado la comercialización de algún bien o servicio de manera exclusiva ya sea por zona o temporada?"
        v-if="this.state" :dataArr="this.state" nextQuest="Q" toAdd="pRelativa" toSubs="" @getValues="setValues" />
    </div>

    <div class="casos" v-if="this.state.mostrar === 'Q'">
        <pregunta-component :sigOp="1" @getPrev="setPrev"
        title="¿Notó que los acuerdos entre los denunciados dividen, distribuyen o asignan ciertos sectores del mercado actual o potencial?"
        v-if="this.state" :dataArr="this.state" nextQuest="R" toAdd="pAbsoluta" toSubs="" @getValues="setValues" />
    </div>

    <div class="casos" v-if="this.state.mostrar === 'R'">
        <pregunta-component :sigOp="1" @getPrev="setPrev"
        title="La obtención de alguna recompensa, como descuentos, incentivos o beneficios, ¿se otorga con el requisito de no usar, adquirir, vender o comercializar los bienes o servicios de comercios no aliados al denunciado?"
        v-if="this.state" :dataArr="this.state" nextQuest="S" toAdd="pRelativa" toSubs="" @getValues="setValues" />
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