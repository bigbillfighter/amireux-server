<template>
  <div id="app" class="fillcontain" style="padding: 0; margin: 0; border: 0">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4, h5, h6, i, b,
  textarea, button, input, select, figure, figcaption {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    font-family: "Microsoft Yahei", sans-serif;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }

  body:focus , div:focus , span:focus , header:focus , footer:focus , nav:focus , section:focus , aside:focus , article:focus ,
  ul:focus , dl:focus , dt:focus , dd:focus , li:focus , a:focus , p:focus , h1:focus , h2:focus , h3:focus , h4:focus ,
  h5:focus , h6:focus , i:focus , b:focus , textarea:focus , button:focus , input:focus , select:focus , figure:focus ,
  figcaption:focus {
    outline: none;
  }

  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: #F5F5F5;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #555;
  }

  input[type="button"], input[type="submit"], input[type="search"], input[type="reset"] {
    -webkit-appearance: none;
  }

  textarea { -webkit-appearance: none;}

  html,body{
    height: 100%;
    width: 100%;
  }

  .fillcontain{
    height: 100%;
    width: 100%;
  }

  .clear:after{
    content: '';
    display: block;
    clear: both;
  }

  .clear{
    zoom:1;
  }

  .back_img{
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .margin{
    margin: 0 auto;
  }

  .left{
    float: left;
  }

  .right{
    float: right;
  }

  .hide{
    display: none;
  }

  .show{
    display: block;
  }

  .ellipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

</style>
