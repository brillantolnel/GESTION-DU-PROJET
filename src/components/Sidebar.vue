<template>
  <v-navigation-drawer v-model="drawer" color="#a4151c" app>
    <v-img
      height="140"
      class="pa-4"
      src="https://www.tamatavetsara.com/wp-content/uploads/2021/12/Logo-dna_grenat.png"
    >
      <div class="text-center">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img
            aspect-ratio="30"
            src="/dna.png"
          />
        </v-avatar>
        <h2 class="white--text"></h2>
      </div>
    </v-img>
    <v-divider></v-divider>
    <v-list dark>
      <v-list-item v-for="link in links" :key="link.title" dense router :to="link.route">
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  //props: ["drawer"],
  data() {
    return {
      drawer: null,
      links: [
        {icon:"mdi-microsoft-windows", title:"Dashboard",route:"/"},
        {icon:"mdi-folder", title:"Projets",route:"/projet"},
        {icon:"mdi-camera-front-variant", title:"Client",route:"/client"},
        {icon:"mdi-cog", title:"Poste",route:"/poste"},
        {icon:"mdi-account-multiple-plus", title:"Membres",route:"/membre"},
      ],
    };
  },
};
</script>

<style scoped></style>


<style scoped></style>
<!--
<script>
  export default {
    name:"Sidebar",
    //props: ["drawer"],
    data(){
      return {
        //drawer:null,
        links: [
        ['mdi-folder', 'Projet'],
        ['mdi-camera-front-variant', 'Client'],
        ['mdi-library', 'Poste'],
        ['mdi-account-multiple-plus', 'Membre'],
      ],
      }
    },
    
  }
</script> -->