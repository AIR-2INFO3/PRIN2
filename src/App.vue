<script setup>

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
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Projects
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li><a class="dropdown-item" href="#">Projeto roxo</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Projeto rosa</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Projeto azul</a></li>
                        </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Members
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                              <li><a class="dropdown-item" href="#">Ana</a></li>
                              <li><hr class="dropdown-divider"></li>
                              <li><a class="dropdown-item" href="#">Isabelli</a></li>
                              <li><hr class="dropdown-divider"></li>
                              <li><a class="dropdown-item" href="#">Rafaela</a></li>
                              </ul>
                              </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
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
    <main>
        <div id="organization">
        <h1>Organization AIR</h1>
        <h2>from 2INFO3</h2>
    </div>
      </main>
</template>

<style scoped>
 h1{
        font-size: 130px;
        font-family: "Katibeh", serif;
        font-weight:bold;
        line-height: 0.8;
        letter-spacing: 3px;
        color: black;
      }
      h2{
        font-size:70px;
        font-family: "Katibeh", serif;
        font-weight: bold;
        line-height: 0.8;
        color: rgb(107, 3, 177);
        letter-spacing: 1px;
        text-align:end;
      }
      main{
        display: flex; 
        align-items: center; 
        justify-content: center;
        height: 400px;
      }
      #organization{
        width: max-content;
        }
</style>
