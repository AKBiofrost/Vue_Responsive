<template id= "app">
 <v-container fluid>
 
    <v-card 
    ref="principal" 
    flat
    color="#107192"
   > 

<!-- titulo por País--> 
<v-card-title 
   class="d-flex justify-center mb-2"
     > <h1> POSITIVIDAD POR PAÍS </h1>
   </v-card-title>
<!-- Graficos Postividad por Pais-->
  <v-card
  class=" justify-center pa-1 mb-2 "
  elevation="10"
  ref="positividad_por_pais"
   >
  <v-card
  flat
  
    height="5%"
   class="d-flex"
   
  >

<v-card
  flat
  width="5%"
         
>
<v-img   
id="imagen_pais_etiqueta"
      
      justify="center"
 src="https://report.cool-shockley.142-44-201-186.plesk.page/images/VUE_marcador-de-posicion.png"
      ></v-img>
</v-card>
<h2 >{{graficaPais_pais[posicionGrafica]}} </h2>


  </v-card>
<!-- presentacion de hexagonos-->

<div 
      align="center"
>
<v-card 
  flat
  color=#d8d6d7
  width="80%"
  class=" d-flex justify-center ma-1  rounded-xl"
>    

<v-card
  flat
 id="hexagonos"
 color=#d8d6d7
  class=" justify-space-between rounded-xl  "
  
  v-for="n in CantEtiqueta"
        :key="n"
>

<v-col align="center">
 
  <v-img
      class=" align-center  "
      max-width="100%"
      src="https://report.cool-shockley.142-44-201-186.plesk.page/images/VUE_hexagono.svg">
      <v-card-title class=" d-flex justify-center" >
        <font  color="#d5d700" >  {{graficaPais_valor[posicionGrafica][n]}}%</font>
      </v-card-title>
      
      
    </v-img>
    
  <h4> {{graficaPais_etiqueta[n]}}</h4>
    </v-col>
    
     </v-card> 

      </v-card>
</div>
      <!-- fin presentacion de hexagonos-->
<!-- botones tipo carrusel-->

<v-card 
  flat
 class=" d-flex justify-center mb-1 " >


<v-card
  flat
       max-width="8%"
      class="  d-flex flex-row  justify-space-between white--text pa-2"
      @click="atras"
    >
      <v-img 
      
     width="15%"
      justify="start"
 src="https://report.cool-shockley.142-44-201-186.plesk.page/images/atras.svg"
      ></v-img>



    </v-card>
    
    <v-card 
    flat
    class="d-flex align-center"
    >
    <h3> PAISES CONTRATADOS </h3>
    </v-card>

    <v-card
      flat
      max-width="8%"
      class="  d-flex flex-row-reverse justify-space-between  white--text pa-2"
      @click=" adelante "
    >
      <v-img 
      width="15%" 
      justify="end"
 src="https://report.cool-shockley.142-44-201-186.plesk.page/images/adelante.svg"
      ></v-img>


    </v-card>





</v-card> 
<!-- fin botones tipo carrusel-->

<!-- grafica Gchart-->
   <v-col>

 <v-card-title 
   class="d-flex justify-center mb-2"
     > <h2> LÍNEA DE TIEMPO </h2>
   </v-card-title>

   <!-- 
    
  <v-row align="center">
      <v-col cols="6">
        <v-subheader>
        País
        </v-subheader>
      </v-col>

      <v-col cols="6">
        <v-select
          v-model="selectPaisTiempo"
          :hint="`${selectPaisTiempo}`"
          :items="itemsPaisTiempo"
          item-text="pais"
          label="Seleccionar pais"
          persistent-hint
          return-object
          single-line
          @change= "seleccionarPaisTiempo"
        ></v-select>
      </v-col>
    </v-row>
 web--> 
<div class=" graficos-barra">

 <GChart
    type="LineChart"
    :data="chartData_LineaTiempo"
    :options="chartOptionsLineaTiempo"
  />
    </div>

   </v-col>
<!--  fin grafica Gchart-->
  </v-card>
<!-- fin Graficos Postividad por Pais-->

<!--alerta-->  
  <template id="AlertaPorPais" >
  <div class="text-center">
    <v-dialog
      v-model="dialogPais"
      width="500"
      
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          No se encontraron datos
        </v-card-title>

  <v-alert
      border="left"
      color="red lighten-2"
      dark
    >
      Asegurece de estar conectado a internet
    </v-alert>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialogPais = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </template>
<!--alerta--> 



    </v-card>
 </v-container>
   </template>

