
<!--tarjeta principal --> 
<v-row>
  <v-card
    class="mx-auto pa-4"
    max-width="600"
    elevation="20"
    ref="logindate"
>

 
 <v-img src="https://cool-shockley.142-44-201-186.plesk.page/static/images/Mas-Que-Digital-Logo.png"></v-img>

 <!--titulo -->
    <v-card 
    class="d-flex justify-center mb-2"
    flat
    > 
    <h2>Realizar Consulta</h2>
    </v-card >
  <!--fin titulo -->  
  

<!-- fechas-->

  <v-row 
  justify="center"
  >
    <v-date-picker 
    v-model="pickerPrincipal" 
    elevation="7"  mb-5
    range
    :min="minimo"
    :max="maximo"></v-date-picker>

<v-col
      cols="15"
      sm="6"
      justify="center"
    >

 <template>
   <h3 justify="center">
          <v-text-field
            v-model="pickerPrincipal"
            prepend-icon="mdi-calendar"
            readonly
            outlined
            dense
            label="Fecha a Consultar"
            justify="center"
          ></v-text-field>
          </h3>
        </template>
    </v-col>
  </v-row>
  <!-- Boton consultar-->
  <div class="text-center pa-3">
     <v-btn
      class="ma-2"
      color="success"
      @click="$vuetify.goTo($refs.Tablero)"
  >
      Consultar
      </v-btn>
   </div >
  </v-card>
</v-row>

<!-- inicio del tablero-->
  <div 
 flat
  class="d-flex justify-center  pa-5">
 </div>
<!-- inicio del tablero-->
  <v-card  
    class="d-flex justify-center  pa-2"
    ref="Tablero"
    flat>


    <v-col>
      <v-card-title class="d-flex justify-center  pa-2 mb-5" > 
        <h1>Tablero Principal</h1> 
        </v-card-title>
  <v-row justify="center" >


<v-card  
  width="250"
 class="d-flex justify-center mb-5"
>
<v-col  align="center"
>
<v-card 
 class="d-flex justify-center"
 width="100"
 flat
>
<v-img 
src="https://1.bp.blogspot.com/-k9j1IZi_99Y/YJR0xR4s2SI/AAAAAAAACJw/G-ZV2NEJ7kUZiKoFQUjUgPonyS6714XxwCNcBGAsYHQ/s512/porcentaje%2B%25281%2529.png"
></v-img>

</v-card>

 <h1>Positividad %</h1>

   <!-- Boton por pais-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230"
       @click="$vuetify.goTo($refs.positividad_por_pais)" 
      >
     Por Pais
    </v-btn>
  </div>
  <!--/////////////////-->
     <!-- Boton por etiqueta-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230"
      @click="$vuetify.goTo($refs.positividad_por_etiqueta)" 
    >
     Por Etiqueta
    </v-btn>
  </div>
  <!--/////////////////-->
     <!-- Boton por pais y etiqueta-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230"
       @click="$vuetify.goTo($refs. positividad_por_pais_etiqueta)"
   
    >
     Por Pais y etiqueta
    </v-btn>
  </div>
  <!--/////////////////-->
</v-col>
</v-card>
<!-- //////////////-->
<v-card  
  width="250"
 class="d-flex justify-center mb-5"
>
<v-col  align="center"
>
<v-card 
 class="d-flex justify-center"
 width="100"
 flat
>
<v-img 
src="https://1.bp.blogspot.com/-Fm9JYh4Yvno/YJR1GdsmFFI/AAAAAAAACJ4/jb8SVmTKB4obAr_dFnKKfxcJsD6w0--CwCNcBGAsYHQ/s512/contenido.png"
></v-img>

</v-card>

 <h1>Gestión MQD</h1>

    <!-- Boton por medios custodiados-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230"
        @click="$vuetify.goTo($refs. Medios_Custodiados)"
   

      Medios_Custodiados
    >
     Medios Custodiados
    </v-btn>
  </div>
  <!--/////////////////-->
     <!-- Boton por medios activos-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230" Medios_Activo
       @click="$vuetify.goTo($refs. Medios_Activo)"
   
    >
     Por Medios Activos
    </v-btn>
  </div>
  <!--/////////////////-->
     <!-- Boton por Trafico Otorgado-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230"
       @click="$vuetify.goTo($refs. Tráfico_Otorgado)"    
    >
     Por Trafico Otorgado
    </v-btn>
  </div>
  <!--/////////////////-->
</v-col>
</v-card>
<!-- //////////////-->
<v-card  
  width="250"
 class="d-flex justify-center mb-5"
>
<v-col  align="center"
>
<v-card 
 class="d-flex justify-center"
 width="100"
 flat
>
<v-img 
src="https://1.bp.blogspot.com/-XH9W-Ag4uKI/YJR1emIuaPI/AAAAAAAACKA/HgbpoWtoT4knas0vxQ_zZPFDLtVfkrgOgCNcBGAsYHQ/s512/me-gusta.png"
></v-img>

</v-card>

 <h1>Detractores</h1>

    <!-- Boton por Lista Detractores-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230"
         @click="$vuetify.goTo($refs. Lista_detractores)"
        
    >
     Lista de Detractores
    </v-btn>
  </div>
  <!--/////////////////-->
     <!-- Boton por Noticias-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230"
      
       @click="$vuetify.goTo($refs. Lista_Noticias)" 
    
    >
     Por Noticias
    </v-btn>
  </div>
  <!--/////////////////-->
     <!-- Boton por Cronologia-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230"
        @click="$vuetify.goTo($refs.detractor_cronologia)"  
    >
     Por Cronologia
    </v-btn>
  </div>
  <!--/////////////////-->

