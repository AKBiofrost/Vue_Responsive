<template>

<v-container>
<v-layout>
<v-card

    class="mx-auto pa-4"
    max-width="600"
    elevation="20"
    shaped="10"
>
 
 <!--titulo -->
    <v-card 
    class="d-flex justify-center mb-2"
    flat
    > 
    <h2>Realizar Consulta</h2>
    </v-card >
  <!--fin titulo -->  
  
  <!-- formulario usuario -->
    
 <v-form v-model="valid">
  
      <v-row  
      align="center"
      justify="center">
        
          <v-text-field 
            align="center"
            v-model="Usuario"
            :rules="nameRules"
            label="Usuario"
            
            solo
            
          ></v-text-field>
        

      </v-row>
  
    </v-form>
   
    
<!--fin de formulario usuario -->

<!--combo de fechas-->

  <v-row justify="center">
    <v-date-picker
     v-model="picker"
    elevation="15"
    show-adjacent-months
    mb-2
    ></v-date-picker>
  </v-row>

   
   
    <v-card-actions
     class= "d-flex justify-center mb-2"
    flat 
        
    >
    <v-btn
        color="green darken-1"
        text
       
      >
        Consultar
      </v-btn>
    </v-card-actions>
   

    
    </v-card>
    </v-layout>
    </v-container>
  
  
</template>

