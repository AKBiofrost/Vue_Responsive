<!-- cuadros de colores dinamico-->
<v-col>
<div
        v-for="(color) in colores[n][m]"
          :key="color.name" 
        >
<v-row>
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