</v-col>
</v-card>
 <!-- //////////////-->
  </v-row>

<v-row justify="center">

<v-card  
  width="250"
 class="d-flex justify-center"
>
<v-col  align="center"
>
<v-card 
 class="d-flex justify-center"
 width="100"
 flat
>
<v-img 
src="https://1.bp.blogspot.com/-EIHF25BrXCE/YJR3IbOjF_I/AAAAAAAACKI/Vp_a9lhpBQon4QrDCfhG2EA0xOAnYzYHQCNcBGAsYHQ/s512/anuncio.png"
></v-img>

</v-card>

 <h1>Denuncias</h1>

    <!-- Boton por URL Denunciados-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230"
       @click="$vuetify.goTo($refs.  denuncias_URL_Denunciados)"  
    >
     URL Denunciados
    </v-btn>
  </div>
  <!--/////////////////-->
     <!-- Boton por cronologia-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230"  
      @click="$vuetify.goTo($refs.  denuncia_cronologia)" 
    >
     Por Cronologia
    </v-btn>
  </div>
  <!--/////////////////-->
     <!-- Boton por Estadisticas-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230"
    >
     Por Estadisticas
    </v-btn>
  </div>
  <!--/////////////////-->


</v-col>
</v-card>
<!-- //////////////-->
<v-card  
  width="250"
 class="d-flex justify-center"
>
<v-col  align="center"
>
<v-card 
 class="d-flex justify-center"
 width="100"
 flat
>
<v-img 
src="https://1.bp.blogspot.com/-CyXmJvgB8wY/YJR3KBcm5tI/AAAAAAAACKM/GQJzpus1CUk6v5fulFe5iKPE-wU-rFJbgCNcBGAsYHQ/s320/ubicacion-desactivada.png"
></v-img>

</v-card>

<h1> Desindexados</h1>

    <!-- Boton por URL Denunciados-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230" 
      @click="$vuetify.goTo($refs.desindexados_URL_Denunciados)" 
    >
     URL Denunciados
    </v-btn>
  </div>
  <!--/////////////////-->
     <!-- Boton por cronologia-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230"
      
      @click="$vuetify.goTo($refs.desindexados_cronologia)"
      
       detractor_cronologia
    >
     Por Cronologia
    </v-btn>
  </div>
  <!--/////////////////-->
     <!-- Boton por Estadisticas-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230"
    >
     Por Estadisticas
    </v-btn>
  </div>
  <!--/////////////////-->
</v-col>
</v-card>
<!-- //////////////-->
<v-card  
  width="250"
 class="d-flex justify-center"
>
<v-col  align="center"
>
<v-card 
 class="d-flex justify-center"
 width="100"
 flat
>
<v-img 
src="https://1.bp.blogspot.com/-TmAK82XIn3U/YJR3fUjmYRI/AAAAAAAACKU/ajhNRaZ-6Qs8kWfgRHWRkIJPQYLCl6_BwCNcBGAsYHQ/s512/signo-negativo-en-el-portapapeles-medico.png"
></v-img>

</v-card>

 <h1>Negativos Post</h1>

 
    <!-- Boton por URL Negativos Post-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230"
     @click="$vuetify.goTo($refs.negativoPOS_URL_Denunciados)"

     
    >
     URL Negativos Post
    </v-btn>
  </div>
  <!--/////////////////-->
     <!-- Boton por cronologia-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230"
        @click="$vuetify.goTo($refs.    negativoPOS_URL_Denunciados)"

    >
     Por Cronologia
    </v-btn>
  </div>
  <!--/////////////////-->
     <!-- Boton por Estadisticas-->
  <div class="text-center mb-2">
    <v-btn
      rounded
      color="primary"
      dark
      width="230"
    >
     Por Estadisticas
    </v-btn>
  </div>
  <!--/////////////////-->
</v-col>
</v-card>
 <!-- //////////////-->

  </v-row>
    </v-col>
  

  

</v-card>
<!-- fin del tablero-->


<!--%positividad por pais-->
<div id="positividad">
<v-card ref="positividad_por_pais"
        flat
>
   <v-card-title 
   class="d-flex justify-center mb-2"
     >Positividad por pais
   </v-card-title>
   
   <v-row>

     <!--boton tablero-->  
    <v-btn
      class="ma-2"
      color="success"
         @click= " $vuetify.goTo($refs.Tablero)"
 >Tablero
     
    </v-btn>
  <!--boton cosultar-->  
  <v-btn
    class="ma-2"
    color="primary"
    @click= "DatosPorPais"
    :disabled="SedioClick"
    >Cargar datos </v-btn>
 <!--Inicia dialogPicker-->  
<v-dialog
        ref="dialog"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="pickerPorPais"
            label="Nueva Fecha a Consultar"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="pickerPorPais"
          range
          :min="minimo"
          :max="maximo"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="OkPorPais"

            
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
    
    </v-row>
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
      Asegurece de consultar fechas contratadas
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

 <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Pais
          </th>
          <th class="text-left">
            %
          </th>
        </tr>
      </thead>
      <tbody id="porPais" >
       <!--Se llena de forma dinamica con el JS-->
      </tbody>
    </template>
  </v-simple-table>



