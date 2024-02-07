<script setup lang="ts">
const appConfig = useAppConfig()

const clientTitle = appConfig.app.title

const { data: serverTitle } = useFetch('/api/title')
</script>

<template>
  <div>
    <p>Client: {{ clientTitle }}</p>
    <p>Server: {{ serverTitle }}</p>
  </div>
</template>
