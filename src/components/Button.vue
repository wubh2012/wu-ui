<template>
  <button class="w-button" :class="[
    type? 'w-button--'+type : ''
  ]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "w-button",
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
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
$border-color: #dcdfe6;
$border-radius: 4px;
.w-button {
  font-size: var(--font-size);
  height: $button-height;
  padding: 0 1em;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  background: $button-bg;
  outline: none;
  transition: 0.1s;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }

  &--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus {
      color: #fff;
      background: #66b1ff;
      border-color: #66b1ff;
    }
    &:active {
      color: #fff;
      background: #3a8ee6;
      border-color: #3a8ee6;
    }
  }
  &--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
    &:active {
      background: #5daf34;
      border-color: #5daf34;
      color: #fff;
    }
  }
  &--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
    &:active {
      background: #82848a;
      border-color: #82848a;
      color: #fff;
    }
  }
  &--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
    &:active {
      background: #cf9236;
      border-color: #cf9236;
      color: #fff;
    }
  }
  &--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
    &:active {
      background: #dd6161;
      border-color: #dd6161;
      color: #fff;
    }
  }
}
</style>>
