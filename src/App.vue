<template>
  <div>
    <h2>{{ title }}</h2>
    <h2>{{ title | lowercase }}</h2>
    <h2>{{ title | uppercase }}</h2>
    <h2>{{ title | uppercase | lowercase }}</h2>

    <hr />

    <input type="text" v-model="searchName" />

    <ul>
      <li v-for="name of filteredNames">{{ name }}</li>
    </ul>

    <app-list></app-list>
  </div>
</template>

<script>
import listMixin from "./listMixin";

export default {
  data() {
    return {
      title: "Hello I am Vue!"
    };
  },
  mixins: [listMixin],
  filters: {
    lowercase(value) {
      return value.toLowerCase();
    }
  }
};
</script>

<style></style>
