<script setup>

import { ref } from 'vue'

let dadosAna = ref({
    nome: 'Ana Laura Manfron Dias',
    turma: '2INFO3',
    git: 'analauradias',
    email: 'anamanfrondias@gmail.com',
    instagram: 'idkanadias'
})

</script>

<template>

    <h1>{{ dadosAna.nome }}</h1>
    <div id="dados">
            
        <div class="coluna" id="img">
            <img src="./fotosMembro/membroAna.png" alt="">
        </div>

        <div class="coluna"  id="text">
            <p>Turma: {{ dadosAna.turma }}</p>
        
            <p>Email: {{ dadosAna.email }}</p>
       
            <p>Git: <a href="https://github.com/analauradias">{{ dadosAna.git }}</a></p>
       
            <p>Instagram: <a href="https://www.instagram.com/idkanadias/">{{ dadosAna.instagram }}</a></p>
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
    border-left: 1px solid  rgba(107, 3, 177, 0.459);
}

</style>

