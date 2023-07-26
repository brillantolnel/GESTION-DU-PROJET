<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3>Projets</h3>
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
                    <span class="text-h5">Informations du Client</span>
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
                            label="Nom du client*"
                            required
                            v-model="clients.nom_client"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            label="Email*"
                            hint="example of persistent helper text"
                            persistent-hint
                            required
                            v-model="clients.email_client"
                            ></v-text-field>
                        </v-col>
                        <v-col 
                            cols="12" 
                            sm="6"
                            md="4">
                            <v-text-field
                            label="Telephone*"
                            required
                            v-model="clients.tel_client"
                            ></v-text-field>
                        </v-col>
                        <v-col 
                            cols="12" 
                            sm="6"
                            md="4">
                            <v-text-field
                            label="Adresse*"
                            required
                            v-model="clients.adresse_client"
                            ></v-text-field>
                        </v-col>
                        <v-col 
                            cols="12" 
                            sm="6"
                            md="4">
                            <v-select
                            :items="['Personnel', 'Société']"
                            label="Type du client*"
                            required
                            v-model="clients.type_client"
                            ></v-select>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-autocomplete
                            :items="['NIF', 'STAT', 'Autre']"
                            label="Société"
                            multiple
                            v-model="clients.societe"
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="12"
                            sm="6"
                            md="4">
                            <v-text-field
                            label="Nom du responsable société*"
                            type="text"
                            required
                            v-model="clients.nom_resp_societe"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12"
                            sm="6"
                            md="4">
                            <v-text-field
                            label="Email du responsable société*"
                            type="email"
                            required
                            v-model="clients.email_resp"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12"
                            sm="6"
                            md="4">
                            <v-text-field
                            label="Telepone du responsable société*"
                            type="tel"
                            required
                            v-model="clients.tel_resp"
                            ></v-text-field>
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
                        type="reset"
                    >
                        Annuler
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
    import axios from 'axios';
    export default {
        name: "Client",
        data() {
            return {
                result: {},
        clients:{
               id: '',
               nom_client: '',
               email_client: '',
               tel_client: '',
               adresse_client: '',
               type_client: '',
               societe: '',
               nom_resp_societe: '',
               email_resp: '',
               tel_resp: ''     
 
        }
      }
      },
      created() { 
        this.ClienttLoad();
    },
    mounted() {
          console.log("mounted() called.......");
         
      },
 
    methods: {
           ClienttLoad ()
           {
                 var  page = "http://127.0.0.1:8000/api/client";
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
            if(this.clients.id == '')
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
                axios.post("http://127.0.0.1:8000/api/save_client", this.clients)
            .then(
              ({data})=>{
                alert("saveddddd");
                this.ClienttLoad();
                    this.clients.nom_client = '';
                    this.clients.email_client = '',
                    this.clients.tel_client = '',
                    this.clients.adresse_client = '',
                    this.clients.type_client = '',
                    this.clients.societe = '',
                    this.clients.nom_resp_societe = '',
                    this.clients.email_resp = '',
                    this.clients.tel_resp = ''
                    this.id = ''
              }
            )
 
           },
           edit(clients)
           {
            this.clients = clients;
           
           },
           updateData()
           {
              var editrecords = 'http://127.0.0.1:8000/api/update_client/'+ this.clients.id;
              axios.put(editrecords, this.clients)
              .then(
                ({data})=>{
                    this.clients.nom_client = '';
                    this.clients.email_client = '',
                    this.clients.tel_client = '',
                    this.clients.adresse_client = '',
                    this.clients.type_client = '',
                    this.clients.societe = '',
                    this.clients.nom_resp_societe = '',
                    this.clients.email_resp = '',
                    this.clients.tel_resp = ''
                  this.id = ''
                  alert("Updated!!!");
                  this.ClienttLoad();
                }
              );
 
           },
 
           remove(clients){
 
             var url = `http://127.0.0.1:8000/api/delete_client/${clients.id}`;
             // var url = 'http://127.0.0.1:8000/api/delete/'+ Clientt.id;
              axios.delete(url);
              alert("Deleteddd");
              this.ClienttLoad();
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