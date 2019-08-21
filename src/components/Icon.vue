<template>
  <svg class="w-icon" aria-hidden="true">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>
<script>
export default {
  name: 'w-icon',
  props: ['name']
};
</script>
<style lang="scss">
.w-icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>