</v-card>
</div>

<!--%positividad por etiqueta-->
<v-card ref="positividad_por_etiqueta"
flat
>
   <v-card-title class="d-flex justify-center mb-2"
     >Positividad por Etiqueta
   </v-card-title>
<v-row>
    <v-btn
      class="ma-2"
      color="success"
         @click="$vuetify.goTo($refs.Tablero)"
  >
      Tablero

    </v-btn>

    <v-btn
    class="ma-2"
    color="primary"
    @click= "DatosPorEtiqueta"
    :disabled="SedioClick1"
    >Cargar datos </v-btn>
 <!--Inicia dialogPicker-->  
<v-dialog
        ref="dialogEtiqueta"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="pickerPorEtiqueta"
            label="Nueva Fecha a Consultar"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="pickerPorEtiqueta"
          range
          :min="minimo"
          :max="maximo"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="OkPorEtiqueta"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
    
</v-row>
<!--alerta-->  
  <template id="AlertaPorEtiqueta" >
  <div class="text-center">
    <v-dialog
      v-model="dialogEtiqueta"
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
      Asegurece de consultar fechas contratadas
    </v-alert>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialogEtiqueta = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </template>
<!--alerta-->  
 <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Etiqueta
          </th>
          <th class="text-left">
            Descripción
          </th>
          <th class="text-left">
            %
          </th>
        </tr>
      </thead>

      <tbody id="porEtiqueta">
        <!--Se llena de forma dinamica con el JS-->
      </tbody>

    </template>
  </v-simple-table>

</v-card>
<!--%positividad por pais y etiqueta-->

<v-card ref="positividad_por_pais_etiqueta"
flat
>
   <v-card-title class="d-flex justify-center mb-2"
     >Positividad por Pais y Etiqueta
   </v-card-title>
<v-row>
    <v-btn
      class="ma-2"
      
      color="success"
         @click="$vuetify.goTo($refs.Tablero)"
  
    >
      Tablero
    
    </v-btn>
    <v-btn
    class="ma-2"
    color="primary"
    @click= "DatosPorEtiquetaPais"
    :disabled="SedioClick2"
    >Cargar datos </v-btn>

     <!--Inicia dialogPicker-->  
<v-dialog
        ref="dialogEtiquetaPais"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="pickerPorEtiquetaPais"
            label="Nueva Fecha a Consultar"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="pickerPorEtiquetaPais"
          range
          :min="minimo"
          :max="maximo"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="OkPorEtiquetaPais"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
    
</v-row>

<!--alerta-->  
  <template id="AlertaPorEtiquetaPais" >
  <div class="text-center">
    <v-dialog
      v-model="dialogEtiquetaPais"
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
      Asegurece de consultar fechas contratadas
    </v-alert>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialogEtiquetaPais = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </template>
<!--alerta-->  

 <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Pais
          </th>
          <th class="text-left">
           Etiqueta
          </th>
          <th class="text-left">
            Descripción
          </th>
          <th class="text-left">
            %
          </th>
        </tr>
      </thead>
      <tbody id="porEtiquetaPais" >

        <!--Se llena de forma dinamica con el JS-->
        
      </tbody>
    </template>
  </v-simple-table>

     <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="5"
       max-width="600"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>


</v-card>
<!--Gestion MQD Medios_Custodiados-->
<v-card ref="Medios_Custodiados"
flat
>
   <v-card-title class="d-flex justify-center mb-2"
     >Medios Custodiados
   </v-card-title>
<v-row>

    <v-btn
      class="ma-2"
      color="success"
         @click="$vuetify.goTo($refs.Tablero)"
  
    >
      Tablero
     
    </v-btn>

    <v-btn
    class="ma-2"
    color="primary"
    @click= "DatosMQD_Medios_Custodiados"
    :disabled="SedioClick3"
    >Cargar datos </v-btn>

  <!--Inicia dialogPicker-->  
<v-dialog
        ref="dialogMedios_Custodiados"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="pickerPorMedios_Custodiados"
            label="Nueva Fecha a Consultar"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="pickerPorMedios_Custodiados"
          range
          :min="minimo"
          :max="maximo"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="OkPorMQD_Medios_Custodiado"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
    

    </v-row>


<!--alerta-->  
  <template id="AlertaPorMedios_Custodiados" >
  <div class="text-center">
    <v-dialog
      v-model="dialogMedios_Custodiados"
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
      Asegurece de consultar fechas contratadas
    </v-alert>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialogMedios_Custodiados = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </template>
<!--alerta-->  



 <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           correos
          </th>
          <th class="text-left">
           medios custodiados
          </th>

        </tr>
      </thead>
      <tbody id="datosMQD_Medios_Custodiados">
      
      </tbody>
    </template>
  </v-simple-table>

</v-card>
<!--Gestion MQD Medios_Activo-->
<v-card ref="Medios_Activo"
flat
>
   <v-card-title class="d-flex justify-center mb-2"
     >Medios Activo
   </v-card-title>

<v-row>
    <v-btn
      class="ma-2"
    color="success"
         @click="$vuetify.goTo($refs.Tablero)"
  
    >
      Tablero
     
    </v-btn>
    <v-btn
    class="ma-2"
    color="primary"
    @click= "DatosMQD_Medios_Activo"
    :disabled="SedioClick4"
    >Cargar datos </v-btn>

