<template>
  <button class="w-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "w-button",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
.w-button {
  font-size: var(--font-size);
  height: $button-height;
  padding: 0 1em;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  background: $button-bg;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
}
</style>>
