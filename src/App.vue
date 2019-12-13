<template>
  <div id="app">
    <Header/>
    <main  role="main" class="d-flex flex-column h-100">
    
    <router-view/>
    </main>
    <Footer/>
  </div>
</template>
<script>
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