<!--Inicia dialogPicker-->  
<v-dialog
        ref="dialogMedios_Activo"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="pickerPorMedios_Activo"
            label="Nueva Fecha a Consultar"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="pickerPorMedios_Activo"
          range
          :min="minimo"
          :max="maximo"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="OkPorMQD_Medios_Activo"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
  
</v-row>

<!--alerta-->  
  <template id="AlertaPorMedios_Activo" >
  <div class="text-center">
    <v-dialog
      v-model="dialogMedios_Activo"
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
      Asegurece de consultar fechas contratadas
    </v-alert>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialogMedios_Activo = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </template>
<!--alerta-->  


 <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Medio
          </th>
          <th class="text-left">
           Estrategia
          </th>

        </tr>
      </thead>
      <tbody id="datosMQD_Medios_Activos">
       
      </tbody>
    </template>
  </v-simple-table>

</v-card>
<!--Gestion MQD Tráfico Otorgado -->
<v-card ref="Tráfico_Otorgado"
flat
>
   <v-card-title class="d-flex justify-center mb-2"
     >Tráfico Otorgado
   </v-card-title>

    <v-btn
      class="ma-2"
      
      color="success"
         @click="$vuetify.goTo($refs.Tablero)"
  
    >
      Tablero
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
    <v-btn
    class="ma-2"
    color="primary"
    @click= "DatosPorPais"
    :disabled="SedioClick5"
    >Cargar datos </v-btn>

    
        <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="5"
       max-width="600"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

</v-card>
<!--Detractores Lista_detractores-->
<v-card ref="Lista_detractores"
flat
>
   <v-card-title class="d-flex justify-center mb-2"
     >Lista Detractores
   </v-card-title>

    <v-btn
      class="ma-2"
     color="success"
    @click="$vuetify.goTo($refs.Tablero)"
  
    >
      Tablero
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
    <v-btn
    class="ma-2"
    color="primary"
    @click= "DatosPorPais"
    :disabled="SedioClick5"
    >Cargar datos </v-btn>
 <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Detracores
          </th>
          <th class="text-left">
           Posicisionados
          </th>
          <th class="text-left">
           Desposicisionados
          </th>

        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts6"
          :key="item.name"
        >
          <td>{{ item.detractor }}</td>
          <td>{{ item.posicionados }}</td>
          <td>{{ item.desposicionados }}</td>

        </tr>
      </tbody>
    </template>
  </v-simple-table>

</v-card>
<!--Detractores Lista_Noticias-->
<v-card ref="Lista_Noticias"
flat
>
   <v-card-title class="d-flex justify-center mb-2"
     >Lista Noticias
   </v-card-title>

    <v-btn
      class="ma-2"
     
      color="success"
         @click="$vuetify.goTo($refs.Tablero)"
  
    >
      Tablero
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
    <v-btn
    class="ma-2"
    color="primary"
    @click= "DatosPorPais"
    :disabled="SedioClick6"
    >Cargar datos </v-btn>
 <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           medio
          </th>
          <th class="text-left">
           Estatus
          </th>
        

        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts7"
          :key="item.name"
        >
          <td>{{ item.medio }}</td>
          <td>{{ item.estatus }}</td>

        </tr>
      </tbody>
    </template>
  </v-simple-table>

</v-card>
<!--Detractores detractor_cronologia-->
<v-card ref="detractor_cronologia"
flat
>
   <v-card-title class="d-flex justify-center mb-2"
     >Detractores por cronologia
   </v-card-title>

    <v-btn
      class="ma-2"
      
      color="success"
         @click="$vuetify.goTo($refs.Tablero)"
  
    >
      Tablero
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>

    <v-btn
    class="ma-2"
    color="primary"
    @click= "DatosPorPais"
    :disabled="SedioClick7"
    >Cargar datos </v-btn>
 <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Fecha
          </th>
          <th class="text-left">
           posición
          </th>
        

        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts8"
          :key="item.name"
        >
          <td>{{ item.fecha }}</td>
          <td>{{ item.posicion }}</td>

        </tr>
      </tbody>
    </template>
  </v-simple-table>


        <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="5"
       max-width="600"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

</v-card>
<!-- denuncias_URL_Denunciados-->
<v-card ref="denuncias_URL_Denunciados"
flat
>
   <v-card-title class="d-flex justify-center mb-2"
     > URL Denunciados
   </v-card-title>

    <v-btn
      class="ma-2"
      
      color="success"
         @click="$vuetify.goTo($refs.Tablero)"
  
    >
      Tablero
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>

    <v-btn
    class="ma-2"
    color="primary"
    @click= "DatosPorPais"
    :disabled="SedioClick8"
    >Cargar datos </v-btn>
 <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           URL
          </th>
          <th class="text-left">
           Denuncias
          </th>
          <th class="text-left">
           ¿Eliminado?
          </th>
        

        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts9"
          :key="item.name"
        >
          <td>{{ item.url }}</td>
          <td>{{ item.denuncias }}</td>
          <td>{{ item.eliminado }}</td>

        </tr>
      </tbody>
    </template>
  </v-simple-table>

