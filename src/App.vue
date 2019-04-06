<template>
  <div id="app">
    <Todos />
    <footer class="info">
      <p>Simple ToDo App</p>
    </footer>
  </div>
</template>

<script>
  import Todos from './components/Todos'
  
  //app Vue instance
  const app = {
    name: 'app',
    components: {
      Todos
    },
    // app initial state
    data: () => {
      return {
      }
    }
  }

  export default app
</script>

<style>
[v-cloak] { display: none; }
</style>
