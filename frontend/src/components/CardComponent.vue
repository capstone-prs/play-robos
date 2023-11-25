<template>
  <div>
    <q-badge v-if="active" color="green-4" rounded floating />

    <q-card style="height: 150px; width: 200px; border-radius: 50px">
      <img
        class="setting-icon"
        :src="imageUrl"
        style="
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
          padding: 5px;
          box-shadow: rgba(163, 163, 163, 0.55) 5px 5px 2px -3px;
        "
      />

      <q-card-section
        class="q-pa-none"
        style="
          width: 190px;
          height: 50px;
          border-bottom-left-radius: 50px;
          border-bottom-right-radius: 50px;
        "
        align="center"
      >
        <div class="setting-label q-mt-sm" align="center">
          <!-- <q-icon color="amber" name="place" size="sm" /> -->
          <span> {{ settingName }}</span>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imageUrl: String,
  settingName: String,
  active: Boolean,
});
</script>

<style>
@font-face {
  font-family: hitchcut;
  src: url('/fonts/Hitchcut-Regular.woff');
}

.setting-label {
  font-family: 'hitchcut';
  font-size: medium;
  font-weight: lighter;
  color: rgb(237, 162, 0);
  display: inline-block;
  text-transform: uppercase;
  /* text-shadow: 0px 0px 0 rgb(236, 194, 44), 0px 1px 0 rgb(221, 179, 29),
    0px 2px 0 rgb(205, 163, 13), 0px 3px 0 rgb(189, 147, 0),
    0px 4px 3px rgba(0, 0, 0, 0.17), 0px 4px 1px rgba(0, 0, 0, 0.5),
    0px 0px 3px rgba(0, 0, 0, 0.2); */
  letter-spacing: 3px;
}
</style>