</v-card>
<!--denuncias_URL_Denunciados-->
<v-card ref="denuncia_cronologia"
flat
>
   <v-card-title class="d-flex justify-center mb-2"
     >Denuncias por cronologia
   </v-card-title>

    <v-btn
      class="ma-2"
      
      color="success"
         @click="$vuetify.goTo($refs.Tablero)"
  
    >
      Tablero
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
    <v-btn
    class="ma-2"
    color="primary"
    @click= "DatosPorPais"
    :disabled="SedioClick"
    >Cargar datos </v-btn>
 

    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="5"
       max-width="600"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

</v-card>
<!--Desindexados desindexados_URL_Denunciados-->
<v-card ref="desindexados_URL_Denunciados"
flat
>
   <v-card-title class="d-flex justify-center mb-2"
     >  Desindexados URL Denunciados
   </v-card-title>

    <v-btn
      class="ma-2"
     
      color="success"
         @click="$vuetify.goTo($refs.Tablero)"
  
    >
      Tablero
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
    <v-btn
    class="ma-2"
    color="primary"
    @click= "DatosPorPais"
    :disabled="SedioClick9"
    >Cargar datos </v-btn>
 <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           URL
          </th>
          <th class="text-left">
           Denuncias
          </th>
          <th class="text-left">
           ¿Eliminado?
          </th>
        

        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts10"
          :key="item.name"
        >
          <td>{{ item.pais }}</td>
          <td>{{ item.etiqueta }}</td>
          <td>{{ item.fecha }}</td>

        </tr>
      </tbody>
    </template>
  </v-simple-table>

</v-card>
<!--Desindexados desindexados_cronologia-->
<v-card ref="desindexados_cronologia"
flat
>
   <v-card-title class="d-flex justify-center mb-2"
     >Desindexados por cronologia
   </v-card-title>

    <v-btn
      class="ma-2"
     
      color="success"
         @click="$vuetify.goTo($refs.Tablero)"
  
    >
      Tablero
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>

    <v-btn
    class="ma-2"
    color="primary"
    @click= "DatosPorPais"
    :disabled="SedioClick10"
    >Cargar datos </v-btn>
 <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Fecha
          </th>
          <th class="text-left">
           posición
          </th>
        

        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts8"
          :key="item.name"
        >
          <td>{{ item.fecha }}</td>
          <td>{{ item.posicion }}</td>

        </tr>
      </tbody>
    </template>
  </v-simple-table>

     <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="5"
       max-width="600"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>


</v-card>
<!--Negativos posteriores negativoPOS_URL_Denunciados-->
<v-card ref="negativoPOS_URL_Denunciados"
flat
>
   <v-card-title class="d-flex justify-center mb-2"
     >  Negativos posteriores URL Denunciados
   </v-card-title>

    <v-btn
      class="ma-2"
      
      color="success"
         @click="$vuetify.goTo($refs.Tablero)"
  
    >
      Tablero
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
    <v-btn
    class="ma-2"
    color="primary"
    @click= "DatosPorPais"
    :disabled="SedioClick11"
    >Cargar datos </v-btn>
 <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Contratado
          </th>
          <th class="text-left">
           Enero
          </th>
          <th class="text-left">
           Febrero
          </th>
           <th class="text-left">
           Marzo
          </th>
           <th class="text-left">
           Abril
          </th>
           <th class="text-left">
           Mayo
          </th>
           <th class="text-left">
           Junio
          </th>
          <th class="text-left">
           Julio
          </th>
           <th class="text-left">
           Agosto
          </th>
           <th class="text-left">
           Septiembre
          </th>
           <th class="text-left">
           Octubre
          </th>
           <th class="text-left">
          Noviembre
          </th>
           <th class="text-left">
          Diciembre
          </th>
          
        

        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts11"
          :key="item.name"
        >
          <td>{{ item.contratado }}</td>
          <td>{{ item.enero }}</td>
          <td>{{ item.febrero }}</td>
          <td>{{ item.marzo }}</td>
          <td>{{ item.abril }}</td>
          <td>{{ item.mayo }}</td>
          <td>{{ item.junio }}</td>
           <td>{{ item.julio }}</td>
          <td>{{ item.agosto }}</td>
          <td>{{ item.septiembre }}</td>
          <td>{{ item.octubre }}</td>
          <td>{{ item.noviembre }}</td>
          <td>{{ item.diciembre }}</td>
         


        </tr>
      </tbody>
    </template>
  </v-simple-table>

</v-card>
<!--Negativos posteriores negativoPOS_cronologia-->
<v-card ref="negativoPOS_cronologia"
flat
>
   <v-card-title class="d-flex justify-center mb-2"
     >Desindexados por cronologia
   </v-card-title>

    <v-btn
      class="ma-2"
    
      color="success"
         @click="$vuetify.goTo($refs.Tablero)"
  
    >
      Tablero
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
    <v-btn
    class="ma-2"
    color="primary"
    @click= "DatosPorPais"
    :disabled="SedioClick12"
    >Cargar datos </v-btn>
 <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Fecha
          </th>
          <th class="text-left">
           posición
          </th>
        

        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts8"
          :key="item.name"
        >
          <td>{{ item.fecha }}</td>
          <td>{{ item.posicion }}</td>

        </tr>
      </tbody>
    </template>
  </v-simple-table>


   
        <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="5"
       max-width="600"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>
    

</v-card>

