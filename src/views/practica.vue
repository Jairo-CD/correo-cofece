<script>
export default {
    data() {
        return {
            titulo: "",
            items: {
                "absolutas": {
                    description: `
                    <p>Son conductas, conocidas como colusiones o cárteles económicos, son pactos y/o intercambio de información entre agentes económicos competidores que participan en el mismo mercado, con el objeto de manipular precios o cantidades, restringir la oferta, repartirse segmentos de mercado o coordinar posturas en licitaciones. Es decir, mediante estos acuerdos eliminan la competencia.</p>
                    <p>Estas prácticas ilegales son las que más daño hacen a los mercados, pues generan graves repercusiones en el bienestar de los consumidores. Por un lado, provocan precios mayores a los que prevalecerían en una situación de competencia y, por otro, disminuyen la cantidad y calidad de los bienes o servicios producidos afectando el crecimiento de la economía.</p>
                    <p>Las prácticas monopólicas absolutas se castigan severamente. Además, el Código Penal Federal establece pena de 5 a 10 años de prisión.</p>
                    `,
                    about: {
                        text: "¿Qué es una práctica monopólica absoluta?",
                        url: "https://www.cofece.mx/que-es-una-practica-monopolica-absoluta-pma/"
                    },
                    pdf: "https://www.cofece.mx/wp-content/uploads/2020/10/GuiaFLInicioInvestigacionesPMA.pdf",
                    archivo: "https://www.cofece.mx/category/publicaciones/analisis-de-casos/practicas-monopolicas-relativas/"
                },
                "relativas":{
                    description: `
                    Son actos, contratos, convenios, procedimientos o combinaciones que realizan los agentes económicos con poder sustancial, de manera individual o conjunta, para desplazar indebidamente a otros participantes, impedirles su acceso o establecer ventajas exclusivas a favor de uno o varios agentes económicos.
                    <br>De acuerdo con la Ley Federal de Competencia Económica, las siguientes conductas pueden ser prácticas monopólicas relativas:<br>
                    <ul>
                        <li>Segmentación de mercados a través de exclusividades</li>
                        <li>Restricción vertical de precios</li>
                        <li>Compras o ventas atadas</li>
                        <li>Exclusividades</li>
                        <li>Negativa de trato</li>
                        <li>Boicot</li>
                        <li>Depredación de precios</li>
                        <li>Descuentos por lealtad o transacciones condicionadas</li>
                        <li>Subsidios cruzados</li>
                        <li>Discriminación de precios</li>
                        <li>Elevación de los costos de un rival</li>
                        <li>Negativa de trato o discriminación en el acceso a un insumo esencial</li>
                        <li>Estrechamiento de márgenes de insumos esenciales</li>
                    </ul>
                    Estas conductas son comunes en el desarrollo de los negocios y pueden generar eficiencias, no obstante, en ciertas circunstancias podrían tener como objetivo o resultado dañar el proceso de competencia.
                    <br>Estas prácticas son sancionadas de la siguiente manera:<br>
                    <ul>
                        <li>La orden de suprimir o corregir la conducta anticompetitiva.</li>
                        <li>A las personas morales, multas hasta por el 8% de los ingresos económicos del agente económico responsable o 200 mil veces el salario mínimo general vigente para el Distrito Federal (SMGVDF).</li>
                        <li>A las personas físicas que participan directa o indirectamente, en representación o por cuenta y orden de personas morales, inhabilitación para ejercer como consejero, administrador, director, gerente, directivo, ejecutivo, agente, representante o apoderado en una persona moral hasta por un plazo de 5 años y multas de hasta 200 mil SMGVDF.</li>
                        <li>A quienes coadyuvan, propician o inducen la realización de la práctica monopólica relativa, la sanción económica es hasta por 180 mil veces el SMGVDF.</li>
                        <li>En casos de reincidencia las sanciones económicas son hasta por el doble de las que corresponda.</li>
                        <li>En ciertos casos la Comisión puede ordenar la desincorporación o enajenación de activos, derechos, partes sociales o acciones.</li>
                    </ul>
                    `,
                    about: {
                        text: "¿Qué es una práctica monopólica relativa?",
                        url: "https://www.cofece.mx/que-es-una-practica-monopolica-relativa-pmr/"
                    },
                    pdf: "https://www.cofece.mx/wp-content/uploads/2018/05/3practicmonorelativas.pdf",
                    archivo: "https://www.cofece.mx/category/publicaciones/analisis-de-casos/practicas-monopolicas-absolutas/"
                }
            }
        };
    }
};
</script>

<template>
    <div class="navsecc">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link :to="{ name: 'home' }">Inicio</router-link></li>
                <li class="breadcrumb-item"><router-link :to="{ name: 'denuncia' }">Denuncia</router-link></li>
            </ol>
        </nav>
    </div>
    <div class="container">
        <div class="card mx-auto w-75">
            <h5 class="card-header">Acerca de Prácticas monopóliticas {{titulo}}</h5>
            <div class="card-body">
                <p class="card-text text-justify" v-html="items[titulo].description"></p>
                
                <p class="card-text">Para saber más consulta la infografia
                    <a :href="items[titulo].about.url" >{{ items[titulo].about.text }}</a>.</p>
            </div>
        </div>
        <div class="container mx-auto textDlink" style="margin-top: 20px;">
            <div>
                <a href="https://www.cofece.mx/wp-content/uploads/2017/12/guia-0022015_inicio_investigaciones.pdf" style="font-size: large;">
                    <span class="material-icons" style="margin-right: 10px;">picture_as_pdf</span>
                    Guía para el inicio de investigaciones por prácticas monopólicas
                </a>
            </div>
            <div>
                <a :href="items[titulo].pdf" style="font-size: large;">
                    <span class="material-icons" style="margin-right: 10px;">picture_as_pdf</span>
                    Guía para tramitar el procedimiento de investigación de Prácticas monopólicas {{titulo}}
                </a>
            </div>
            <div>
                <a :href="items[titulo].archivo" style="font-size: large;">
                    <span class="material-icons" style="margin-right: 10px;">link</span>
                    Archivos para Prácticas Monopólicas {{ titulo }}
                </a>
            </div>
        </div>
    </div>
</template>
<style>
a {
    text-decoration:none!important;
    background-color: transparent;
    color: inherit;
}
.textDlink{
    padding-left: 300px;
}
a:hover {
    color: #51d1bd;
}
</style>
