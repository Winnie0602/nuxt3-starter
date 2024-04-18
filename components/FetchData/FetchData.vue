<script setup lang="ts">
const props = defineProps({
  id: { type: Number, required: true },
})

interface Data {
  id: number
}

const { data, execute } = await useFetch<Data>(`/api/test/${props.id}`, {
  immediate: false,
  method: 'POST',
})

const onClick = async () => {
  await execute()
}
</script>

<template>
  <div>
    <h1>Fetch Data</h1>

    <button data-testid="api-button" @click="onClick">Click</button>

    <p data-testid="data-id">{{ data?.id }}</p>
    <pre>{{ data }}</pre>
  </div>
</template>