<script>

 export default {
  //------------------------------------------------------------------------------------  
    data () {

    },

    methods:{


   async  DatosPorPais(){

this.SedioClick=true
var porPais=document.querySelector('#porPais')
var send=null
var response=null
//--------------------solicito el parametro cliente/contrado--------------------------------------------
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var contrato = getParameterByName('ctr_id');
console.log("---------con getParameter-------")
console.log(contrato)


//---------------------envio el parametro fecha al servido-------------------------------------------
//const datos=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${contrato}/report/positivity_by_country?date_report=`+this.pickerPrincipal)
     // .then(response => (send = response))  

      const datos=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${contrato}/report/positivity_by_country?date_report=`+this.pickerPrincipal)
      //const datos=await axios.get("PositividadPais.json")
      .then(response => (send = response))
      .catch(e => {
    // Capturamos los errores
  this.dialogPais=true 

 
  console.log("mensaje de error");
    console.log(e);
})  


console.log("---------con  el picker-------")
console.log(this.pickerPrincipal)
console.log("---------nuevo direccion get-------")
console.log(response)
console.log(send)
//-------------------------------------------------------------------------------------------
const url = new URL('https://cool-shockley.142-44-201-186.plesk.page/login?ctr_id')
const ctr_id = url.searchParams
console.log("---------searchParams-------")
console.log(ctr_id)
//---------------------------------------------------------------------------------------------

console.log("---------datos de tabla-------")
console.log(datos)

for(var json in datos.data){
porPais.innerHTML+=`
 <tr>
          <td >${datos.data[json].pais}</td>
          <td>${datos.data[json].porcentaje}</td>
          
        </tr>
`
}// fin de for

    },// fin de DatosPorPais
  async DatosPorEtiqueta(){

this.SedioClick1=true
var porEtiqueta=document.querySelector('#porEtiqueta')
var send=null
var response=null
//--------------------solicito el parametro cliente/contrado--------------------------------------------
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var contrato = getParameterByName('ctr_id');
console.log("---------con getParameter-------")
console.log(contrato)


//---------------------envio el parametro fecha al servido-------------------------------------------
const datos=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${contrato}/report/positivity_by_(textoJSON)?date_report=`+this.pickerPrincipal)
      .then(response => (send = response))  
      .catch(e => {
    // Capturamos los errores
  this.dialogEtiqueta=true 

 console.log("mensaje de error");
    console.log(e);
}) 


console.log("---------con  el picker-------")
console.log(this.pickerPrincipal)
console.log("---------nuevo direccion get-------")
console.log(response)
console.log(send)
//-------------------------------------------------------------------------------------------
const url = new URL('https://cool-shockley.142-44-201-186.plesk.page/login?ctr_id')
const ctr_id = url.searchParams
console.log("---------searchParams-------")
console.log(ctr_id)
//---------------------------------------------------------------------------------------------

console.log("---------datos de tabla-------")
console.log(datos)

for(var json in datos.data){
porEtiqueta.innerHTML+=`
 <tr>
          <td>${datos.data[json].etiqueta }</td>
          <td>${ datos.data[json].descripcion }</td>
          <td>${ datos.data[json].porcentaje }</td>
          
        </tr>

        
`
}// fin de for

    

    },// fin de DatosPorEtiqueta
  async DatosPorEtiquetaPais(){

this.SedioClick2=true
var porEtiquetaPais=document.querySelector('#porEtiquetaPais')
var send=null
var response=null
//--------------------solicito el parametro cliente/contrado--------------------------------------------
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var contrato = getParameterByName('ctr_id');
console.log("---------con getParameter-------")
console.log(contrato)


//---------------------envio el parametro fecha al servido-------------------------------------------
const datos=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${contrato}/report/positivity_by_(textoJSON)?date_report=`+this.pickerPrincipal)
      .then(response => (send = response))  
.catch(e => {
    // Capturamos los errores
  this.dialogEtiquetaPais=true 

 console.log("mensaje de error");
    console.log(e);
}) 




console.log("---------con  el picker-------")
console.log(this.pickerPrincipal)
console.log("---------nuevo direccion get-------")
console.log(response)
console.log(send)
//-------------------------------------------------------------------------------------------
const url = new URL('https://cool-shockley.142-44-201-186.plesk.page/login?ctr_id')
const ctr_id = url.searchParams
console.log("---------searchParams-------")
console.log(ctr_id)
//---------------------------------------------------------------------------------------------

console.log("---------datos de tabla-------")
console.log(datos)

for(var json in datos.data){
porEtiquetaPais.innerHTML+=`
 <tr>
          <td>${ datos.data[json].pais }</td>
          <td>${ datos.data[json].etiqueta }</td>
          <td>${ datos.data[json].descripcion }</td>
          <td>${ datos.data[json].porcentaje }</td>
          
        </tr>
`


}// fin de for

},// fin de DatosPorEtiquetaPais
  async DatosMQD_Medios_Custodiados(){

this.SedioClick3=true

var datosMQD_Medios_Custodiados=document.querySelector('#datosMQD_Medios_Custodiados')
var send=null
var response=null
//--------------------solicito el parametro cliente/contrado--------------------------------------------
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var contrato = getParameterByName('ctr_id');
console.log("---------con getParameter-------")
console.log(contrato)


//---------------------envio el parametro fecha al servido-------------------------------------------
const datos=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${contrato}/report/positivity_by_(textoJSON)?date_report=`+this.pickerPrincipal)
      .then(response => (send = response))  
.catch(e => {
    // Capturamos los errores
  this.dialogMedios_Custodiados=true 

 console.log("mensaje de error");
    console.log(e);
}) 


console.log("---------con  el picker-------")
console.log(this.pickerPrincipal)
console.log("---------nuevo direccion get-------")
console.log(response)
console.log(send)
//-------------------------------------------------------------------------------------------
const url = new URL('https://cool-shockley.142-44-201-186.plesk.page/login?ctr_id')
const ctr_id = url.searchParams
console.log("---------searchParams-------")
console.log(ctr_id)
//---------------------------------------------------------------------------------------------

console.log("---------datos de tabla-------")
console.log(datos)

for(var json in datos.data){
datosMQD_Medios_Custodiados.innerHTML+=`
 <tr>
          <td>${ datos.data[json].correo }</td>
          <td>${ datos.data[json].medio }</td>
        
          
        </tr>
`


}// fin de for

},// fin de MQD medios custodiasdos
  async DatosMQD_Medios_Activo(){

this.SedioClick4=true

var datosMQD_Medios_Activos=document.querySelector('#datosMQD_Medios_Activos')
var send=null
var response=null
//--------------------solicito el parametro cliente/contrado--------------------------------------------
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var contrato = getParameterByName('ctr_id');
console.log("---------con getParameter-------")
console.log(contrato)

//---------------------envio el parametro fecha al servido-------------------------------------------
const datos=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${contrato}/report/positivity_by_(textoJSON)?date_report=`+this.pickerPrincipal)
      .then(response => (send = response))  
.catch(e => {
    // Capturamos los errores
  this.dialogMedios_Activo=true 

 console.log("mensaje de error");
    console.log(e);
}) 


console.log("---------con  el picker-------")
console.log(this.pickerPrincipal)
console.log("---------nuevo direccion get-------")
console.log(response)
console.log(send)
//-------------------------------------------------------------------------------------------
const url = new URL('https://cool-shockley.142-44-201-186.plesk.page/login?ctr_id')
const ctr_id = url.searchParams
console.log("---------searchParams-------")
console.log(ctr_id)
//---------------------------------------------------------------------------------------------

console.log("---------datos de tabla-------")
console.log(datos)

for(var json in datos.data){
datosMQD_Medios_Activos.innerHTML+=`
 <tr>
          <td>${ datos.data[json].medio }</td>
          <td>${ datos.data[json].estrategia }</td>
        
          
        </tr>
`


 

}// fin de for

},// fin de MQD medios custodiasdos

//*********hacen los llamados al backend desde el dialogPicker de nueva consulta**************/
  async OkPorPais(){

this.$refs.dialog.save(this.pickerPorPais)

var porPais=document.querySelector('#porPais')
var send=null
var response=null
//--------------------solicito el parametro cliente/contrado--------------------------------------------
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var contrato = getParameterByName('ctr_id');
console.log("---------con getParameter-------")
console.log(contrato)


//---------------------envio el parametro fecha al servido-------------------------------------------
const datos=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${contrato}/report/positivity_by_country?date_report=`+this.pickerPorPais)
      .then(response => (send = response))
             .catch(e => {
    // Capturamos los errores
  this.dialogEtiquetaPais=true 


 console.log("mensaje de error");
    console.log(e);
})    

