<template>
    <div id="navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link tag="a" :to="{ name: 'home'}" class="nav-link">Home </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>

          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>

          <ul class="navbar-nav ml-auto">
        
          <li class="nav-item">
            <router-link tag="a" :to="{ name: 'login'}" class="nav-link">LOGIN</router-link>
          </li>
          <li class="nav-item">
             <router-link tag="a" :to="{ name: 'register'}" class="nav-link">REGISTRATION</router-link>
        
          </li>

      
      </ul>

    </div>
    </nav>

    </div>
</template>