<script>
import axios from "axios"; 
import { GChart } from 'vue-google-charts'
import bgImg from '@/assets/VUE_hexagono.svg'



 //------------------------------------------------------------------------------------
 export default {
  //------------------------------------------------------------------------------------  
    data () {
  //------------------------------------------------------------------------------------
    return {
        fondo: bgImg,
        dialogPais: false,
        dialogEtiqueta:false,
        dialogEtiquetaPais:false,
        dialogMedios_Custodiados:false,
        dialogMedios_Activo:false,
        dialogWeb:false,
//-------------------------------------------------------------------------------//
    PosicionEtiqueta:1,
    PosicionPais:1, 
    PrimeraMitad:0,
    segundaMitad:0,
    model: 0,


items: [
        
      ],
      itemsE: [
        
      ],

     
        //---------------------------------------------------------------------------------//
    
        chartData:[null],
        graficaPais_pais:[null],
        graficaPais_etiqueta:[null],
        graficaPais_valor:[null],
        graficaEtiquetas_pais:[null],
        graficaEtiquetas_etiqueta:[null],
        graficaEtiquetas_valor:[[""]],
        CantPaises:null,
        CantEtiqueta:null,
        posicionGrafica:0, 
        posicionGraficaE:0,
        //----------------------------------------------------------------------//
        chartData_etiqueta:[null],
        chartData_LineaTiempo:[],
        chartData_LineaTiempo_Etiqueta:[null],
        Gchart_tem:[null],
        Gchart_temEtiquetas:[null],
        Gchart_temTiempoPais:[null],
        Gchart_temTiempoeEtiqueta:[null],
        itemsPais:['todos'],
        itemsEtiquetas:['todos'],
        itemsPaisTiempo:['todos'],
        itemsEtiquetasTiempo:['todos'],
        chartData_Aux:[null],
        contrato:2, 
        selectorPais:[],
        selectorEtiqueta:[],
        selectorPaisTiempo:[],
        selectorEtiquetaTiempo:[],
      
        //------------------------------------------------------------------------------------
        etiquetas:[null],
        paises:[null],
        valorPost:[null],
        formato:[null],
        //--------------------------------------------------------------------------------

        cantCard:0,
        cantPais:0,
        etiquetaWeb:[''],
        paisWeb:[''],
        n:0,
        m:0,
        post:0,
        colorWeb:[],
        colores:[ ],
        promedioWeb:[null],
        chartData_denunciaPie:[null],
        MesGrafica:[],
        MyLink:'',
        //---------------------------------------------
        selectPais:['todas las etiquetas'],
        selectEtiqueta:['todos los paises'],
        selectPaisTiempo:['todas las etiquetas'],
        selectEtiquetaTiempo:['todos los etiqueta'],

     select: { state: 'Florida', abbr: 'FL' },
       

    
     
     ColorVacio:[
        {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        },
         {
      category: -1,
      position: -1,
      url: "-1"
        }

     ],

     chartOptionsPie: {

        width: 1000,
        height: 900,
        is3D: true,
        title:"Totales posicionados vs Totales desposicionados"

      },
    chartOptionsPie2: {

        width: 1000,
        height: 900,
        is3D: true,
        title:"Distribución por etiqueta"

      },
      chartOptions: {

        width: 1000,
        height: 900,
        isStacked: true,
        legend: { position: 'top' },
        title:" Posicionados vs Desposicionados"
      },

        chartOptionsBarras: {
        title: 'Positividad por paises',
        width: 1300,
        height:500,
        legend: { position: 'top' },
          
        },
        chartOptionsBarrasEtiqueta: {
        title: 'Positividad por etiqueta',
        width: 1300,
        height:500,
        legend: { position: 'top' },
          
        },
        chartOptionsLineaTiempo:{
        title: 'Linea de tiempo por paises',
       width: '100%',
      height: '500px',
        legend: { position: 'top' },
 

    
      },
      
     
    labels: [
        '01/2021',
        '02/2021',
        '03/2021',
      
      ],
      value: [
        200,
        675,
        410,
    
      ],         
    web:[
        {
          color: "teal lighten-4",
          
        },
        {
          color: "cyan darken-1",
         
        },
        {
          color: "teal darken-2 ",
         
        },
        {
          color: "red darken-4",
         
        },

        {
          color: "purple darken-4",
         
        },
        {
          color: "teal lighten-4",
          
        },
        {
          color: "cyan darken-1",
         
        },
        {
          color: "teal darken-2 ",
         
        },
        {
          color: "red darken-4",
         
        },

        {
          color: "purple darken-4",
         
        },
        {
          color: "teal lighten-4",
          
        },
        {
          color: "cyan darken-1",
         
        },
        {
          color: "teal darken-2 ",
         
        },
        {
          color: "red darken-4",
         
        },

        {
          color: "purple darken-4",
         
        },
        {
          color: "teal lighten-4",
          
        },
        {
          color: "cyan darken-1",
         
        },
        {
          color: "teal darken-2 ",
         
        },
        {
          color: "red darken-4",
         
        },

        {
          color: "purple darken-4",
         
        },
      
       
      
],
  
    chartData_denuncia:[
          ['Detractores', 'Posicionados', 'Despocisionados'],
          ['', 10, 5],
          ['', 10, 6],
          ['', 10, 3],
          ['', 10, 1]
        ],

      }
    }, 
//---------------------------------------------------------------------------------------
        components: {
    GChart
  },
  // -----------------------------------------------------------------------
 
// inicio de metodos de las tablas
 
    methods:{

capturarItemPais(index){

this.PosicionPais=index+1


},
capturarItemE(indexs){

this.PosicionEtiqueta=indexs


},



      URL_PostWeb( URLColor){

      this.dialogWeb = true
      this.post=URLColor



      },
      URL_Web( ){

   
var textoActivo=this.post 
var URL=this.post 
textoActivo.link(URL)
//'<a href="' + this.post +'" target="_blank" >{{post}}</a> '

var d1 = document.getElementById('hipervinculo');
d1.insertAdjacentHTML('afterend',textoActivo.link(URL) );



      },
    async  fotoUsuario(){



function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

this.contrato =getParameterByName('ctr_id');
console.log("---------con getParameter-------")
console.log(this.contrato)

this.contrato=2



var matriz=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${this.contrato}/report/user`)
console.log("ACCESO A FOTO Y NOMBRE DEL USUARIO")

console.log(matriz)



},


      LanzarGraficas(){



       this.GraficoPorPais() //no tocar
        this.GraficoLineaTiempo()// no tocar
        this.GraficoLineaTiempo_etiquetas()//no tocar
        this.GraficoPosicionamientoWeb() //no tocar
        //this.Detractores() // no tocar

        //this.fotoUsuario()

        this.graficasPais()


      
      },

      adelante(){


if(this.posicionGrafica<this.CantPaises){
this.posicionGrafica=this.posicionGrafica+1
}
      


      },
      atras(){

if(this.posicionGrafica!=1){
this.posicionGrafica=this.posicionGrafica-1
}
      


      },
      //----------------------------------------

      adelanteE(){


if(this.posicionGraficaE<this.CantEtiqueta){
this.posicionGraficaE=this.posicionGraficaE+1
}
      


      },
      atrasE(){

if(this.posicionGraficaE!=1){
this.posicionGraficaE=this.posicionGraficaE-1
}
      


      },


      //----------------------------------------
adelantePOS(){

    if(this.PosicionPais<this.CantPaises){
this.PosicionPais=this.PosicionPais+1
}



},
atrasPOS(){ 

if(this.PosicionPais!=1){
this.PosicionPais=this.PosicionPais-1
}

},
adelanteEti(){
  
  if(this.PosicionEtiqueta< this.CantEtiqueta){
this.PosicionEtiqueta=this.PosicionEtiqueta+1
}
},
atrasEti(){
if(this.PosicionEtiqueta!=1){
this.PosicionEtiqueta=this.PosicionEtiqueta-1
}


},

//--------------------------------------------------------------------------------


  async  GraficoPorPais(){

  this.SedioClickG=true
  var json=1
  var cont=0


//-----REDISEÑO-----

 this.graficaPais_valor.push([" "])

//---------------

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

this.contrato =getParameterByName('ctr_id');
console.log("---------con getParameter-------")
console.log(this.contrato)

this.contrato=2


//---------------------envio el parametro fecha al servido-------------------------------------------

var matriz=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${this.contrato}/report/positivity_by_month_label_country`)
.catch(e => {
    // Capturamos los errores
  this.dialogPais=true 
  this.LanzarGraficas()
  console.log("mensaje de error");
    console.log(e);
})  

//-----------------------------------------------------------------------------------------------------




//-----------------------------------------------------------------------------------------------------

for( json in matriz.data[0]){
this.etiquetas[json]=[matriz.data[0][json]]
this.graficaPais_etiqueta.push(matriz.data[0][json])//REDISEÑO
this.graficaEtiquetas_etiqueta.push(matriz.data[0][json])//REDISEÑO
this.CantEtiqueta=this.CantEtiqueta+1
}
this.etiquetas.shift()//quitamos el primer elemento que no usaremos
this.graficaPais_etiqueta.shift()
console.log("this.etiquetas")
console.log(this.etiquetas)
//-----------------------------------------------------------------------------------

for( json in matriz.data[1][1]){
this.paises[json]=matriz.data[1][1][json]// pasamos los paises a graficas
this.graficaPais_pais.push(matriz.data[1][1][json])// REDISEÑO
this.graficaEtiquetas_pais.push(matriz.data[1][1][json])// REDISEÑO
this.CantPaises=this.CantPaises+1
}
console.log("this.paises")
console.log(this.paises)
//---------------------------------------------------------------------------------

for( json in matriz.data[2][0]){ 
this.valorPost[json]=matriz.data[2][json] //pasamos todos los valores en bruto
cont=cont+1// conocemos el tamaños el arreglo en caso sea util

}
//--------------------------------------------------------------------------------
//guardamos el mes en otro arreglo para usarlo
var Mes= []
for( json in matriz.data[2]){
Mes.push( [this.valorPost[json][0]] ) 
}
//------------------------------------------------------------------
console.log("posicion del ultimo mes")// igual tenemos el tamaño del arreglo
console.log(matriz.data[2].length)

// revisar esta posicion, asegurar es solo el ultimo mes a mostrar

//---------------------------------------------------------------------------
var UltimoMes= ((matriz.data[2].length)-1) // posicion del ultimo mes

this.MesGrafica=Mes[UltimoMes][0]

//---------------------------------------------------------------------------

this.valorPost[UltimoMes].shift() // eliminamos el primer elemento en la posicion del ultimo mes
this.chartData=[["Pais"]]

console.log("this.valorPost");
console.log(this.valorPost[UltimoMes]);
//--------------------------------------------------------------------------------------------
for( json=0; json<matriz.data[1][1].length; json++){
  console.log( this.chartData[json])
this.chartData[0].push( this.paises[json]  )
console.log( this.chartData[0])

}
//---------------------organizamos la informacion a procesar----------------------------------------
var saltoEtiqueta= (matriz.data[2][UltimoMes].length /this.etiquetas.length) //ojo no cambiar
console.log("saltoEtiqueta") 
console.log(saltoEtiqueta)
var Cantidadetiqueta= this.etiquetas.length
console.log("cantidadEtiqueta") 
console.log(Cantidadetiqueta)

var sgt=0
var pen=0
 //-----repite por la etiquetas//
for(  var aux=0 ; aux< Cantidadetiqueta ; aux++){
 
 //repite por la cantidad de etiquetas
  for( pen=sgt; pen<saltoEtiqueta + sgt  ;pen++){
  
  
if(this.valorPost[UltimoMes][pen]==-1){
this.valorPost[UltimoMes][pen]=0
console.log("remplazo con un cero")

}

console.log("aux-pen")
console.log(aux+"-"+pen)

console.log("sgt")
console.log(sgt)

    this.etiquetas[aux].push(this.valorPost[UltimoMes][pen])
      

}sgt= saltoEtiqueta +sgt
//-------llenamos el arreglo para el grafico--//
} 

for(  aux=0 ; aux< Cantidadetiqueta ; aux++){

  this.chartData.push(this.etiquetas[aux])
}
//---------------------------------------//

//------------------------------------------------------------------//

console.log("---------seleccion-------")
console.log(this.selectPais)

console.log("---------formato-------")
console.log(this.etiquetas)

console.log("---------CHARTDATA-------")
console.log(this.chartData)

/*------------------*/


this.Gchart_tem=this.chartData

for( json in this.etiquetas){
this.itemsPais.push(this.etiquetas[json][0])
}
this.selectorPais=this.itemsPais

/*---------------------*/



for( json in this.paises){
this.itemsPaisTiempo.push(this.paises[json])
}
this.selectorPaisTiempo=this.itemsPaisTiempo


/*---------------------*/


//-------------------------------------------------------------------------------------------
console.log("COMIENZA PROCESAMIENTO DE DATOS PARA BARRA POR ETIQUETAS")

//---------------------------------------------------------------------------------------------



for( json in matriz.data[1][1]){
this.etiquetas[json]=[matriz.data[1][1][json]]
//---------------------------------------------
//console.log("ETIQUETAS INICIALES");
//console.log(this.this.etiquetas[json]);
//------------------------------------------
}


  //this.itemsEtiquetasTiempo.push(this.etiquetas)// para el selector de tiempo etiqueta




console.log("etiquetas inicials");
console.log(this.etiquetas);

for( json in matriz.data[0]){
this.paises[json]=matriz.data[0][json]
}

this.paises.shift()
console.log("etiquetas");
console.log(this.paises);


for( json in matriz.data[2][0]){
this.valorPost[json]=matriz.data[2][json]
cont=cont+1

}

console.log("valores");
console.log(this.valorPost);

this.chartData_etiqueta=[["Pais"]]

for( json=0; json<this.paises.length; json++){
  console.log( "this.chartData[json]")
  console.log( this.chartData[json])
this.chartData_etiqueta[0].push( this.paises[json]  )
console.log( this.chartData_etiqueta[0])

}

//cantidad de datos entre el numero de etiquetas
 saltoEtiqueta= (matriz.data[2][UltimoMes].length /this.etiquetas.length)
console.log("saltoEtiqueta") 
console.log(saltoEtiqueta)
//cantidad  de etiquetas
 Cantidadetiqueta= this.etiquetas.length
console.log("cantidadEtiqueta") 
console.log(Cantidadetiqueta)


 sgt=0
 var elevado=0

 //-----repite por la etiquetas//
for(   aux=0 ; aux< Cantidadetiqueta ; aux++){
 //repite por la cantidad de etiquetas
  for( var pe=0,pent=1  ; pe<saltoEtiqueta && pent<saltoEtiqueta+1  ;pe++,pent++){
  

  console.log(aux+"-"+(aux+ (sgt*elevado))  )

  if(matriz.data[2][UltimoMes][(aux+ (sgt*elevado) )]==-1){
matriz.data[2][UltimoMes][(aux+ (sgt*elevado) )]=0

}
  //this.graficaEtiquetas_valor.push(matriz.data[2][UltimoMes][(aux+ (sgt*elevado) )])
  this.etiquetas[aux].push(matriz.data[2][UltimoMes][(aux+ (sgt*elevado) )])
   
  console.log("en etiquetas ") 
  console.log(this.etiquetas[aux])

    sgt=Cantidadetiqueta 
    elevado=Math.pow(2,(pent-1) );

    
}sgt= 0 
elevado=0

} 

//-------llenamos el arreglo para el grafico--//
for(  aux=0 ; aux< Cantidadetiqueta ; aux++){

  this.chartData_etiqueta.push(this.etiquetas[aux])
  this.graficaEtiquetas_valor.push(this.etiquetas[aux])
}

//-------------------------------------------------------------------------------------------

console.log(this.chartData_etiqueta)

//---------------------------------------------------------------------------------------------

this.Gchart_temEtiquetas=this.chartData_etiqueta

for( json in this.etiquetas){
this.itemsEtiquetas.push(this.etiquetas[json][0])
}
this.selectorEtiqueta=this.itemsEtiquetas


//-------------------------------GRAFICA TIEMPO ETIQUETA----------------------------------

this.selectorEtiquetaTiempo=this.itemsEtiquetasTiempo
//this.Gchart_temTiempoeEtiqueta=

//-------------------------------PARA EL REDISEÑO-------------------------------------------------
console.log("PARA EL REDISEÑO")

console.log("this.CantPaises")
console.log(this.CantPaises)
console.log("this.CantEtiqueta")
this.CantEtiqueta=this.CantEtiqueta-1
console.log(this.CantEtiqueta)

console.log("this.graficaPais_pais")
console.log(this.graficaPais_pais)

console.log("this.graficaPais_etiqueta")

console.log(this.graficaPais_etiqueta)

console.log("this.graficaEtiqueta_pais")
console.log(this.graficaEtiqueta_pais)

console.log("this.graficaEtiqueta_etiqueta")

console.log(this.graficaEtiqueta_etiqueta)

      
      this.graficaPais_valor.push([" "])

this.chartData

for( var re=0; re<this.CantPaises; re++){
  this.graficaPais_valor.push([" "])
  for(var res=0; res<this.CantEtiqueta; res++){
 this.graficaPais_valor[re+1].push(this.chartData[re+1][res+1])


  }

}
 
console.log(" this.graficaPais_valor")
console.log( this.graficaPais_valor)
this.posicionGrafica=1

console.log(" this.graficaEtiquetas_valor")
console.log( this.graficaEtiquetas_valor)
this.posicionGraficaE=1



//-------------------------------------------    



    },// fin de GraficoPorPais 
    //-----------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------
    seleccionarPais(){

this.itemsPais=this.selectorPais

console.log("this.selectorPais")
console.log(this.selectPais)


var Gchart_Aux=[null]
let posicionSelect=0

console.log("Gchart_Aux[0]")
Gchart_Aux[0]=this.chartData[0]

console.log("Gchart_Aux[0]")
console.log(Gchart_Aux[0])

for(var i=0; i<this.Gchart_tem.length;i++){

console.log("entro a la busqueda")
console.log(this.Gchart_tem[i][0])
// busqueda de elemento seleccionado
  if(this.Gchart_tem[i][0]==this.selectPais ){

  posicionSelect=i

  console.log("posicionSelect")
  console.log(posicionSelect)
    }


}

console.log("this.Gchart_tem[posicionSelect]")
console.log(this.Gchart_tem[posicionSelect])

Gchart_Aux[1]=this.Gchart_tem[posicionSelect]

if(this.selectPais== 'todos') {
  
console.log("this.Gchart_tem")
console.log(this.Gchart_tem)
//----------------------------------



  this.chartData=this.Gchart_tem 
  }
  else{
console.log("Gchart_Aux")
console.log(Gchart_Aux)
this.chartData=Gchart_Aux


  }


console.log("this.chartData")
console.log(this.chartData)



    },
     seleccionarEtiqueta(){



this.itemsEtiquetas=this.selectorEtiqueta

console.log("this.selectorEtiqueta")
console.log(this.selectEtiqueta)


var Gchart_Aux=[null]


let posicionSelect=0

Gchart_Aux[0]=this.chartData_etiqueta[0]

console.log("primer elemento del grafico etiqueta")
console.log(Gchart_Aux)

for(var i=0; i<this.Gchart_temEtiquetas.length;i++){

console.log("entro a la busqueda")
console.log(this.Gchart_temEtiquetas[i][0])
// busqueda de elemento seleccionado
  if(this.Gchart_temEtiquetas[i][0]==this.selectEtiqueta ){

  posicionSelect=i

  console.log("posicionSelect")
  console.log(posicionSelect)
    }


}

console.log("this.Gchart_temEtiquetas[posicionSelect]")
console.log(this.Gchart_temEtiquetas[posicionSelect])

Gchart_Aux[1]=this.Gchart_temEtiquetas[posicionSelect]

if(this.selectEtiqueta== 'todos') {
  
  this.chartData_etiqueta=this.Gchart_temEtiquetas }
  
  else{
this.chartData_etiqueta=Gchart_Aux

  }







    },
    seleccionarPaisTiempo(){

var Gchart_AuxOrden=[null]
this.itemsPaisTiempo=this.selectorPaisTiempo

console.log("PAIS SELECCIONADO")
console.log(this.selectPaisTiempo)
console.log("GRAFICA ORIGINAL")
console.log(this.chartData_LineaTiempo)
console.log("COPIA DE LA GRAFICA ORIGINAL")
console.log(this.Gchart_temTiempoPais)
//----------------------------------------------
//var Gchart_Aux=[null]
Gchart_AuxOrden=[]
var posicionEncontrado=0
const cantidadMeses=this.Gchart_temTiempoPais.length
//---------------------------------------------
console.log("Gchart_AuxOrden")
console.log(Gchart_AuxOrden)

Gchart_AuxOrden=[["PAIS"]]//

console.log("Gchart_AuxOrden-primer valor")
console.log(Gchart_AuxOrden)


for(var i=0; i<this.Gchart_temTiempoPais[0].length; i++ ){ //busqueda
console.log(this.Gchart_temTiempoPais[0][i])

if( this.Gchart_temTiempoPais[0][i]==this.selectPaisTiempo ){ 
  
  posicionEncontrado =i
  console.log("encontrado en "+posicionEncontrado)
  
  }

}

console.log("Gchart_AuxOrden-despues de buscar")
console.log(Gchart_AuxOrden)

    //problema

console.log(Gchart_AuxOrden)
Gchart_AuxOrden[0].push( this.Gchart_temTiempoPais[0][posicionEncontrado]) 

console.log("Gchart_AuxOrden")
console.log(Gchart_AuxOrden)

for(i=1; i<cantidadMeses; i++ ){

 console.log("this.Gchart_temTiempoPais[i][0]")

 console.log(this.Gchart_temTiempoPais[i][0])

 Gchart_AuxOrden.push( [this.Gchart_temTiempoPais[i][0]])


}
console.log("Gchart_AuxOrden")
console.log(Gchart_AuxOrden)


for( i=1; i<cantidadMeses; i++ ){

 Gchart_AuxOrden[i].push( this.Gchart_temTiempoPais[i][posicionEncontrado])

}
console.log("Gchart_AuxOrden")
console.log(Gchart_AuxOrden)
//--------------------------------------------------------------------------//

if(this.selectPaisTiempo== 'todos') {
  
this.chartData_LineaTiempo=this.Gchart_temTiempoPais

   }

  else{

this.chartData_LineaTiempo=  Gchart_AuxOrden





  }



  
    },// fin codigo selector tiempo
     seleccionarEtiquetaTiempo(){

var Gchart_AuxOrden=[null]
this.itemsEtiquetasTiempo=this.selectorEtiquetaTiempo

console.log("PAIS SELECCIONADO")
console.log(this.selectEtiquetaTiempo)
console.log("GRAFICA ORIGINAL")
console.log(this.chartData_LineaTiempo_Etiqueta)
console.log("COPIA DE LA GRAFICA ORIGINAL")
console.log(this.Gchart_temTiempoeEtiqueta)
//----------------------------------------------
//var Gchart_Aux=[null]
Gchart_AuxOrden=[]
var posicionEncontrado=0
const cantidadMeses=this.Gchart_temTiempoeEtiqueta.length
//---------------------------------------------
console.log("Gchart_AuxOrden")
console.log(Gchart_AuxOrden)

Gchart_AuxOrden=[["PAIS"]]//

console.log("Gchart_AuxOrden-primer valor")
console.log(Gchart_AuxOrden)


for(var i=0; i<this.Gchart_temTiempoeEtiqueta[0].length; i++ ){//busqueda
console.log(this.Gchart_temTiempoeEtiqueta[0][i])

if( this.Gchart_temTiempoeEtiqueta[0][i]==this.selectEtiquetaTiempo ){ 
  
  posicionEncontrado =i
  console.log("encontrado en "+posicionEncontrado)
  
  }

}

console.log("Gchart_AuxOrden-despues de buscar")
console.log(Gchart_AuxOrden)

    //problema

console.log(Gchart_AuxOrden)
Gchart_AuxOrden[0].push( this.Gchart_temTiempoeEtiqueta[0][posicionEncontrado]) 

console.log("Gchart_AuxOrden")
console.log(Gchart_AuxOrden)

for(i=1; i<cantidadMeses; i++ ){

 console.log("this.Gchart_temTiempoeEtiqueta[i][0]")

 console.log(this.Gchart_temTiempoeEtiqueta[i][0])

 Gchart_AuxOrden.push( [this.Gchart_temTiempoeEtiqueta[i][0]])


}
console.log("Gchart_AuxOrden")
console.log(Gchart_AuxOrden)


for( i=1; i<cantidadMeses; i++ ){

 Gchart_AuxOrden[i].push( this.Gchart_temTiempoeEtiqueta[i][posicionEncontrado])

}
console.log("Gchart_AuxOrden")
console.log(Gchart_AuxOrden)
//--------------------------------------------------------------------------//

if(this.selectEtiquetaTiempo== 'todos') {
  
this.chartData_LineaTiempo_Etiqueta=this.Gchart_temTiempoeEtiqueta

   }

  else{

this.chartData_LineaTiempo_Etiqueta=  Gchart_AuxOrden





  }



  
    },
    //-----------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------
    async  GraficoPorEtiqueta(){

 this.SedioClickG=true
  var json=1
  var cont=0

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

this.contrato =getParameterByName('ctr_id');
console.log("---------con getParameter-------")
console.log(this.contrato)

//this.contrato=2


//---------------------envio el parametro fecha al servido-------------------------------------------

var matriz=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${this.contrato}/report/positivity_by_month_label_country`)
.catch(e => {
    // Capturamos los errores
  this.dialogPais=true 


  console.log("mensaje de error");
    console.log(e);
})   
//---------------------envio el parametro fecha al servido-------------------------------------------



for( json in matriz.data[1][1]){
this.etiquetas[json]=[matriz.data[1][1][json]]
}

console.log("etiquetas inicials");
console.log(this.etiquetas);

for( json in matriz.data[0]){
this.paises[json]=matriz.data[0][json]
}

this.paises.shift()
console.log("etiquetas");
console.log(this.paises);


for( json in matriz.data[2][0]){
this.valorPost[json]=matriz.data[2][json]
cont=cont+1

}

console.log("valores");
console.log(this.valorPost);

this.chartData_etiqueta=[["Pais"]]

for( json=0; json<this.paises.length; json++){
  console.log( this.chartData[json])
this.chartData_etiqueta[0].push( this.paises[json]  )
console.log( this.chartData_etiqueta[0])

}

// revisar esta posicion, asegurar es solo el ultimo mes a mostrar

var UltimoMes= ((matriz.data[2].length)-1) 

//cantidad de datos entre el numero de etiquetas
 var saltoEtiqueta= (matriz.data[2][UltimoMes].length /this.etiquetas.length)
console.log("saltoEtiqueta") 
console.log(saltoEtiqueta)
//cantidad  de etiquetas
 var Cantidadetiqueta= this.etiquetas.length
console.log("cantidadEtiqueta") 
console.log(Cantidadetiqueta)


 var sgt=0
 var elevado=0

 //-----repite por la etiquetas//
for(  var aux=0 ; aux< Cantidadetiqueta ; aux++){
 //repite por la cantidad de etiquetas
  for( var pe=0,pent=1  ; pe<saltoEtiqueta && pent<saltoEtiqueta+1  ;pe++,pent++){
  
  this.etiquetas[aux].push(matriz.data[2][UltimoMes][(aux+ (sgt*elevado) )])
   
  console.log("en etiquetas ") 
  console.log(this.etiquetas[aux])

    sgt=Cantidadetiqueta 
    elevado=Math.pow(2,(pent-1) );

    
}sgt= 0 
elevado=0

} 

//-------llenamos el arreglo para el grafico--//
for(  aux=0 ; aux< Cantidadetiqueta ; aux++){

  this.chartData_etiqueta.push(this.etiquetas[aux])
}

//-------------------------------------------------------------------------------------------

console.log(this.chartData_etiqueta)

//---------------------------------------------------------------------------------------------

this.Gchart_temEtiquetas=this.chartData_etiqueta


for( json in this.etiquetas){
this.itemsEtiquetas.push(this.etiquetas[json][0])
}
this.selectorEtiqueta=this.itemsEtiquetas






    },// fin de GraficoPorEtiqueta 

  async  GraficoLineaTiempo(){

this.SedioClickG2=true
var cont

//--------------------solicito el parametro cliente/contrado--------------------------------------------

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var contrato = getParameterByName('ctr_id');
console.log("---------con getParameter-------")
console.log(contrato)
this.contrato=2

//---------------------envio el parametro fecha al servido-------------------------------------------
 
   
  const matriz=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${this.contrato}}/report/positivity_by_month_label_country`)
.catch(e => {
    // Capturamos los errores
  this.dialogPais=true 

 
  console.log("mensaje de error");
    console.log(e);
}) 
    console.log("AQUI INICIA LA LINEA DE TIEMPO POR PAIS")
      console.log("--------------------------------------")

  console.log("linea de tiempo");
console.log(matriz.data);


for(  json in matriz.data[0]){
this.etiquetas[json]=[matriz.data[0][json]]
}

this.etiquetas.shift()//quita la primera
console.log("this.etiquetas")
console.log(this.etiquetas)

//obtengo los paises----------------------
   for( var json in matriz.data[1][1]){
this.paises[json]=matriz.data[1][1][json]
}
console.log("PAISES linea de tiempo");
console.log(this.paises);
//---------------------------------------
  

 //obtengo los valores a pintar 
for( json in matriz.data[2][0]){
this.valorPost[json]=matriz.data[2][json]
cont=cont+1

}

//guardamos el mes en otro arreglo para usarlo
var Mes= []
for( json in matriz.data[2]){
Mes.push( [this.valorPost[json][0]] ) 
}

console.log( "Mes")
console.log( Mes)

//quitamos el mes del arreglo valor
for( json=0; json<matriz.data[2].length;json++){
this.valorPost[json].shift()

}

console.log("valores A PINTAR");
console.log(this.valorPost);
console.log("CANTIDAD DE PAISES");
console.log(this.etiquetas.length);


this.chartData_LineaTiempo=[["Pais"]]

for( json=0; json<this.paises.length; json++){

//console.log( this.chartData_LineaTiempo[json])
this.chartData_LineaTiempo[0].push( this.paises[json]  )


}
console.log( this.chartData_LineaTiempo)

//-----------------------------------------------------------------


//cantidad de datos entre el numero de etiquetas
console.log("CANTIDAD DE VALORS") 
console.log(matriz.data[2][0].length) 


const saltoEtiqueta= (matriz.data[2][0].length /this.paises.length)

console.log("saltoEtiqueta") 
console.log(saltoEtiqueta)
//cantidad  de etiquetas
const CantidadePaies= this.paises.length
console.log("cantidadPaises") 
console.log(CantidadePaies)


var sgt=0
var elevado=0
var media=0
var mediaTemp=[]

console.log("this.etiquetas.length")
console.log(this.etiquetas.length)

console.log("this.valorPost")
console.log(this.valorPost)

console.log("Mes.length")
console.log(Mes.length)

for(var k=0; k<Mes.length; k++){ 
for(var i=0; i<CantidadePaies; i++){
  
  for(var j=1; j<this.etiquetas.length+1;j++){

//en caso el valor sea -1 se le suma 0
if(this.valorPost[k][(i+(sgt*elevado))]==-1){ this.valorPost[k][(i+(sgt*elevado))]=0}

console.log( "this.valorPost[i+sgt*elevado]" ) 
console.log( this.valorPost[k][(i+(sgt*elevado))] ) 
console.log( "SUMA DE VALORES PARA MEDIA" ) 

console.log( this.valorPost[k][(i+(sgt*elevado))]+"+"+ media ) 

console.log( "valor de k y (i+(sgt*elevado)) " ) 
console.log(  k +"-"+(i+(sgt*elevado))) 


media=this.valorPost[k][(i+(sgt*elevado))] +media
console.log( "Media" )
console.log( media )
/*------------------------------------------------------------------------------*/


sgt=CantidadePaies 
    elevado=Math.pow(2,(j-1) );

//fin i
  }

   console.log("media/this.etiquetas.length")
  console.log(media/this.etiquetas.length)
  mediaTemp.push(media/this.etiquetas.length)
  
 

 console.log("temporal media promedio") 
console.log( mediaTemp )
  media=0
  sgt=0 
  elevado=0


//fin j
}
//fin k
}
 
 var prom=[]

 for( json in matriz.data[2]){
prom.push( Mes[json] ) 

console.log("Mes[json]")

console.log(Mes[json])
}

console.log("promedio") 
console.log( prom )

var aux=0
var salto=this.paises.length
var saltoMes=mediaTemp.length/Mes.length

for(  i=0; i< Mes.length;i++){ 
  console.log("salto")
  for( j=aux; j<saltoMes+aux;j++){

  console.log("iteracion")
  prom[i].push(mediaTemp[j])
  console.log((i+1)+"-"+j)


    }aux=salto+aux
    
}

for(i=0; i<Mes.length;i++ ){

this.chartData_LineaTiempo.push(prom[i])

}





//-------------------------------------------------------------------------------------------

console.log("---------ARREGLO A PINTAR-------")
console.log(this.chartData_LineaTiempo)
this.Gchart_temTiempoPais=this.chartData_LineaTiempo

//---------------------------------------------------------------------------------------------


    },// fin de GraficoPorPais 
  async  GraficoLineaTiempo_etiquetas(){


this.SedioClickG2=true
var cont

//--------------------solicito el parametro cliente/contrado--------------------------------------------

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var contrato = getParameterByName('ctr_id');
console.log("---------con getParameter-------")
console.log(contrato)
this.contrato=2

//---------------------envio el parametro fecha al servido-------------------------------------------
 
   
  const matriz=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${this.contrato}}/report/positivity_by_month_label_country`)
.catch(e => {
    // Capturamos los errores
  this.dialogPais=true 

 
  console.log("mensaje de error");
    console.log(e);
}) 
    
    console.log("AQUI INICIA LA LINEA DE TIEMPO POR ETIQUETA")
      console.log("--------------------------------------")

  console.log("linea de tiempo");
console.log(matriz.data);


for(  json in matriz.data[0]){
this.etiquetas[json]=matriz.data[0][json]
}

this.etiquetas.shift()//quita la primera
console.log("this.etiquetas")
console.log(this.etiquetas)

//obtengo los paises----------------------
   for( var json in matriz.data[1][1]){
this.paises[json]=matriz.data[1][1][json]
}
console.log("PAISES linea de tiempo");
console.log(this.paises);
//---------------------------------------
  

 //obtengo los valores a pintar 
for( json in matriz.data[2][0]){
this.valorPost[json]=matriz.data[2][json]
cont=cont+1

}

//guardamos el mes en otro arreglo para usarlo
var Mes= []
for( json in matriz.data[2]){
Mes.push( [this.valorPost[json][0]] ) 
}

console.log( "Mes")
console.log( Mes)

//quitamos el mes del arreglo valor
for( json=0; json<matriz.data[2].length;json++){
this.valorPost[json].shift()

}

console.log("valores A PINTAR");
console.log(this.valorPost);
console.log("CANTIDAD DE PAISES");
console.log(this.etiquetas.length);


this.chartData_LineaTiempo_Etiqueta=[["Pais"]]

for( json=0; json<this.etiquetas.length; json++){

//console.log( this.chartData_LineaTiempo[json])
this.chartData_LineaTiempo_Etiqueta[0].push( this.etiquetas[json]  )


}
console.log( this.chartData_LineaTiempo_Etiqueta)

//-----------------------------------------------------------------


//cantidad de datos entre el numero de etiquetas
console.log("CANTIDAD DE VALORS") 
console.log(matriz.data[2][0].length) 


const saltoEtiqueta= (matriz.data[2][0].length /this.etiquetas.length)

console.log("saltoEtiqueta") 
console.log(saltoEtiqueta)
//cantidad  de etiquetas
const Cantidadetiqueta= this.etiquetas.length
console.log("Cantidadetiqueta") 
console.log(Cantidadetiqueta)


var sgt=0
var prom=[]
var media=0
var mediaTemp=[]

console.log("this.etiquetas.length")
console.log(this.etiquetas.length)

console.log("this.valorPost")
console.log(this.valorPost)



for(var i=0; i<Mes.length;i++){
  for(var j=0; j<Cantidadetiqueta;j++){
    for(var k=sgt; k<saltoEtiqueta+sgt;k++){

      if(this.valorPost[i][k]==-1){ this.valorPost[i][k]=0 }
     
       console.log("posiciones")
      console.log(i+"-"+k)
      console.log("valor accesado")
      console.log(this.valorPost[i][k])

      media= this.valorPost[i][k]+media

    } 
    
    sgt=saltoEtiqueta+sgt
     console.log("media")
     console.log(media)
mediaTemp.push(media/Cantidadetiqueta)
media=0


  } sgt=0
  media=0


}


//************************ */
 for( json in matriz.data[2]){
prom.push( Mes[json] ) 
}
//*********************************************** */
console.log("promedio") 
console.log( prom )

var aux=0
var salto=this.paises.length
var saltoMes=mediaTemp.length/Mes.length
//---------------------------------------------------------
for(  i=0; i< Mes.length;i++){ 
  console.log("salto")
  for( j=aux; j<saltoMes+aux;j++){

  console.log("iteracion")
  prom[i].push(mediaTemp[j])
  console.log((i+1)+"-"+j)


    }aux=salto+aux
    
}
//-----------------------------------------------

for(i=0; i<Mes.length;i++ ){

this.chartData_LineaTiempo_Etiqueta.push(prom[i])

}
//---------------------------------------------------------
this.Gchart_temTiempoeEtiqueta=this.chartData_LineaTiempo_Etiqueta

//-------------------------------------------------------------------------------------------

console.log("---------data a presentar-------")
console.log(this.chartData_LineaTiempo_Etiqueta)

for(i=1; i<this.chartData_LineaTiempo_Etiqueta[0].length;i++){


this.itemsEtiquetasTiempo.push(this.chartData_LineaTiempo_Etiqueta[0][i])// para el selector de tiempo etiqueta


}





//---------------------------------------------------------------------------------------------


    },// fin de GraficoPorPais 
  async  GraficoPosicionamientoWeb(){

console.log("AQUI COMIENZA POSICIONAMIENTO WEB")
console.log("---------------------------------")


this.SedioClickG=true
  

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

this.contrato =getParameterByName('ctr_id');
console.log("---------con getParameter-------")
console.log(this.contrato)

this.contrato=2



//---------------------envio el parametro fecha al servido-------------------------------------------

const datos=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${this.contrato}/report/positioning`)
.catch(e => {
    // Capturamos los errores
  this.dialogPais=true 


  console.log("mensaje de error");
    console.log(e);
})  
console.log("MATRIZ DE POSICIONAMIENTO WEB");


