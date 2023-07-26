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
                    <form @submit.prevent="save">
                    <v-card-title>
                    <span class="text-h5">Informations</span>
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
                            label="Nom*"
                            required
                            v-model="membres.nom"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            label="Prénom*"
                            hint="example of helper text only on focus"
                            v-model="membres.prenom"
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
                            v-model="membres.email"
                            ></v-text-field>
                        </v-col>
                        <v-col 
                            cols="12" 
                            sm="6"
                            md="4">
                            <v-text-field
                            label="Telephone*"
                            required
                            v-model="membres.tel_membre"
                            ></v-text-field>
                        </v-col>
                        <v-col 
                            cols="12" 
                            sm="6"
                            md="4">
                            <v-text-field
                            label="Adresse*"
                            required
                            v-model="membres.adresse"
                            ></v-text-field>
                        </v-col>
                        <v-col 
                            cols="12" 
                            sm="6"
                            md="4">
                            <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="Poste"
                            multiple
                            v-model="membres.poste"
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="12"
                            sm="6"
                            md="4">
                            <v-text-field
                            label="Login*"
                            type="text"
                            required
                            v-model="membres.login"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12"
                            sm="6"
                            md="4">
                            <v-text-field
                            label="Mot de passe*"
                            type="password"
                            required
                            v-model="membres.mot_de_passe"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12"
                            sm="6"
                            md="4">
                            <v-file-input
                            :rules="rules"
                            accept="image/png, image/jpeg, image/bmp"
                            placeholder="Votre photo"
                            prepend-icon="mdi-camera"
                            label="Photo"
                            v-model="membres.photo"
                            ></v-file-input>
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
                        
                    >
                        Enregistrer
                    </v-btn>
                    </v-card-actions>
                </form>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios';
  
     Vue.use(axios)
    export default {
        name: "Membre",
        data() {
            return {
                result: {},
                membres:{
                        id: '',
                        nom: '',
                        prenom: '',
                        photo: '',
                        email: '',
                        tel_membre:'',
                        adresse:'',
                        poste:'',
                        login:'',
                        mot_de_passe:'',
                }
            }
            },
            created() { 
                this.MembreeLoad();
            },
            mounted() {
                console.log("mounted() called.......");
                
            },
        
            methods: {
                MembreeLoad()
                {
                        var page = "http://127.0.0.1:8000/api/membre";
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
                    if(this.membres.id == '')
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
                    axios.post("http://127.0.0.1:8000/api/save_membre", this.membres)
                    .then(
                    ({data})=>{
                        alert("saveddddd");
                        this.MembreeLoad();
                        this.membres.nom = '';
                        this.membres.prenom = '',
                        this.membres.photo = '',
                        this.membres.email = '',
                        this.membres.tel_membre = '',
                        this.membres.adresse = '',
                        this.membres.poste = '',
                        this.membres.login = '',
                        this.membres.mot_de_passe = ''
                        this.id = ''
                    }
                    )
        
                },
                edit(membres)
                {
                    this.membres = membres;
                
                },
                updateData()
                {
                    var editrecords = 'http://127.0.0.1:8000/api/update_poste/'+ this.membres.id;
                    axios.put(editrecords, this.membres)
                    .then(
                        ({data})=>{
                        this.membres.nom = '';
                        this.membres.prenom = '',
                        this.membres.photo = '',
                        this.membres.email = '',
                        this.membres.tel_membre = '',
                        this.membres.adresse = '',
                        this.membres.poste = '',
                        this.membres.login = '',
                        this.membres.mot_de_passe = ''
                        this.id = ''
                        alert("Updated!!!");
                        this.MembreeLoad();
                        }
                    );
        
                },
        
                remove(membres){
        
                    var url = `http://127.0.0.1:8000/api/delete_poste/${membres.id}`;
                    // var url = 'http://127.0.0.1:8000/api/delete/'+ Membree.id;
                    axios.delete(url);
                    alert("Deleteddd");
                    this.MembreeLoad();
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