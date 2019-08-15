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
  .w-button + .w-button {
    margin-left: 10px;
  }
}
</style>
