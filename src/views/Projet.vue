<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3>Projets</h3>   
          <v-row justify="space-around">
                  <v-col cols="auto">
                    <v-dialog
                      transition="dialog-bottom-transition"
                      max-width="500"
                    > 
                    <template v-slot:activator="{ on, attrs }">
                    <v-btn d-left
                          outlined 
                          color="#a4151c" 
                          v-bind="attrs"
                          v-on="on">
                        Créer un Projet
                    </v-btn>
                  </template>
                      <template v-slot:default="dialog">
                        <v-card>
                          <v-toolbar
                            color="#a4151c"
                            dark
                          >Nouvel Projet</v-toolbar>
                          <v-card-text>
                            
                            <form>
                              <v-text-field
                                v-model="name"
                                :error-messages="nameErrors"
                                :counter="10"
                                label="Name"
                                required
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
                              ></v-text-field>
                              <v-text-field
                                v-model="email"
                                :error-messages="emailErrors"
                                label="E-mail"
                                required
                                @input="$v.email.$touch()"
                                @blur="$v.email.$touch()"
                              ></v-text-field>
                              <v-select
                                v-model="select"
                                :items="items"
                                :error-messages="selectErrors"
                                label="Item"
                                required
                                @change="$v.select.$touch()"
                                @blur="$v.select.$touch()"
                              ></v-select>
                              <v-checkbox
                                v-model="checkbox"
                                :error-messages="checkboxErrors"
                                label="Do you agree?"
                                required
                                @change="$v.checkbox.$touch()"
                                @blur="$v.checkbox.$touch()"
                              ></v-checkbox>

                              <v-btn
                                class="mr-4"
                                @click="submit"
                              >
                                submit
                              </v-btn>
                              <v-btn @click="clear">
                                clear
                              </v-btn>
                            </form>

                          </v-card-text>
                          <v-card-actions class="justify-end">
                            <v-btn
                              text
                              @click="dialog.value = false"
                            >Annuler</v-btn>
                            <v-btn color="#a4151c"
                              text
                              @click="dialog.value = false"
                              type="submit"
                            >Enregistrer</v-btn>
                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>
                  </v-col>
                </v-row>
        </v-subheader>
        <br>
        <v-row>
            <v-col>
                <v-card>
                    

                  


                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Projet",
        
        data() {
            return {  
              items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
              ],     
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