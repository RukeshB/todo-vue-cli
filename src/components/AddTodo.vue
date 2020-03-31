<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="title" name="addtodo" placeholder="Add Todo ...." />
      <input type="submit" value="submit" class="btn" />
    </form>
  </div>
</template>

<script>
// import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo() {
      // e.preventDefult();
      const newTodo = {
        // id: uuidv4(),
        title: this.title,
        completed: false
      };
      this.title = "";
      this.$emit("add-todo", newTodo);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 5px;
}

inpute[type="submit"] {
  flex: 2;
  color: #333;
}
</style>