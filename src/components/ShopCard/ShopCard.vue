<template>
  <div id="container">
      <div class="title">
          <slot name="title"> 标题 </slot>
      </div>
      <div class="content">
          <slot name="content"> 内容区 </slot>
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
    // .title

    .content
        padding  0 15px 15px

    .bottom
        width 100%
        height 10px
        background #eee

</style>
