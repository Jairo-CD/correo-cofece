<script>

export default {
    name: "PreguntaComponent",
    props: {
        title: {
            type: String
        },
        dataArr: {
            type: Object
        },
        nextQuest: {
            type: String
        },
        toAdd: {
            type: String
        },
        toSubs: {
            type: String
        },
        sigOp: {
            type: Number
        },
    },
    methods: {
        back(){
            this.state = this.dataArr;
            if(this.state.mostrar === 'B'){
                this.$router.push("denuncia");
                this.$emit("getPrev", this.state);
                setTimeout(() => window.location.reload() , 100);
            }else{
                this.$emit("getPrev", this.state);
            }
        },
        next(){
            this.state = JSON.parse(JSON.stringify(this.dataArr));
            this.state.prevState = JSON.parse(JSON.stringify(this.dataArr));
            this.state.mostrar = this.nextQuest;

            if(this.tipo === 'Si'){
                if(this.toAdd.includes('pAnticom')){
                    this.state.pAnticom += (1*this.sigOp);
                }
                if(this.toAdd.includes('pAbsoluta')){
                    this.state.pAbsoluta += (1*this.sigOp);
                }
                if(this.toAdd.includes('pRelativa')){
                    this.state.pRelativa += (1*this.sigOp);
                }
                if(this.toAdd.includes('pIlicita')){
                    this.state.pIlicita += (1*this.sigOp);
                }
                if(this.toAdd.includes('pPoderSus')){
                    this.state.pPoderSus += (1*this.sigOp);
                }

                this.$emit("getValues", this.state);
            }else if(this.tipo === 'No'){
                if(this.toSubs.includes('pAnticom')){
                    this.state.pAnticom--
                }
                if(this.toSubs.includes('pAbsoluta')){
                    this.state.pAbsoluta--
                }
                if(this.toSubs.includes('pRelativa')){
                    this.state.pRelativa--
                }
                if(this.toSubs.includes('pIlicita')){
                    this.state.pIlicita--
                }
                if(this.toSubs.includes('pPoderSus')){
                    this.state.pPoderSus--
                }

                this.$emit("getValues", this.state);
            }else{
                this.$emit("getValues", this.dataArr);

                return(alert('¡Seleccione una opción!'));
            }
        }
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
            tipo: ''
        };
    }
}


</script>

<template>
    <div class="card row m-2">
        <div class="card-body p-4 col-12">
            <h5 class="card-title">{{ title }}</h5>

            <div class="p mt-3">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Si"
                        v-model="this.tipo">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Si
                    </label>
                </div>

                <div class="form-check mt-2">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="No"
                        v-model="this.tipo">
                    <label class="form-check-label" for="flexRadioDefault1">
                        No
                    </label>
                </div>
            </div>

            <div class="gbtn mt-4 text-center">
                <div class="btn-group me-2" role="group" aria-label="First group">
                    <button @click="back" class="btn" style="background-color: #51d1bd; color: white;">ANTERIOR</button>
                </div>
                <div class="btn-group me-2" role="group" aria-label="Second group">
                    <button @click="next" class="btn" style="background-color: #51d1bd; color: white;">
                        SIGUIENTE
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>
  
<style lang="scss" scoped></style>