<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'

defineProps<{ msg: string }>() 
const res = ref(0)
const store = useStore();

defineExpose({
  res
})
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div>{{ res }}</div>
  <button>anniu</button>
  <el-button>按钮</el-button>

  
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
