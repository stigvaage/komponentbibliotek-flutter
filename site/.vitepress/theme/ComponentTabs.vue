<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const tabs = [
  { id: 'oversikt', label: 'Oversikt' },
  { id: 'kode', label: 'Kode' },
  { id: 'tilgjengelighet', label: 'Tilgjengelighet' },
]

const activeTab = ref('oversikt')

function setTabFromHash() {
  const hash = window.location.hash.replace('#', '')
  if (tabs.some((t) => t.id === hash)) {
    activeTab.value = hash
  }
}

function selectTab(id: string) {
  activeTab.value = id
  window.history.replaceState(null, '', `#${id}`)
}

onMounted(() => {
  setTabFromHash()
  window.addEventListener('hashchange', setTabFromHash)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', setTabFromHash)
})
</script>

<template>
  <div class="component-tabs">
    <nav class="component-tabs-nav" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :id="`tab-${tab.id}`"
        role="tab"
        :aria-selected="activeTab === tab.id"
        :aria-controls="`panel-${tab.id}`"
        :class="['component-tab-btn', { active: activeTab === tab.id }]"
        @click="selectTab(tab.id)"
      >
        {{ tab.label }}
      </button>
    </nav>
    <div v-show="activeTab === 'oversikt'" id="panel-oversikt" role="tabpanel" aria-labelledby="tab-oversikt" class="component-tab-panel">
      <slot name="oversikt" />
    </div>
    <div v-show="activeTab === 'kode'" id="panel-kode" role="tabpanel" aria-labelledby="tab-kode" class="component-tab-panel">
      <slot name="kode" />
    </div>
    <div v-show="activeTab === 'tilgjengelighet'" id="panel-tilgjengelighet" role="tabpanel" aria-labelledby="tab-tilgjengelighet" class="component-tab-panel">
      <slot name="tilgjengelighet" />
    </div>
  </div>
</template>
