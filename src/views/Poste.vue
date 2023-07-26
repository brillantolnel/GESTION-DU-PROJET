<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3>Postes</h3>
            <v-btn color="success">
              <router-link to="/postes">Nouvel</router-link>  
            </v-btn>
        </v-subheader>
        <br>
        <v-row>
            <v-col>
                <v-card>
                    <v-data-table
                            caption="DNA"
                            :headers="headers"
                            :items="desserts"
                            :items-per-page="5"
                            class="elevation-1"
                    >
                    <!--   <template v-slot:item.action="">
                            <v-btn color="success" outlined small shaped >View</v-btn>
                        </template>     --> 
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
        
        <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
    </div>
</template>

<script>
    export default {
        name: "Poste",
        data() {
            return {
                dialog: false,
                activityLog: [
                    {title: 'Total Products', amount: 50, icon: 'mdi-account', color: 'cyan lighten-3'},
                    {title: 'Total Customer', amount: 3433, icon: 'mdi-account-group-outline', color: 'green darken-2'},
                    {title: 'Total Sale', amount: 3433, icon: 'mdi-account-group-outline', color: 'blue-grey darken-1'},
                    {
                        title: 'Pending Orders',
                        amount: 3433,
                        icon: 'mdi-account-group-outline',
                        color: 'deep-orange darken-1'
                    },
                ],
                headers: [
                    {
                        text: 'Nom de Poste',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                    {text: 'Description', value: 'description'},
                    {text: 'Accès', value: 'acces'},
                    {text: 'Options', value: 'option'},
                ],
                desserts: [
                    {
                        name: 'Frozen Yogurt',
                        description: 159,
                        acces: 6.0,
                    },
                    {
                        name: 'Ice cream sandwich',
                        description: 237,
                        acces: 9.0,
                    },
                    {
                        name: 'Eclair',
                        description: 262,
                        acces: 16.0,
                    },
                    {
                        name: 'Cupcake',
                        description: 305,
                        acces: 3.7,
                    },
                    {
                        name: 'Gingerbread',
                        description: 356,
                        acces: 16.0,
                    }
                    
                ],
          /*      result: {},
        postes:{
                   id: '',
                   poste: '',
                   description: '',
                   acces: ''
 
 
        }
      }
      },
      created() { 
        this.EmployeeLoad();
    },
    mounted() {
          console.log("mounted() called.......");
         
      },
 
    methods: {
           EmployeeLoad()
           {
                 var page = "http://127.0.0.1:8000/api/poste";
                 axios.get(page)
                  .then(
                      ({data})=>{
                        console.log(data);
                        this.result = data;
                      }
                  );
           },
           
          
           save()
           {
            if(this.postes.id == '')
              {
                this.saveData();
              }
              else
              {
                this.updateData();
              }       
 
           },
           saveData()
           {
            axios.post("http://127.0.0.1:8000/api/save_poste", this.postes)
            .then(
              ({data})=>{
                alert("saveddddd");
                this.EmployeeLoad();
                 this.postes.poste = '';
                  this.postes.description = '',
                  this.postes.acces = ''
                   this.id = ''
              }
            )
 
           },
           edit(postes)
           {
            this.postes = postes;
           
           },
           updateData()
           {
              var editrecords = 'http://127.0.0.1:8000/api/update_poste/'+ this.postes.id;
              axios.put(editrecords, this.postes)
              .then(
                ({data})=>{
                  this.postes.poste = '';
                  this.postes.description = '',
                  this.postes.acces = ''
                  this.id = ''
                  alert("Updated!!!");
                  this.EmployeeLoad();
                }
              );
 
           },
 
           remove(postes){
 
             var url = `http://127.0.0.1:8000/api/delete_poste/${postes.id}`;
 
 
 
             // var url = 'http://127.0.0.1:8000/api/delete/'+ employee.id;
              axios.delete(url);
              alert("Deleteddd");
              this.EmployeeLoad();
            }
          },
        
        methods: {
            onButtonClick(item) {
                console.log('click on ' + item.no)
            }
        } */
            }
          }
    }
</script>

<style scoped>
    .overlap-icon {
        position: absolute;
        top: -33px;
        text-align: center;
        padding-top: 12px;
    }
</style>