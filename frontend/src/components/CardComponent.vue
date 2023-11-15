<template>
  <div>
    <q-card
      flat
      style="height: 170px; width: 170px"
      class="transparent q-mt-lg q-mb-lg"
    >
      <img :src="imageUrl" />

      <q-card-section
        ><q-icon color="red-7" name="place" size="sm" />
        <span class="setting-label">: {{ settingName }}</span>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imageUrl: String,
  settingName: String,
});
</script>

<style>
@font-face {
  font-family: futura;
  src: url('../css/fonts/FuturaLT.woff');
}

.setting-label {
  font-family: 'futura';
  color: rgb(0, 58, 203);
  font-size: medium;
  font-weight: bold;
}
</style>
