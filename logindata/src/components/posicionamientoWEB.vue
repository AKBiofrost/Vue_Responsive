 <<template>
   
 
 
 <v-col align="center">

 <v-card-title 
   class="d-flex justify-center mb-2"
     > <h2> Posicionamiento web  </h2>
   </v-card-title>
 
 
 <v-row 
 
 >
<!-- columna de la etiqueta --> 
<v-card 
  class=" d-flex justify-center  mb-5 "
  color=" grey lighten-2"
  
 
  v-for="n in cantCard"
        :key="n"
   >

 <v-col  align="center">
<h3 > 
  {{etiquetaWeb[n]}} 
</h3>
<v-row>
<!-- columna estatica--> 
<v-col>
 
 
<!-- Paises estatico-->
<div 
   
  > Pais
</div>
<!-- Promedio estatico-->
<h4>  
  Promedio
</h4>
  

<!-- cuadros de colores numeros-->
<v-col>

<div
        v-for="(k) in 20"
          :key="k" 
        >
<v-row>
   <v-col>
        
          <v-sheet
        color="grey lighten-2"
        
            height="50"
            width="120"
          >
          {{k}}
      </v-sheet>

      
          
      
 
        </v-col>
  
 
</v-row>

        </div>


</v-col>
<!-- cuadros de colores numeros-->
   
</v-col>


<!-- columna--> 
<v-col
v-for="m in cantPais"
        :key="m"
         
   >
   <v-card
    class=" d-flex justify-center "
    color=" grey lighten-2"
    flat
    height="50"
    width="120"
   >
<!-- Paises dinamico-->
<div 
   v-if="promedioWeb[n][m]>-1"
  > 
  {{paisWeb[m]}}  

<!-- Promedio dinamico-->
<h4>  {{promedioWeb[n][m]}} % </h4>
<!-- cuadros de colores dinamico-->


<v-col>
<div
        v-for="(color, indice) in colores[n][m]"
          :key="color.name" 
        >
<v-row    
           v-if="indice <20"
>
        <v-col>
        
          <v-sheet
          v-if="color.category==0"
            color="teal lighten-4"
            @click="URL_PostWeb( color.url)"
             height="50"
            width="120"
            
          >

          </v-sheet>
       
         
          <v-sheet
          v-if="color.category==1"
            color="cyan darken-1"
            @click="URL_PostWeb( color.url)"
            height="50"
  width="120"
              
          >

          </v-sheet>
         
          
          <v-sheet
          v-if="color.category==2"
            color="teal darken-2 "
            @click="URL_PostWeb( color.url)"
             height="50"
  width="120"
              
          >

          </v-sheet>
          
          
          <v-sheet
          v-if="color.category==3"
            color="red lighten-1"
            @click="URL_PostWeb( color.url)"
             height="50"
  width="120"
              
          >

          </v-sheet>
           
           
          <v-sheet
          v-if="color.category==4"
            color="red darken-4"
            @click="URL_PostWeb( color.url)"
             height="50"
  width="120"
              
          >

          </v-sheet>
 
        </v-col>
</v-row>

        </div>
          </v-col>


         
<!--  fincuadros de colores dinamico-->


</div>
</v-card>

</v-col>
<!-- fin columna--> 

</v-row>
</v-col>
</v-card>
</v-row>

<!--alerta-->  
  <template >
  <div class="text-center">
    <v-dialog
      v-model="dialogWeb"
      width="800"
      
    >
      <v-card>
        <v-card-title class=" green lighten-4">
          informacion de la posición
        </v-card-title>

  <v-alert
      border="left"
      color="white"
      dark
    >
   <v-card
 color="white"
   flat

   
   >
   <div id="hipervinculo" >
  
  <a :href= "post" target="_blank" >{{post }}</a>

   </div>
   
   
   </v-card> 

    </v-alert>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialogWeb = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </template>
<!--alerta--> 
 
<!-----------------------------------> 
     
<v-row >

<v-col >

<v-card class=" d-flex justify-center teal lighten-4">

<h3>URL+ Positivos </h3 >

 </v-card>
 
 
   <v-card class=" d-flex justify-center cyan darken-1 ">

<h3>URL+ Posicionamiento MDQ </h3 >

 </v-card>

 <v-card class=" d-flex justify-center teal darken-2 ">

<h3>URL+ Posicionamiento Aliados </h3 >

 </v-card>




     

</v-col >
<v-col >

<v-card class=" d-flex justify-center red lighten-1">
<h3>URL-contratados </h3 >

 </v-card>

<v-card class="d-flex justify-center  red darken-4">
<h3>URL-posteriores </h3 >

 </v-card>

</v-col >


<v-col >
<div >
<h3>
  URL + Posicionado MQD: Son resultados de contenido
positivo posicionados en medios influenciados por
</h3 >


</div >
     

</v-col >


</v-row >

</v-col> 

</template>