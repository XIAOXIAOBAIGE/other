<template>
<div class="kugou-content">
		<!-- banner图 -->
		<img src="../assets/images/banner.png" alt class="bg-banner" />
  <LuckyWheel
    ref="LuckyWheel"
    width="300px"
    height="300px"
    :prizes="prizes"
    :default-style="defaultStyle"
    :blocks="blocks"
    :buttons="buttons"
    @start="startCallBack"
    @end="endCallBack"
  />
</div>

</template>

<script>
export default {
  data () {
    return {
      prizes: [],
      defaultStyle: {
        fontColor: '#d64737',
        fontSize: '14px'
      },
      blocks: [
        { padding: '13px', background: '#d64737' }
      ],
      buttons: [
        { radius: '50px', background: '#d64737' },
        { radius: '45px', background: '#fff' },
        { radius: '41px', background: '#f6c66f', pointer: true },
        {
          radius: '35px', background: '#ffdea0',
          imgs: [{ src: require('@/assets/images/bigBottom.png'), width: '65%', top: '-50%' }]
        }
      ],
    }
  },
  mounted () {
    this.getPrizesList()
  },
  methods: {
    getPrizesList () {
      const prizes = []
      let data = ['娃娃机10元', '龙洞逛街', '娃娃机20元', '快乐奶茶', '5.2元红包', '按摩套餐', '周末游玩', '快乐小吃']
      data.forEach((item, index) => {
        prizes.push({
          title: item,
          background: index % 2 ? '#f9e3bb' : '#f8d384',
          fonts: [{ text: item, top: '10%' }],
          imgs:[{ src: require(`@/assets/images/${index}.png`), width: '30%', top: '35%' }],
        })
      })
      this.prizes = prizes
    },
    startCallBack () {
      this.$refs.LuckyWheel.play()
      setTimeout(() => {
        this.$refs.LuckyWheel.stop(Math.random() * 8 >> 0)
      }, 3000)
    },
    endCallBack (prize) {
      alert(`恭喜你获得${prize.title}`)
    },
  }
}
</script>	
<style lang="stylus" scoped>

.kugou-content {
	display flex;
	justify-content :center;
	align-items :center;
  background-color: #000;
	width: 100%;
	overflow: hidden;
	position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
	padding-top: 4.1rem;
	// 顶部图片
	.bg-banner {
		position: absolute;
		top: 0;
		right: 0;
		width: 8.4rem;
	}
	
}
</style>
