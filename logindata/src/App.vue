<template>



  <v-app    style="
  background: #107192;
"   >
<v-card
    color="#107192"
    flat
    height="100px"
    tile
  >



  <v-app-bar 
   height="70px"
  fixed dense
  color="#fff"
  >
  
      

      <v-toolbar-title>
        
<v-card
  flat
  dense
  @click="scrollToTop" 
>
         <v-img 
       
        src="https://report.cool-shockley.142-44-201-186.plesk.page/images/Mas-Que-Digital-Logo.png"
         
        
        ></v-img>
</v-card>

      </v-toolbar-title>


      <v-spacer></v-spacer>
<div class="text-center">
    <v-menu
      v-model="alerta"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
      transition="scale-transition"
      origin="center center"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          color="indigo"
          dark
          v-bind="attrs"
          v-on="on"
          @click="cargardata"
        >
          
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
      </template>

    <v-card>
        <v-col>




             <v-btn
            text
            @click="menu = false"
          >
           <small> Alerta 1</small>
          </v-btn>

 <v-spacer></v-spacer>

           <v-btn
            text
            @click="menu = false"
          >
             <small> Alerta 2</small>
          </v-btn>

          <v-spacer></v-spacer>

           <v-btn
            text
            @click="menu = false"
          >
             <small> Alerta 3</small>
          </v-btn>

          <v-spacer></v-spacer>

           <v-btn
            text
            @click="menu = false"
          >
             <small> Alerta 4</small>
          </v-btn>
        
        </v-col>

      </v-card>
    </v-menu>
  </div>
    
      

<div class="text-center">
    <v-menu
      v-model="usuario"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
       transition="scale-transition"
      origin="center center"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          color="indigo"
          dark
          v-bind="attrs"
          v-on="on"
          @click="cargardata"
        >
          
           <v-avatar size="34">
              <img
                alt="user"
                src="https://cdn.vuetifyjs.com/images/john.jpg"
              >
            </v-avatar>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
          

            <v-list-item-content>
              <v-list-item-title> {{NombreUsers}}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
             
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
         

          
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="sesion"
          >
          <navigation-link url=" https://cool-shockley.142-44-201-186.plesk.page/logout">
  Cerrar sesión
          </navigation-link>

          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>


            
       



<div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
       transition="scale-transition"
      origin="center center"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          color="indigo"
          dark
          v-bind="attrs"
          v-on="on"
          @click="cargardata"
        >
          
          <v-icon>mdi-menu </v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-col>




             <v-btn
            text
            @click="menu = false"
          >
           <small> positividad por país</small>
          </v-btn>

 <v-spacer></v-spacer>

           <v-btn
            text
            @click="menu = false"
          >
             <small> positividad por etiqueta</small>
          </v-btn>

          <v-spacer></v-spacer>

           <v-btn
            text
            @click="menu = false"
          >
             <small> Posicionamiento SERP</small>
          </v-btn>

          <v-spacer></v-spacer>

           <v-btn
            text
            @click="menu = false"
          >
             <small> Detractores</small>
          </v-btn>
        
        </v-col>

      </v-card>
    </v-menu>
  </div>

<template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
          background-color="transparent"
          grow
         
        >
          <v-tabs-slider ></v-tabs-slider>

          <v-tab
          color="#107192"
            v-for="item in items"
            :key="item"
          >
           {{item}}
          </v-tab>
        </v-tabs>
      </template>






</v-app-bar>




 



  
  </v-card>
    <v-main>
      <router-view/>

 <v-tabs-items 
  
 v-model="tab">
     <v-card
     
      color="azul"

     >
      <v-tab-item>
       
         <PositividadPais></PositividadPais>


        
      </v-tab-item>


<v-tab-item>
       
         <PositividadEtiqueta></PositividadEtiqueta>


        
      </v-tab-item>

      <v-tab-item
       
      >
       
<SERP></SERP>

        
      </v-tab-item>


     </v-card>  
    </v-tabs-items>
    </v-main>
  </v-app> 
</template>

<script>
import axios from "axios"; 
import PositividadPais from '@/components/testPositividadPais.vue'
import PositividadEtiqueta from '@/components/testPositividadEtiqueta.vue'
import SERP from '@/components/testPosicionamientoSERP.vue'

export default {
  name: 'App',

  data: () => ({
    //
      NombreUsers: null, 
    fav: true,
      menu: false,
      message: false,
      hints: true,

        tab: null,
        items: [
          'Positividad por Pais', 'Positividad por Etiqueta', 'Posicionamiento SERP', 'Alertas', 'Detractores','Otra opcion ','Otra opcion ','Otra opcion ','Otra opcion '
        ],
       
  }),


methods:{

sesion(){

this.menu = false
window.location = "https://cool-shockley.142-44-201-186.plesk.page/logout"


},
async cargardata(){
  
console.log("DATOS DE USUARIO")
  
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

//----------------------------------//

this.NombreUsers=matriz.data.usr_name



},

scrollToTop() {
                //window.scrollTo(0,0);
                window.scrollTo({
                top: 0,
                 left: 0,
                behavior: 'smooth'
});
           }





},
 components: {
    PositividadPais,
    PositividadEtiqueta,
    SERP
  },


};



</script>

<style>
/* Helper classes */
.azul {
  background-color: #107192 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
