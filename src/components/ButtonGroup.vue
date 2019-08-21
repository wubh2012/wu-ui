<template>
  <div class="w-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "w-button-group"
};
</script>
<style lang="scss" scoped>
.w-button-group {
  .w-button {
    border-radius: 0;
    margin-left: -1px;
    &:hover {
      position: relative;
      z-index: 1;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
  }
}
</style>