console.log("---------con  el picker-------")
console.log(this.pickerPorPais)
console.log("---------nuevo direccion get-------")
console.log(response)
console.log(send)
//-------------------------------------------------------------------------------------------
const url = new URL('https://cool-shockley.142-44-201-186.plesk.page/login?ctr_id')
const ctr_id = url.searchParams
console.log("---------searchParams-------")
console.log(ctr_id)
//---------------------------------------------------------------------------------------------

console.log("---------datos de tabla-------")
console.log(datos)

for(var json in datos.data){
porPais.innerHTML+=`
 <tr>
          <td >${datos.data[json].pais}</td>
          <td>${datos.data[json].porcentaje}</td>
          
        </tr>
`
}// fin de for

    





},
  async OkPorEtiqueta(){

this.$refs.dialogEtiqueta.save(this.pickerPorEtiqueta)

var porEtiqueta=document.querySelector('#porEtiqueta')
var send=null
var response=null
//--------------------solicito el parametro cliente/contrado--------------------------------------------
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var contrato = getParameterByName('ctr_id');
console.log("---------con getParameter-------")
console.log(contrato)

//---------------------envio el parametro fecha al servido-------------------------------------------
const datos=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${contrato}/report/positivity_by_country?date_report=`+this.pickerPorEtiqueta)
      .then(response => (send = response))
          .catch(e => {
    // Capturamos los errores
  this.dialogEtiquetaPais=true 


 console.log("mensaje de error");
    console.log(e);
})    

console.log("---------con  el picker-------")
console.log(this.pickerPorEtiqueta)
console.log("---------nuevo direccion get-------")
console.log(response)
console.log(send)
//-------------------------------------------------------------------------------------------
const url = new URL('https://cool-shockley.142-44-201-186.plesk.page/login?ctr_id')
const ctr_id = url.searchParams
console.log("---------searchParams-------")
console.log(ctr_id)
//---------------------------------------------------------------------------------------------

console.log("---------datos de tabla-------")
console.log(datos)

for(var json in datos.data){
porEtiqueta.innerHTML+=`
 <tr>
          <td>${datos.data[json].etiqueta }</td>
          <td>${ datos.data[json].descripcion }</td>
          <td>${ datos.data[json].porcentaje }</td>
          
        </tr>

        
`
}// fin de for

    





},
  async OkPorEtiquetaPais(){

this.$refs.dialogEtiquetaPais.save(this.pickerPorEtiquetaPais)

var porEtiquetaPais=document.querySelector('#porEtiquetaPais')
var send=null
var response=null
//--------------------solicito el parametro cliente/contrado--------------------------------------------
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var contrato = getParameterByName('ctr_id');
console.log("---------con getParameter-------")
console.log(contrato)

//---------------------envio el parametro fecha al servido-------------------------------------------
const datos=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${contrato}/report/positivity_by_country?date_report=`+this.pickerPorEtiquetaPais)
      .then(response => (send = response)) 
      .catch(e => {
    // Capturamos los errores
  this.dialogEtiquetaPais=true 


 console.log("mensaje de error");
    console.log(e);
})  

