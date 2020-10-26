<template>
  <div>
    <h2 v-colored:background.font="'red'" v-if="visible">{{title}}</h2>
    <h2 v-colored:color.delay="'green'" v-if="visible">{{title}}</h2>

    <button @click="visible = !visible">Toggle</button>
    <button @click="title = 'New title'">Change Titile</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Hello I am Vue!',
      visible: true
    }
  }
}
</script>

<style scoped>

</style>
