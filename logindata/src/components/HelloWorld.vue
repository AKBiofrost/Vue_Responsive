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
            v-model="Termino"
            :rules="nameRules"
            label="Termino"
            
            solo
            
          ></v-text-field>
        

      </v-row>
  
    </v-form>
   
    
<!--fin de formulario usuario -->

<!-- fechas-->

  <v-row justify="center"
  >
    <v-date-picker
     v-model="picker"
    elevation="15"
    show-adjacent-months
    range
     mb-2
   
    ></v-date-picker>
  </v-row>

   
   
  <div class="text-center pa-3">
     <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      Consultar
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
 </div >
   

    
    </v-card>
    </v-layout>
    </v-container>
  
  

</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
