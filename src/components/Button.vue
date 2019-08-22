<template>
  <button class="w-button" 
    :class="[type? 'w-button--'+type : '', {'icon-right': iconPosition === 'right'}]" 
    @click="$emit('click')">
    <w-icon v-if="!!icon && !loading" :name="icon" class="icon"></w-icon>
    <w-icon v-if="loading" name="w-icon-loading" class="icon loading"></w-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "w-button",
  props: {
    type: {
      type: String,
      default: "default",
      validator: function(value){
        return ['default', 'primary', 'info', 'success', 'danger', 'warning'].indexOf(value) !== -1;
      }
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator: function(value){
        // 这个值必须匹配下列字符串中的一个
        return ['left', 'right'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/var.scss";
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$button-primary:#409eff;
$button-primary-hover: lighten($button-primary, 10%);
$button-primary-active: darken($button-primary, 10%);
$button-success: #67c23a;
$button-success-hover: lighten($button-success, 10%);
$button-success-active: darken($button-success, 10%);
$button-info: #909399;
$button-info-hover: lighten($button-info, 10%);
$button-info-active: darken($button-info, 10%);
$button-warning: #e6a23c;
$button-warning-hover: lighten($button-warning, 10%);
$button-warning-active: darken($button-warning, 10%);
$button-danger: #f56c6c;
$button-danger-hover: lighten($button-danger, 10%);
$button-danger-active: darken($button-danger, 10%);

@keyframes spin {
  0%{ transform: rotate(0deg)}
  100% { transform: rotate(360deg)}
}

.w-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  vertical-align: middle;
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
  .loading{
    animation: spin 2s linear infinite;
  }
  > .icon{ order: 1; margin-right: .3em; }
  > .content{ order: 2; }

  &.icon-right{
    > .icon{ order: 2; margin-right: 0; margin-left: .3em; }
    > .content{ order: 1; }
  }

  &--primary {
    color: #fff;
    background-color: $button-primary;
    border-color: $button-primary;
    &:hover,
    &:focus {
      color: #fff;
      background: $button-primary-hover;
      border-color: $button-primary-hover;
    }
    &:active {
      color: #fff;
      background: $button-primary-active;
      border-color: $button-primary-active;
    }
  }
  &--success {
    color: #fff;
    background-color: $button-success;
    border-color: $button-success;
    &:hover,
    &:focus {
      background: $button-success-hover;
      border-color: $button-success-hover;
      color: #fff;
    }
    &:active {
      background: $button-success-active;
      border-color: $button-success-active;
      color: #fff;
    }
  }
  &--info {
    color: #fff;
    background-color: $button-info;
    border-color: $button-info;
    &:hover,
    &:focus {
      background: $button-info-hover;
      border-color: $button-info-hover;
      color: #fff;
    }
    &:active {
      background: $button-info-active;
      border-color: $button-info-active;
      color: #fff;
    }
  }
  &--warning {
    color: #fff;
    background-color: $button-warning;
    border-color: $button-warning;
    &:hover,
    &:focus {
      background: $button-warning-hover;
      border-color: $button-warning-hover;
      color: #fff;
    }
    &:active {
      background: $button-warning-active;
      border-color: $button-warning-active;
      color: #fff;
    }
  }
  &--danger {
    color: #fff;
    background-color: $button-danger;
    border-color: $button-danger;
    &:hover,
    &:focus {
      background: $button-danger-hover;
      border-color: $button-danger-hover;
      color: #fff;
    }
    &:active {
      background: $button-danger-active;
      border-color: $button-danger-active;
      color: #fff;
    }
  }
}
</style>>
