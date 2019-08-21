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
      <w-button icon="icon-setting">设置</w-button>
      <w-button icon="icon-add" iconPosition="left">添加</w-button>
      <w-button icon="icon-edit" iconPosition="right">编辑</w-button>
      <w-button icon="icon-delete">删除</w-button>
      <w-button icon="icon-download">下载</w-button>
      <w-button icon="icon-loading">加载中...</w-button>
    </div>
    <div id="demo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-add"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-edit"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-delete"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --font-size: 14px;
  --color: #333;
}
body {
  font-size: var(--font-size);
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
