<template>
  <div class="w-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "w-button-group",
  mounted(){
    // console.log('当前包含的子组件', typeof this.$children, this.$children)
    // console.log('当前元素', this.$el)
    for (const node of this.$el.children) {
      let nodeName = node.nodeName;
      // console.log(nodeName)
      if(nodeName.toUpperCase() !== 'BUTTON'){
        console.warn(`w-button-group 的子元素只允许出现 w-button, 但你写的是 ${nodeName}`);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/_var.scss";
.w-button-group {
  .w-button {
    border-radius: 0;    
    &:not(:first-child){
      margin-left: -1px;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
}
</style>