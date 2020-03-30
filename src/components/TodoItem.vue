<template>
  <div class="todo-item" v-bind:class="{'is-complete': todo.completed}">
    <p>
      <input type="checkbox" v-on:change="status" />
      {{todo.title}}
      <button @click="$emit('del-todo', todo.id)">x</button>
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
  background-color: gray;
  border-bottom: 1px white solid;
  color: aliceblue;
  padding: 10px;
}
.is-complete {
  background-color: green;
  text-decoration: line-through;
}
</style>