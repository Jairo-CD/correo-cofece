<script>
export default {
    data() {
        return {
            titulo: "",
            items: {
                "absoluta": {
                    preceptos: ``,
                    pdf: "https://www.cofece.mx/wp-content/uploads/2020/10/GuiaFLInicioInvestigacionesPMA.pdf",
                    archivo: "https://www.cofece.mx/category/publicaciones/analisis-de-casos/practicas-monopolicas-relativas/"
                },
                "relativa": {
                    preceptos: `
                    Cuáles son los preceptos infringidos por la práctica denunciada:
                    <ul>
                        <li>Descripción de los principales bienes y servicios involucrados,
                            especificando de la manera más clara posible cuál es el uso común
                            de dichos bienes y servicios.</li>
                        <li>En caso de conocerlo, una lista de los bienes o servicios iguales,
                            similares o sustancialmente relacionados con los bienes o servicios del denunciado.</li>
                        <li>En caso de conocerlo, una lista de los principales agentes económicos que procesen, produzcan,
                            distribuyan o comercialicen los bienes o servicios en el territorio nacional.</li>
                    </ul>
                    `,
                    pdf: "https://www.cofece.mx/wp-content/uploads/2017/12/guia-0012015_pmr.pdf",
                    archivo: "https://www.cofece.mx/category/publicaciones/analisis-de-casos/practicas-monopolicas-absolutas/"
                }
            }
        };
    },
    created() {
        this.updateTilte(this.$route.params.titulo)
    },
    methods: {
        updateTilte(titulo) {
            this.titulo = titulo;
        }
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

    <div class="container-fluid">
        <div class="row mx-auto" style="width: 80%;">
            <div class="col-8">
                <div class="card mx-auto">
                    <h5 class="card-header">Requisitos para denunciar una Práctica monopólitica {{ titulo }}</h5>
                    <div class="card-body">
                        <div class="card-text textJustify" style="text-align: justify;">
                            <p>La LFCE señala que cualquier persona, física o moral, podrá denunciar ante la Autoridad
                                Investigadora de la Comisión las prácticas monopólicas absolutas y relativas de las que
                                tenga conocimiento.
                            </p>
                            <p>La denuncia de una práctica monopólica se hará a través de un escrito que cumpla con los
                                requisitos que prescribe el artículo 68 de la LFCE y que deberá ser presentado en la
                                oficialía de partes de la Comisión.
                            </p>
                            <p>Todas las promociones que se presenten ante la Comisión, incluyendo la denuncia,
                                <strong>deben estar firmadas y en idioma español.</strong>
                            </p>
                            <p>
                                A continuación se enlistan los requisitos que aplique a una práctica monopólica {{ titulo
                                }}:
                            </p>
                            <div class="container">
                                <table class="table table-striped text-center table-bordered mx-auto">
                                    <thead>
                                        <tr class="align-middle">
                                            <th scope="col" style="background-color: #51d1bd; color: white;">Requisitos
                                                para<br>
                                                presentar una<br>denuncia</th>
                                            <th scope="col" style="background-color: #51d1bd; color: white;">Prácticas
                                                monopólicas {{ titulo }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td rowspan="5"><strong>Respecto al<br>denunciante</strong></td>
                                            <td style="text-align: justify;">
                                                <strong>Nombre, denominación o razón social del denunciante. </strong>
                                                En caso de que el denunciante promueva por su propio derecho, se sugiere
                                                acompañar el escrito de una copia simple de su identificación.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: justify;">
                                                De ser el caso, nombre del <strong>representante legal</strong> y testimonio
                                                notarial
                                                o copia certificada del documento o instrumento que contenga las
                                                facultades para presentar la denuncia.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: justify;">
                                                <strong>Domicilio para oír y recibir notificaciones</strong>, mismo que
                                                necesariamente
                                                deberá ser en el Distrito Federal o, en su caso, en el domicilio de la
                                                delegación de la Comisión que corresponda.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: justify;">
                                                De considerarlo necesario, <strong>personas que autorice</strong>, así como
                                                los
                                                términos en los que otorga dicha autorización.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: justify;">
                                                <strong>Datos que permitan la pronta localización del denunciante o su
                                                    representante legal</strong>, como son teléfonos y correos electrónicos.
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td rowspan="2"><strong>Respecto del<br>denunciado</strong></td>
                                            <td style="text-align: justify;">
                                                <strong>Nombre, denominación o razón social del o de los
                                                    denunciados.</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: justify;">
                                                En caso de conocerlo, <strong>el domicilio del denunciado.</strong>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td rowspan="2"><strong>Respecto de<br>los hechos relacionados<br>con la
                                                    denuncia</strong></td>
                                            <td style="text-align: justify;">
                                                <strong>Descripción detallada (circunstancias de modo, tiempo y lugar)
                                                    para identificar los indicios de la comisión de una práctica monopólica
                                                    de los hechos que motivan la denuncia.</strong>
                                                <p>
                                                    Además de lo anterior, se recomienda incluir la siguiente información:
                                                <ul>
                                                    <li>Estructura del mercado en cuestión.</li>
                                                    <li>Descripción de los bienes o servicios involucrados.</li>
                                                    <li>En qué medida las prácticas denunciadas afectan a las condiciones de
                                                        competencia en el mercado en cuestión.</li>
                                                    <li>Si existe alguna regulación que afecte a las condiciones de
                                                        competencia en los mercados afectados.</li>
                                                    <li>Si existe alguna norma que permite o facilite dicha práctica.</li>
                                                </ul>
                                                </p>
                                                <p v-html="items[titulo].preceptos"></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: justify;">
                                                <strong> Listado de documentos y medios de convicción</strong>, relacionando
                                                los mismos de manera precisa con los hechos denunciados.<br>
                                                Por ejemplo y con el único propósito de orientar al denunciante, se podrían
                                                incluir:
                                                <ul>
                                                    <li>Minutas o actas (de preferencia firmadas) de reuniones.</li>
                                                    <li>Convenios o contratos entre los agentes denunciados o entre éstos y
                                                        un tercero.</li>
                                                    <li>Comunicados, circulares, oficios, cartas, etc.</li>
                                                    <li>Correos electrónicos.</li>
                                                    <li>Videos y grabaciones de audio.</li>
                                                    <li>Listas de precios o tarifarios.</li>
                                                    <li>Cotizaciones.</li>
                                                    <li>Declaraciones de los agentes económicos.</li>
                                                    <li>Resoluciones (de todo tipo) de autoridades nacionales o extranjeras.
                                                    </li>
                                                    <li>Publicidad de todo tipo.</li>
                                                    <li>Datos estadísticos con su respectiva fuente.</li>
                                                    <li>Estudios de mercado.</li>
                                                    <li>Notas periodísticas.</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card mx-auto mb-3">
                    <h5 class="card-header">Denuncia Práctica monopólitica {{ titulo }}</h5>
                    <div class="card-body" style="text-align: justify;">
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
                    <div class="btn">
                        <router-link :to="{ name: 'denuncia' }"><button
                                class="btn" style="background-color: #51d1bd; color: white;">DENUNCIA</button></router-link>
                    </div>
                </div>
                <div class="card mx-auto">
                    <h5 class="card-header">Reporte Práctica monopólitica {{ titulo }}</h5>
                    <div class="card-body" style="text-align: justify;">
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
                <div class="btn ">
                    <router-link :to="{ name: 'reporte' }"><button class="btn" style="background-color: #51d1bd; color: white;">REPORTE</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
a {
    text-decoration: none !important;
    background-color: transparent;
    color: inherit;
}

a:hover {
    color: #51d1bd;
}</style>