console.log("---------con  el picker-------")
console.log(this.pickerPorEtiquetaPais)
console.log("---------nuevo direccion get-------")
console.log(response)
console.log(send)
//-------------------------------------------------------------------------------------------
const url = new URL('https://cool-shockley.142-44-201-186.plesk.page/login?ctr_id')
const ctr_id = url.searchParams
console.log("---------searchParams-------")
console.log(ctr_id)
//---------------------------------------------------------------------------------------------

console.log("---------datos de tabla-------")
console.log(datos)

for(var json in datos.data){
porEtiquetaPais.innerHTML+=`
 <tr>
          <td>${ datos.data[json].pais }</td>
          <td>${ datos.data[json].etiqueta }</td>
          <td>${ datos.data[json].descripcion }</td>
          <td>${ datos.data[json].porcentaje }</td>
          
        </tr>
`
}// fin de for

    





},
  async OkPorMQD_Medios_Custodiado(){

this.$refs.dialogMedios_Custodiados.save(this.pickerPorMedios_Custodiados)

var datosMQD_Medios_Custodiados=document.querySelector('#datosMQD_Medios_Custodiados')
var send=null
var response=null
//--------------------solicito el parametro cliente/contrado--------------------------------------------
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var contrato = getParameterByName('ctr_id');
console.log("---------con getParameter-------")
console.log(contrato)

//---------------------envio el parametro fecha al servido-------------------------------------------
const datos=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${contrato}/report/positivity_by_country?date_report=`+this.pickerPorMedios_Custodiados)
      .then(response => (send = response)) 
      .catch(e => {
    // Capturamos los errores
  this.dialogMedios_Custodiados=true 


 console.log("mensaje de error");
    console.log(e);
})  

console.log("---------con  el picker-------")
console.log(this.pickerPorMedios_Custodiados)
console.log("---------nuevo direccion get-------")
console.log(response)
console.log(send)
//-------------------------------------------------------------------------------------------
const url = new URL('https://cool-shockley.142-44-201-186.plesk.page/login?ctr_id')
const ctr_id = url.searchParams
console.log("---------searchParams-------")
console.log(ctr_id)
//---------------------------------------------------------------------------------------------

console.log("---------datos de tabla-------")
console.log(datos)

for(var json in datos.data){
datosMQD_Medios_Custodiados.innerHTML+=`
 <tr>
          <td>${ datos.data[json].correo }</td>
          <td>${ datos.data[json].medio }</td>
        
          
        </tr>
`


}// fin de for

    





},
  async OkPorMQD_Medios_Activo(){

this.$refs.dialogMedios_Activo.save(this.pickerPorMedios_Activo)

var datosMQD_Medios_Activos=document.querySelector('#datosMQD_Medios_Activos')
var send=null
var response=null
//--------------------solicito el parametro cliente/contrado--------------------------------------------
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var contrato = getParameterByName('ctr_id');
console.log("---------con getParameter-------")
console.log(contrato)

//---------------------envio el parametro fecha al servido-------------------------------------------
const datos=await axios.get(`https://cool-shockley.142-44-201-186.plesk.page/contract/${contrato}/report/positivity_by_country?date_report=`+this.pickerPorMedios_Activo)
      .then(response => (send = response)) 
      .catch(e => {
    // Capturamos los errores
  this.dialogMedios_Activo=true 


 console.log("mensaje de error");
    console.log(e);
})  

console.log("---------con  el picker-------")
console.log(this.pickerPorMedios_Activo)
console.log("---------nuevo direccion get-------")
console.log(response)
console.log(send)
//-------------------------------------------------------------------------------------------
const url = new URL('https://cool-shockley.142-44-201-186.plesk.page/login?ctr_id')
const ctr_id = url.searchParams
console.log("---------searchParams-------")
console.log(ctr_id)
//---------------------------------------------------------------------------------------------

console.log("---------datos de tabla-------")
console.log(datos)

for(var json in datos.data){
datosMQD_Medios_Activos.innerHTML+=`
 <tr>
          <td>${ datos.data[json].medio }</td>
          <td>${ datos.data[json].estrategia }</td>
        
          
        </tr>
`


}// fin de for

    





}



    }

    }
 
</script>
