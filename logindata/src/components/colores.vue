 <v-card
        v-for="(color,k) in colorWeb[n][m]"
          :key="k"
         
        >
        <span>
          <v-sheet
          v-if="colorWeb[n][m][k].category==0"
            color="teal lighten-4"
            @click="dialogWeb = true"
             height="30"
              width="60"
          >

          </v-sheet>
        </span>
         <span>
          <v-sheet
          v-if="colorWeb[n][m][k].category==1"
            color="cyan darken-1"
            @click="dialogWeb = true"
             height="30"
              width="60"
          >

          </v-sheet>
           </span>
            <span>
          <v-sheet
          v-if="colorWeb[n][m][k].category==2"
            color="teal darken-2 "
            @click="dialogWeb = true"
             height="30"
              width="60"
          >

          </v-sheet>
           </span>
          <span>
          <v-sheet
          v-if="colorWeb[n][m][k].category==3"
            color="red darken-4"
            @click="dialogWeb = true"
             height="30"
              width="60"
          >

          </v-sheet>
           </span>
           <span>
          <v-sheet
          v-if="colorWeb[n][m][k].category==4"
            color="purple darken-4"
            @click="dialogWeb = true"
             height="30"
              width="60"
          >

          </v-sheet>
 </span>
        </v-card>