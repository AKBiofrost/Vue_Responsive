  <template>
  <v-container >
 
  <h1> Prueba de google chart </h1>
 
    <GChart
    type="PieChart"
    :data="chartData"
    :options="chartOptions"
    :resizeDebounce="500"
  />
  
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
         @click= "$vuetify.goTo($refs.Tablero)"
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
  </v-container>
</template>



<script>
import { GChart } from 'vue-google-charts'


export default {
  data () {
    return {


 select: { state: 'Florida', abbr: 'FL' },
        items: [
          { state: 'Florida', abbr: 'FL' },
          { state: 'Georgia', abbr: 'GA' },
          { state: 'Nebraska', abbr: 'NE' },
          { state: 'California', abbr: 'CA' },
          { state: 'New York', abbr: 'NY' },
        ],

      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          width: 2500,
          height: 700,
        }
      }
    }
  },
  components: {
    GChart
  }
}



</script>