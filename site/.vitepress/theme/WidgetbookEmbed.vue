<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  component: string
}>()

const baseUrl = import.meta.env.BASE_URL ?? '/designsystemet-flutter/'
const widgetbookUrl = computed(() => {
  const path = props.component
    .replace(/ /g, '-')
    .toLowerCase()
  return `${baseUrl}widgetbook/#/?path=${encodeURIComponent(path)}`
})

const componentName = computed(() => {
  const parts = props.component.split('/')
  return parts.length === 3 ? parts[1] : parts[parts.length - 1]
})

const showEmbed = ref(false)
</script>

<template>
  <div class="widgetbook-embed">
    <div class="widgetbook-embed-header">
      <span class="widgetbook-embed-title">{{ componentName }} — interaktiv forhåndsvisning</span>
      <div class="widgetbook-embed-actions">
        <button
          v-if="!showEmbed"
          class="widgetbook-embed-btn"
          @click="showEmbed = true"
        >
          Vis forhåndsvisning
        </button>
        <button
          v-else
          class="widgetbook-embed-btn secondary"
          @click="showEmbed = false"
        >
          Skjul
        </button>
        <a
          :href="widgetbookUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="widgetbook-embed-btn"
          title="Åpne i nytt vindu"
        >
          Åpne i nytt vindu &#8599;
        </a>
      </div>
    </div>
    <iframe
      v-if="showEmbed"
      :src="widgetbookUrl"
      class="widgetbook-embed-frame"
      title="Widgetbook forhåndsvisning"
      loading="lazy"
      allow="clipboard-write"
    />
  </div>
</template>

<style scoped>
.widgetbook-embed {
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.widgetbook-embed-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  flex-wrap: wrap;
}

.widgetbook-embed-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.widgetbook-embed-actions {
  display: flex;
  gap: 8px;
}

.widgetbook-embed-btn {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 6px;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  font-family: var(--vp-font-family-base);
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s;
}

.widgetbook-embed-btn:hover {
  opacity: 0.85;
}

.widgetbook-embed-btn.secondary {
  background: transparent;
  color: var(--vp-c-brand-1);
}

.widgetbook-embed-btn:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.widgetbook-embed-frame {
  width: 100%;
  height: 500px;
  border: none;
  background: #fff;
}

.dark .widgetbook-embed-frame {
  background: #1a1a1a;
}

@media (max-width: 640px) {
  .widgetbook-embed-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .widgetbook-embed-frame {
    height: 400px;
  }
}
</style>
