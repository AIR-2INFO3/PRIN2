<script setup>

import { ref } from 'vue'

let dadosBelli = ref({
    nome: 'Isabelli Luísa Rosa',
    turma: '2INFO3',
    git: 'isabellirosa',
    email: 'isabelli.ifc@gmail.com',
    instagram: 'belli_rosa_'
})

</script>

<template>

    <h1>{{ dadosBelli.nome }}</h1>
    <div id="dados">
            
        <div class="coluna" id="img">
            <img src="./fotosMembro/membroBelli.png" alt="">
        </div>

        <div class="coluna"  id="text">
            <p>Turma: {{ dadosBelli.turma }}</p>
        
            <p>Email: {{ dadosBelli.email }}</p>
       
            <p>Git: <a href="https://github.com/isabellirosa">{{ dadosBelli.git }}</a></p>
       
            <p>Instagram: <a href="https://www.instagram.com/belli_rosa_/">{{ dadosBelli.instagram }}</a></p>
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
    border-left: 1px solid  #e800b25e;
}

</style>