//CANTIDAD DE TARJETAS A PRESENTAR POR TERMINO
this.cantCard= datos.data[0].length

console.log("this.cantCard")
console.log(this.cantCard)
// COLUMNAS A PRESENTAR


this.cantPais= datos.data[1][0].length


for(var i=0; i<datos.data[1][0].length;i++){

this.items.push(datos.data[1][0][i])
}

console.log("this.items")
console.log(this.items)


console.log("this.cantPais")
console.log(this.cantPais)

for( i=0; i<datos.data[0].length;i++){

this.etiquetaWeb.push(datos.data[0][i])
}

this.itemsE=this.etiquetaWeb
this.itemsE.shift()
//CANTIDAD DE DATOS

var cantNum= datos.data[2].length
var aux=0
var salto=cantNum/this.cantCard

console.log("salto")
console.log(salto)
//PAISES A PRESENTAR

for( i=0; i<datos.data[1][0].length;i++){

this.paisWeb.push( datos.data[1][0][i] )
}
var arraAuxProm=[["kira"]]
this.promedioWeb=[["kira"]]
//this.promedioWeb.push(["kira"])
console.log("this.promedioWeb")
console.log(this.promedioWeb)


for(  i=0; i<this.cantCard;i++){
  console.log("this.promedioWeb[i]")
  console.log(this.promedioWeb[i])

  //if(i+1!=1){
 this.promedioWeb[i+1]=[["kira"]]
 arraAuxProm[i+1]=[["kira"]]
 // }

  for( var j=aux; j<salto+aux;j++){

  //console.log("iteracion")

  this.promedioWeb[i+1].push(datos.data[2][j])
  arraAuxProm[i+1].push(datos.data[2][j])

  //console.log((i+1)+"-"+j)


    }aux=salto+aux

    
    
}

