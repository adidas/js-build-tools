<template>
  <div class="component">
    <span class="style">Scss</span> &amp; <span class="lang">JS</span>
  </div>
</template>

<script>
export default {
  name: 'custom-component'
};
</script>

<style lang="scss">
  .component {
    .style {
      padding: 5px;
      color: deeppink;
      font-weight: bold;
    }

    .lang {
      color: black;
      background: yellow;
      padding: 5px;
    }
  }
</style>
