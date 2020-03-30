<template>
  <div id="app">
    <Todos v-bind:todos="todos" v-on:del-todo="delTodo" />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";

export default {
  name: "App",
  components: {
    Todos
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Todo one",
          completed: true
        },
        {
          id: 2,
          title: "Todo two",
          completed: false
        },
        {
          id: 3,
          title: "Todo three",
          completed: false
        }
      ]
    };
  },
  methods: {
    delTodo(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
