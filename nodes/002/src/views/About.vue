<template>
  <div class="about">
    <h1>This is an about page</h1>
    <MyAbout></MyAbout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyAbout from '@/components/MyAbout.vue';

@Component({
  components: {
    MyAbout,
  },
})
export default class About extends Vue {}
</script>