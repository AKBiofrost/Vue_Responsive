
<template>
<v-container fluid>
 
 
    <v-card 
    
    flat
    color="#107192"
   > 

<!-- TITULO posicionamiento web--> 
<v-card-title 
   class="d-flex justify-center mb-2"
     > <h1> POSICIONAMIENTO SERP </h1>
   </v-card-title>


<!-- posicionamiento web--> 
    <v-card 
     class=" justify-center  pa-5 mb-5"
  elevation="10"
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


  <div class="text-center">
    <v-menu
      open-on-hover
      top
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card
          flat
          color="#fff"
          dark
          v-bind="attrs"
          v-on="on"


        >
         <div 
   
  > 
<h2 >{{paisWeb[PosicionPais]}} </h2>
</div>
        </v-card>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
         @click="capturarItemPais(index)" 

        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>



    </v-menu>
  </div>


<v-spacer></v-spacer>
<v-card
  flat
  width="5%" 
      
>
<v-img   
id="imagen_pais_etiqueta"
       
      justify="center"
 src="https://report.cool-shockley.142-44-201-186.plesk.page/images/VUE_marcador.svg"
      ></v-img>
</v-card>


<div class="text-center">
    <v-menu
      open-on-hover
      top
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card
          flat
          color="#fff"
          dark
          v-bind="attrs"
          v-on="on"


        >
         <div 
   
  > 
<h2 >{{etiquetaWeb[ PosicionEtiqueta]}} </h2>
</div>
        </v-card>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, indexs) in itemsE"
          :key="indexs"
         @click="capturarItemE(indexs)" 

        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>



    </v-menu>
  </div>









  </v-card>




<v-card
  flat
 class="  pa-5 mb-5"
  color=#d8d6d7
>

<v-card
  flat
  class="  pa-5 mb-3"
  color=#d8d6d7
  
  
>
<v-row
 >
<!-------------------------------------------->
<v-card
  color=#fff
  class=" d-flex justify-end pa-2 mb-2 rounded-xl "
  width="60%"
  flat
>
<!-- barra de busqueda-->
<v-card
  flat
  width="5%" 
 class=" d-flex justify-end rounded-0"
   justify="center"
>
  <v-img 
       class=" pa-2 "
        src="https://report.cool-shockley.142-44-201-186.plesk.page/images/buscar (2).svg"
      
        
        ></v-img>
</v-card>

</v-card>

<v-spacer></v-spacer>
<!-------------------------------------------->
<!---
<v-card
  
  color=#d8d6d7
  class=" d-flex justify-center "
  height="50%"
  
>
<v-card
  flat
  color=#d8d6d7
   width="5%"
  class=" d-flex justify-end  "
  
>
  <v-img 
         width="100%"
        src="https://report.cool-shockley.142-44-201-186.plesk.page/images/apps-menu.svg" 
        ></v-img>
</v-card>

</v-card>


<v-card
  
  color=#d8d6d6
  class=" d-flex justify-center "
  width="20%"
  
>
<v-card
  
   color=#d8d6d7
 max-width="50%" 
 class=" d-flex justify-end rounded-0 ml-8"
   justify="center"
>
  <v-img  
  
       
        src="https://report.cool-shockley.142-44-201-186.plesk.page/images/imagen-de-usuario-con-fondo-negro.svg"
        
        
        ></v-img>
</v-card>

</v-card>
---------------------------------------->

</v-row>
</v-card>
<!--  fin barra de busqueda-->
 
    <v-card
      flat
      color=#d8d6d7
      height="950"
      
    >
    <v-col>



 <v-carousel 
 v-model="model"
 height="950"
  >
<v-carousel-item
      v-for="( i) in 2"
      :key="i"
    >
<div
        v-for="(color,indice) in colores[PosicionPais][PosicionEtiqueta]"
          :key="color.name" 
        >
        <v-row    
          v-if="color.category>-1 & indice <10"
>
<v-col >

 <v-card
 v-if="color.category==0"
  elevation="10"
  width="70%"
  color="teal lighten-4"
  class=" d-flex justify-center ma-2 "
>
  <v-card
  elevation="10"
  @click=" ir(color.url) "
  width="90%"
  color=#fff
>
             <p> {{color.url}}</p>
            
      
</v-card>

</v-card>
<!------------------------------------->
<v-card
 v-if="color.category==1"
  elevation="10"
  width="70%"
  color="#98b9d8"
  class=" d-flex justify-center ma-2 "
>
  <v-card
  elevation="10"
  @click=" ir(color.url) "
  width="90%"
  color=#fff
>
  <p> {{color.url}} </p>
</v-card>

</v-card>
<!------------------------------------->
<v-card
 v-if="color.category==2"
  elevation="10"
  width="70%"
  color="#46c2e6"
  class=" d-flex justify-center ma-2 "
>
  <v-card
  elevation="10"
  @click=" ir(color.url) "
  width="90%"
  color=#fff