console.log("this.promedioWeb??")
console.log(this.promedioWeb)

//console.log("datos.data[3]")
//console.log(datos.data[3])

/*
// con esto resuelvo los fomrtados de lectura de vue
datos.data[3].unshift([])
for(i=0; i<this.cantCard;i++){

datos.data[3][i+1].unshift([])


}
//datos.data[3][2][3]=datos.data[3][2][2] // TRAMPA
*/
//-----PROCESAMIENTO DE DATOS PARA PINTAR----------------
//var cantNoVacios=0
//var sgt=0

//-------CREA UNA MATRIZ AUX PARA ORDENAR LA MATRIZ A PINTAR


arraAuxProm.shift()

for(i=0; i<this.cantCard;i++){

arraAuxProm[i].shift()


}

console.log("arraAuxProm")
console.log(arraAuxProm)

//--------------------------------------------------------

this.colores.push([""])
console.log("datos.data[3]")
console.log(datos.data[3])
//datos.data[3]

for( i=0; i<this.cantCard ; i++){
  this.colores.push([[""]])
  for( j=0; j<this.cantPais ;j++){

    if(arraAuxProm[i][j]==-1){ this.colores[i+1].push(this.ColorVacio)}
    else{ 
      
      this.colores[i+1].push( datos.data[3][i][0] ) 
      datos.data[3][i].shift()     }
    
   
  }

}

