/** 
  引用该组件，组件设置ref名称，通过this.$refs.名称.setData(),来进行数据传递
*/
<template>
  <div class="water-fall">
    <div class="wf-main" :style="{ height: mainStyle.height }">
      <div
        class="wf-list"
        v-for="(item, index) in list"
        :key="index"
        :style="item.style"
      >
        <!-- v-press="onPress" -->
        <div
          class="wf-content"
          :data-index="index"
          :data-id="item.id"
          v-for="(topic,index) in item.topics"
          :key="index"
        >
          <div class="img-box" :style="{ 'padding-bottom': item.ratio }" >
            <img class="wf-img" :src="topic.picUrl"/>
          </div>
        </div>
        <div class="wf-shade" v-if="item.showShade"></div>
      </div>
    </div>
    <div class="preload">
      <div
        class="preload-list"
        v-for="item in preloadList"
        :key="item.id"
        :style="{ width: listW + 'px' }"
      >
        <div class="img-box" :style="{ 'padding-bottom': item.ratio }">
          <img class="wf-img" :src="item.pic" />
        </div>
      </div>
      <div class="gap"></div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  // import waterFallData from '../../common/datas/waterFall.json'
  export default {
    name: 'water-fall',
    props: {
      initData: {
        type: Object,
        default: () => {
          return {};
        },
      },
    },
    data() {
      return {
        list: [],
        preloadList: [],
        listW: 0,
        gapW: 0,
        gapH: 0,
        startL: { x: 0, y: 0 },
        startR: { x: 0, y: 0 },
        mainStyle: '',
        waterFallData:[]
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.getGapSize('init');
      });
    },
    methods: {
      getGapSize(data = [], type = 'push', index = 0) {
        const gap = this.$el.querySelector('.gap');
        const rect = gap.getBoundingClientRect();
        this.gapW = rect.width;
        this.gapH = rect.height;
        this.listW = (this.gapW - this.gapH) / 2;
        this.startR.x = this.listW + this.gapH;
        if (data === 'init') {
          return;
        }
        this.setData(data, type, index);
      },
      // push 增加 reset 重置
      setData(data, type, index) {
        if (!this.gapH) {
          setTimeout(() => {
            this.getGapSize(data, type, index);
          }, 1);
          return;
        }
        const list = _.cloneDeep(data);

        for (let item of list) {
          item.ratio = (item.height * 100) / item.width + '%';
        }
        this.preloadList = list;
        this.$nextTick(() => {
          const preload = this.$el.querySelectorAll('.preload-list');
          for (let i = 0; i < preload.length; i++) {
            let rect = preload[i].getBoundingClientRect();
            list[i]['vw'] = rect.width;
            list[i]['vh'] = rect.height;
          }
          this.addToList(list, type, index);
          this.preloadList = [];
        });
      },
      addToList(list, type) {
        const startL = { ...this.startL };
        const startR = { ...this.startR };
        const gapH = this.gapH;
        if (type == 'reset') {
          startL.y = 0;
          startR.y = 0;
        }
        for (let item of list) {
          let [left, top] = [0, 0];
          if (startL.y < startR.y) {
            left = startL.x;
            top = startL.y;
            startL.y = startL.y + item.vh + gapH;
          } else {
            left = startR.x;
            top = startR.y;
            startR.y = startR.y + item.vh + gapH;
          }
          item.style = {
            left: `${left}px`,
            top: `${top}px`,
          };
        }
        this.startL = startL;
        this.startR = startR;
        this.mainStyle = {
          height: Math.max(startL.y, startR.y) + 'px',
        };
        this.list = list;
        // eslint-disable-next-line no-console
        console.log(this.list,'xxx')
      },
      // onPress(el) {
      //   // console.log(el);
      //   const curIndex = el.getAttribute('data-index');
      //   const article = { ...this.list[curIndex] };
      //   article.showShade = true;
      //   this.list.splice(curIndex, 1, article);
      // },
    },
  }
</script>

<style lang="stylus" scoped>
// lang='stylus' rel='stylesheet/stylus'
.water-fall {
  position: relative;
  padding: 15px 10px 0;
  z-index: 1;
  background #eee;
}
.wf-main {
  width 355px
  position: relative;
  left: 0px;
  top: 0px;
  height 200px;
  background #bfa;
}
.wf-list, .preload-list {
  position: absolute;
  width: 162px;
  background #789
  overflow: hidden;
  .wf-content {
    position: relative;
    left: 0;
    top: 0;
    width: 162px;
    height: 200px
  }
  .img-box {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
  }
  .wf-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 95px;
  }
}
.wf-shade {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .8);
}
.preload {
  position: absolute;
  left: -1000px;
  top: -1000px;
  width: 100%;
  visibility: hidden;
}
.gap {
  width: 100%;
  height: 10px;
}
</style>
