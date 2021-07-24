  <template>
  <v-container >


















  </v-container>

  
</template>



<script>

//import LinkPrevue from 'link-prevue'

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
    
   // LinkPrevue
  },


  methods:{
      ir(){

// Abrir nuevo tab
var win = window.open("https://www.elnacional.com/venezuela/maduro-evalua-ir-a-una-flexibilizacion-amplia-vigilada/")
// Cambiar el foco al nuevo tab (punto opcional)
win.focus();

      }


  }
}



</script>

<style scoped>


font{
  font-size:0.8em;
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

 }

@media screen and (min-width: 321px) and (max-width: 768px) {

font{
  font-size:0.5em;
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
 



 }



</style>