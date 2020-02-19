<template>
  <div id="container">
      <div class="title">
          <slot name="title"></slot>
      </div>
      <div class="content">
          <slot name="content"></slot>
      </div>
      <div class="bottom"></div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
#container
    width 100%
    font-size 16px

    .content
        padding  0 15px 15px

    .bottom
        width 100%
        height 10px
        background #ededed

</style>
