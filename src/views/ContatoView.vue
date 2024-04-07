<script setup>


</script>

<template>
   <main>
    <div class="container py-5">
        <!-- Contact Form Block -->
        <div class="col-xl-6">
          <h2 class="pb-4">Contate-nos!</h2>
          <div class="row g-4">
            <div class="col-6 mb-3">
              <label for="exampleFormControlInput1" class="form-label">Nome</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Insira seu nome">
            </div>
            <div class="col-6 mb-3">
              <label for="exampleFormControlInput1" class="form-label">Sobrenome</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Insira seu sobrenome">
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Insira seu e-mail">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Telefone</label>
            <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="Insira seu telefone">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Menssagem</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="button" class="btn btn-dark">Enviar</button>
        </div>
      </div>
    
  </main>

</template>

<style scoped>

main{
    margin-top: 7%;
   margin-left: 30%; 
}

h2{
        font-size: 100px;
        font-family: "Katibeh", serif;
        font-weight:bold;
        line-height: 0.8;
        letter-spacing: 3px;
        color:  rgb(107, 3, 177);
        text-align: center;
    }

button{
    background-color:  #2A359F;
    border: solid 1px transparent;
}    

button:hover{
    background-color: #E800B2;
    border: solid 1px transparent;
}

</style>


