<script setup>
</script>

<template>
  <header class="app-header">
    <div class="logo-title">
      <img src="" alt="" class="log">
      <span>xxx</span>
    </div>
    <span class="app-name">智慧殡葬管理系统 </span>
    <span class="date-time">
      2023-04-01 12:00 星期三
    </span>
  </header>
  <div style="height: 90vh;display: flex;">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.app-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dashed $primary-color;
  height: 10vh;
  padding: 0 15px;


  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    height: 15px;
    background: radial-gradient(ellipse at 50% 100%, $primary-color 10%, transparent 50%);
  }


  .logo-title {
    display: flex;
    align-items: center;
    width: 10em;

    .log {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }

  .date-time {
    font-size: 14px;
    width: 10em;
  }

  .app-name {
    font-size: 28px;
    font-weight: bold;
  }
}
</style>
