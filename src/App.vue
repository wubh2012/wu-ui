<template>
  <div id="app">
    <div id="demo">
      <w-button>默认按钮</w-button>
      <w-button type="primary">主要按钮</w-button>
      <w-button type="success">成功按钮</w-button>
      <w-button type="info">信息按钮</w-button>
      <w-button type="warning">警告按钮</w-button>
      <w-button type="danger">危险按钮</w-button>
    </div>
    <div id="demo">
      <w-button icon="w-icon-setting">设置</w-button>
      <w-button icon="w-icon-add" iconPosition="left">添加</w-button>
      <w-button icon="w-icon-edit" iconPosition="right">编辑</w-button>
      <w-button icon="w-icon-delete">删除</w-button>
      <w-button icon="w-icon-download">下载</w-button>
      <w-button icon="w-icon-loading">加载</w-button>
    </div>
    <div id="demo">
      <w-button :loading="loading" @click="loading = !loading">点击显示加载效果</w-button>
    </div>
    <div id="demo1">
      <w-button-group>
        <w-button icon="w-icon-left">上一页</w-button>
        <w-button>第1页</w-button>
        <w-button>第2页</w-button>
        <w-button icon="w-icon-right" iconPosition="right">下一页</w-button>
      </w-button-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      loading: false
    };
  }
};
</script>

<style lang="scss">
@import "@/styles/var.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: $font-size;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#demo {
  margin: 10px;
  .w-button + .w-button {
    margin-left: 10px;
  }
}
</style>
