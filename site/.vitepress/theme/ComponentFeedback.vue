<script setup lang="ts">
const props = defineProps<{
  component: string
}>()

const issueUrl = `https://github.com/stigvaage/designsystemet-flutter/issues/new?title=${encodeURIComponent(`Innspill: ${props.component}`)}&labels=komponent-innspill`
</script>

<template>
  <div class="component-feedback">
    <p>
      Har du innspill til denne komponenten?
      <a :href="issueUrl" target="_blank" rel="noopener noreferrer">Send innspill på GitHub</a>
    </p>
  </div>
</template>
