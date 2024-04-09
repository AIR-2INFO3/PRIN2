<script setup>
import { RouterLink, RouterView  } from 'vue-router'
</script>

<template>

  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <img src="./imagens/cardapio.png" alt="menu"/>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                          <img src="./imagens/codificacao.png" alt="icon do site" width="40px"/></a>
                    </li>
                    <li class="nav-item">
                      <RouterLink to="/" class="nav-link">Home</RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Projects
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li><RouterLink to="/ProjRoxo" class="dropdown-item">Projeto roxo</RouterLink></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><RouterLink to="/ProjRosa" class="dropdown-item">Projeto rosa</RouterLink></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><RouterLink to="/ProjAzul" class="dropdown-item">Projeto azul</RouterLink></li>
                        </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Members
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                              <li><RouterLink to="/Ana" class="dropdown-item">Ana</RouterLink></li>
                              <li><hr class="dropdown-divider"></li>
                              <li><RouterLink to="/Isabelli" class="dropdown-item">Isabelli</RouterLink></li>
                              <li><hr class="dropdown-divider"></li>
                              <li><RouterLink to="/Rafaela" class="dropdown-item">Rafaela</RouterLink></li>
                              </ul>
                              </li>
                    <li class="nav-item">
                      <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
                    </li>
                    </ul>
                    <div class="buscar">
                    <form class="d-flex">
                      <i class='bx bx-search-alt-2 search-item'></i> <input class="form-control me-2" type="search"
                        placeholder="Search" aria-label="Search">
                    </form>
                  </div>

            </div>
        </div>
    </nav>
   <RouterView />
   
</template>
 
<style scoped>
 
    
      main{
        display: flex; 
        align-items: center; 
        justify-content: center;
        height: 400px;
      }
    
</style>
