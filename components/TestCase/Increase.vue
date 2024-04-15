<script setup lang="ts">
// const count = ref<number>(0)
const count = useState<number>('count', () => 0)

const increase = () => {
  count.value++
}
</script>

<template>
  <button data-testid="increase-button" @click="increase">
    Count is: {{ count }}
  </button>
</template>
