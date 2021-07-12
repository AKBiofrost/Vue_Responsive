 <!--alerta-->  
   <template>
<div >
 
    <v-alert
      border="top"
      color="red lighten-2"
      dark
      id="AlertaPorPais"
    >
      I'm an alert with a top border and red color
    </v-alert>
    
    
  

</div>
   </template>

 <script>
 import { defineComponent } from '@vue/composition-api'
 
 export default defineComponent({
     setup() {
         name: 'AlertaPorPais'
         
     },
 })
 </script>
 
 
   