console.log("this.colores")
console.log(this.colores)





},

  async Detractores(){

this.contrato=2
console.log("AQUI COMIENZA DETRACTORES WEB")
console.log("---------------------------------")

var matriz=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${this.contrato}/report/complaints`)
.catch(e => {
    // Capturamos los errores
  this.dialogPais=true 
  


  console.log("mensaje de error");
    console.log(e);
})  


  console.log("matriz.data");
 console.log(matriz.data);

this.chartData_denuncia=[['Detractor', 'Posicionado', 'Despocionado']]

for(var i=0;i<matriz.data.length;i++){
  this.chartData_denuncia.push(matriz.data[i])
}


        console.log("this.chartData_denuncia");
        console.log(this.chartData_denuncia);

/*
this.chartData_denuncia= [
        ['Detractores', 'Posicionados', 'Desposicionados' ],
        ['www.algo.com', 10, 24],
        ['www.algo.com', 16, 22],
        ['www.algo.com', 28, 19]
      ]

*/
this.chartData_denunciaPie=[['Detractor', 'Valor']]
var suma=0
this.chartData_denunciaPie.push(["Posicionados"])
this.chartData_denunciaPie.push(["Desposicionados"])

for(i=1;i<3;i++){
  for(var j=0; j<this.chartData_denuncia.length-1; j++){
    suma=this.chartData_denuncia[j+1][i]+suma

}
this.chartData_denunciaPie[i].push(suma)
suma=0

}
console.log("this.chartData_denunciaPie")
console.log(this.chartData_denunciaPie)


},//fin metodo de detractorse

ir(url){

// Abrir nuevo tab
var win = window.open(url)
// Cambiar el foco al nuevo tab (punto opcional)
win.focus();

      },


  
    }, //fin metodos
   
   mounted: function () {


  this.$nextTick(function () {


    // Código que se ejecutará solo después de
    // haber renderizado la vista completa

    this.LanzarGraficas()
      console.log("inicia la AppWEB")






  })
 
 
 }
   
 }  
  
 // fin del scrip 
</script>







   <style lang="scss" scoped >


    font{
  font-size:3.2em;
}
    h4 {
	font-size:1.5em;
}
h2 {
	font-size:2.2em;
  color:#107192

}
h3 {
	font-size:1.5em;
  color:#107192
}
p {
  
  font-size:1.1em;
  font-weight: bold;
  color:#000
  }

h1{
font-size:1.5em;
  color:#fff
}


#hexagonos{
width:25%
}

#card_pais_etiqueta{

   height:"5%"
}
#card_contenedor_pais_etiqueta{

    width:"5%"
}
#imagen_pais_etiqueta{

   width:"100%"
}

#menu-google{

   width:"5%"
}
  


 @media screen and (min-width: 199px) and (max-width: 320px) {

font{
  font-size:0.6em;
}
h4 {
	font-size:0.6em;
}
h2 {
	font-size:1em;
  color:#107192

}

h3 {
	font-size:1em;
  color:#107192
}

p {
  
  font-size:0.6em;
  font-weight: bold;
  }

  h1{
font-size:0.8em;
  color:#fff
}


#hexagonos{
width:40%


}

 }

@media screen and (min-width: 321px) and (max-width: 768px) {

font{
  font-size:1em;
}
h4 {
	font-size:0.8em;
}

h2 {
	font-size:1.2em;
  color:#107192

}

h3 {
	font-size:1em;
  color:#107192
}
p {
  
  font-size:0.7em;
  font-weight: bold;
  }

  h1{
font-size:1em;
  color:#fff
}

#hexagonos{
width:42%


}

#card_pais_etiqueta{

   height:"10%"
}
#card_contenedor_pais_etiqueta{

    width:"10%"
}
#imagen_pais_etiqueta{

   width:"100%"
}

#menu-google{

   width:"10%"
}



 }

 @media screen and (min-width: 768px) and (max-width: 1024px) {

font{
  font-size:2.1em;
}
h4 {
	font-size:1.2em;
}
h2 {
	font-size:1.6em;
  color:#107192

}

h3 {
	font-size:1.2em;
  color:#107192
}
 
p {
  
  font-size:0.9em;
  font-weight: bold;
  }

h1{
font-size:1.5em;
  color:#fff
}


#hexagonos{
width:38%


}


 }



</style>



