<template>
  <div id="app">
    <w-button>按钮1</w-button>
    <w-button>按钮2</w-button>
    <w-button>按钮3</w-button>
  </div>
</template>

<script>


export default {
  name: 'app',
  
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root{
  --font-size: 14px;
  --color: #333;
}
body{
  font-size: var(--font-size);
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
  'Segoe UI Emoji', 'Segoe UI Symbol';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
