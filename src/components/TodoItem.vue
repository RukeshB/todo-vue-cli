<template>
  <div class="todo-item" v-bind:class="{'is-complete': todo.completed}">
    <p>
      <input type="checkbox" v-on:change="status" />
      {{todo.title}}
      <button @click="$emit('del-todo', todo.id)" class="del">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoIteam",
  props: ["todo"],
  methods: {
    status() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
.todo-item {
  background-color: lightgray;
  border-bottom: 1px white solid;
  color: black;
  padding: 10px;
}
.is-complete {
  text-decoration: line-through;
}
.del {
  width: 15px;
  float: right;
  border: none;
  border-radius: 50%;
  color: white;
  background: red;
  cursor: pointer;
}
</style>