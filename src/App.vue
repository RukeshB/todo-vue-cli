<template>
  <div id="app">
    <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="delTodo" />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import Header from "./components/layout/Header.vue";
import AddTodo from "./components/AddTodo.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },

  methods: {
    delTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((this.todos = this.todos.filter(todo => todo.id != id)))
        .catch(error => console.log(error));
    },

    addTodo(newTodo) {
      const { title, completed } = newTodo;
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => this.todos.push(res.data))
        .catch(error => console.log(error));
      console.log(this.todos);
    }
  },

  created() {
    console.log("hello");
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => {
        this.todos = res.data;
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: white;
  padding: 7px 20px;
  cursor: pointer;
}
</style>
