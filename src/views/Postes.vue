<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3>Membres</h3>
            <v-btn color="success">
                Nouvel
            </v-btn>
        </v-subheader>
        <br>
        <v-row>
            <v-col>
                <v-card>
                    <v-form @submit.prevent="save">
                    <v-card-title>
                    <span class="text-h5">Informations</span>
                    </v-card-title>
                    <v-card-text>
                    <v-container>
                        <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                        >
                            <v-text-field
                            label="Poste*"
                            required
                            v-model="postes.poste"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                        >
                            <v-text-field
                            label="Accès*"
                            hint="example of helper text only on focus"
                            v-model="postes.acces"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                        >
                            <v-textarea
                            label="Description*"
                            hint="example of helper text only on focus"
                            v-model="postes.description"
                            ></v-textarea>
                        </v-col>
                        
                        </v-row>
                    </v-container>
                    <small>* Champs obligatoires</small>
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
                        type="submit"
                    >
                        Enregistrer
                    </v-btn>
                    </v-card-actions>
                </v-form>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
   // import Vue from 'vue';
    import axios from 'axios';
    // Vue.use(axios)
     
     export default {
      name: 'Poste',
    data() {
      return {
        result: {},
        postes:{
               id: '',
               poste: '',
               description: '',
               acces: ''
 
 
        }
      }
      },
      created() { 
        this.PosteeLoad();
    },
    mounted() {
          console.log("mounted() called.......");
         
      },
 
    methods: {
           PosteeLoad ()
           {
                 var  page = "http://127.0.0.1:8000/api/poste";
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
                this.PosteeLoad();
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
                  this.PosteeLoad();
                }
              );
 
           },
 
           remove(postes){
 
             var url = `http://127.0.0.1:8000/api/delete_poste/${postes.id}`;
 
 
 
             // var url = 'http://127.0.0.1:8000/api/delete/'+ Postee.id;
              axios.delete(url);
              alert("Deleteddd");
              this.PosteeLoad();
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