>
  <p> {{color.url}} </p>
</v-card>

</v-card>
<!------------------------------------->
<v-card
 v-if="color.category==3"
  elevation="10"
  width="70%"
  color="#079597"
  class=" d-flex justify-center ma-2 "
>
  <v-card
  elevation="10"
  @click=" ir(color.url) "
  width="90%"
  color=#fff
>
  <p> {{color.url}} </p>
</v-card>

</v-card>
<!------------------------------------->
<v-card
 v-if="color.category==4"
  elevation="10"
  width="70%"
  color="#b4413e"
  class=" d-flex justify-center ma-2 "
>
  <v-card
  elevation="10"
  @click=" ir(color.url) "
  width="90%"
  color=#fff
>
  <p> {{color.url}} </p>
</v-card>

</v-card>
<!------------------------------------->
<v-card
 v-if="color.category==5"
  elevation="10"
  width="70%"
  color="#892b77"
  class=" d-flex justify-center ma-2 "
>
  <v-card
  elevation="10"
  @click=" ir(color.url) "
  width="90%"
  color=#fff
>
  <p> {{color.url}} </p>
</v-card>

</v-card>


 



</v-col>



        </v-row>
<v-card 
  color=#d8d6d7
  flat
v-if="color.category==-1 & indice <1">

  <font> País no contratado</font>
</v-card>

</div>

      
    </v-carousel-item>
  </v-carousel>










    </v-col>
    </v-card>
  
</v-card>


  
    </v-card>

<!-- fin de posicionamiento web--> 


<!--alerta-->  
  <template id="AlertaPorPais" >
  <div class="text-center">
    <v-dialog
      v-model="dialog"
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
            @click="dialog = false"
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
   
 export default {
  //------------------------------------------------------------------------------------  
   
 data () {
//------------------------------------------------------------------------------------
    return {
        
        dialog: false,
      
//-------------------------------------------------------------------------------//
        PosicionEtiqueta:1,
        PosicionPais:1, 
        model: 0,
        items: [],
        itemsE: [],
//---------------------------------------------------------------------------------//
    
        
        CantPaises:null,
        CantEtiqueta:null,
     
        //----------------------------------------------------------------------//
     
       
        contrato:2, 
      
      
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
        
        MesGrafica:[],
        MyLink:'',

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

      }
    }, 

// inicio de metodos de la grafica
 
    methods:{

capturarItemPais(index){

this.PosicionPais=index+1


},
capturarItemE(indexs){

this.PosicionEtiqueta=indexs+1


},
LanzarGraficas(){
this.GraficoPosicionamientoWeb() //no tocar
      
      },
//-----------------------------------------------------------------------------------------------
   
  async  GraficoPosicionamientoWeb(){

console.log("AQUI COMIENZA POSICIONAMIENTO WEB")
console.log("---------------------------------")

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
  this.dialog=true 


  console.log("mensaje de error");
    console.log(e);
})  

//CANTIDAD DE TARJETAS A PRESENTAR POR TERMINO

this.cantCard= datos.data[0].length
this.cantPais= datos.data[1][0].length

console.log("this.cantCard")
console.log(this.cantCard)

console.log("this.cantPais")
console.log(this.cantPais)


for(var i=0; i<datos.data[1][0].length;i++){
this.items.push(datos.data[1][0][i])
}

console.log("this.items")
console.log(this.items)


for( i=0; i<datos.data[0].length;i++){
this.etiquetaWeb.push(datos.data[0][i])
}

for( i=0; i<datos.data[0].length;i++){

this.itemsE.push(datos.data[0][i])

}

//this.etiquetaWeb.shift()

console.log("this.etiquetaWeb")
console.log(this.etiquetaWeb)

//this.itemsE=this.etiquetaWeb

//this.itemsE.shift()

console.log("this.itemsE")
console.log(this.itemsE)



//CANTIDAD DE DATOS

var cantNum= datos.data[2].length
var aux=0
var salto=cantNum / this.cantCard
var arraAuxProm=[["kira"]]

//PAISES A PRESENTAR
for( i=0; i<datos.data[1][0].length;i++){
this.paisWeb.push( datos.data[1][0][i] )
}

console.log("this.paisWeb")
console.log(this.paisWeb)


//IMPORTANTE SIRVE PARA CONOCER LOS PROMEDIOS Y DECIR SI FUE CONTRATADO O NO EL PAIS
for(  i=0; i<this.cantCard;i++){ 
 arraAuxProm[i+1]=[["kira"]]
  for( var j=aux; j<salto+aux;j++){
    arraAuxProm[i+1].push(datos.data[2][j])
    }aux=salto+aux   
}
//------------------------------------------------------------------------------


arraAuxProm.shift()
for(i=0; i<this.cantCard;i++){
    arraAuxProm[i].shift()
}


//--------------------------------------------------------

this.colores.push([""])

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


