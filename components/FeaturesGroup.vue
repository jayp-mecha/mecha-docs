<script setup lang="ts">
import VPFeatures, {
  Feature,
} from "vitepress/dist/client/theme-default/components/VPFeatures.vue";

defineProps<{
  features: Feature[];
  title: string;
}>();
</script>

<template>
  <div class="feature-group">
    <div class="container">
      <p v-if="title" v-html="title" class="title"></p>
    </div>
  </div>

    <VPFeatures class="VPHomeFeatures" :features="features" />
  
</template>

<style scoped>
.feature-group {
  margin-top: 36px;
  display: flex;
  justify-content: center;
}
.container{
  width:100%;
}


.title {
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  color: var(--vp-c-text-2);
}

@media (min-width: 640px) {
  .feature-group {
    padding: 0 64px;
  }
}

@media (max-width: 639px) {
  .feature-group {
    padding: 0 24px;
  }
}

</style>
