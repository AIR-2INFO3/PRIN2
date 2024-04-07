<script setup>

import { ref } from 'vue'

let dadosRafa = ref({
    nome: 'Rafaela Barbieri da Cruz',
    turma: '2INFO3',
    git: 'rafaelabarbieric',
    email: 'rafaelabarbieric@gmail.com',
    instagram: 'rafacbela'
})

</script>

<template>

    <h1>{{ dadosRafa.nome }}</h1>
    <div id="dados">
            
        <div class="coluna" id="img">
            <img src="./fotosMembro/membroRafa.png" alt="">
        </div>

        <div class="coluna"  id="text">
            <p>Turma: {{ dadosRafa.turma }}</p>
        
            <p>Email: {{ dadosRafa.email }}</p>
       
            <p>Git: <a href="https://github.com/rafaelabarbieric">{{ dadosRafa.git }}</a></p>
       
            <p>Instagram: <a href="https://www.instagram.com/rafacbela/">{{ dadosRafa.instagram }}</a></p>
        </div>

    </div>
  
</template>

<style scoped>

*{
    margin: 0;
    padding: 0;
    font-family: "Katibeh", serif;
}

h1{
    text-align: center;
    font-weight:bold;
    font-size: 80px;
}

p{
    font-size: 30px;
    margin-left: 10px;
}

img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
}

#dados{
    display: grid;
    grid-template-columns: auto auto;
    padding: 50px;
}

.coluna{
    padding: 20px;
}

a{
    color: black;
    text-decoration: none;
}

#img{
    text-align: right;
}

#text{
    border-left: 1px solid  #2a369f6e;
}

</style>

