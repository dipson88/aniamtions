<template>
  <Motion
    :value="curCoordinates.y"
    :spring="config"
  >
    <template slot-scope="values">
      <div class="motions-ball">
        <div
          ref="ball"
          :style="{transform: `translate(${curCoordinates.x}px, ${values.value}px)`}"
          class="motions-ball__ball"
          @mousedown="onMouseDown"
          @mouseup="onMouseUp"
        />
      </div>
    </template>
  </Motion>
</template>

<script>
export default {
  name: 'MotionsBall',
  data () {
    return {
      isBallSelected: false,
      curCoordinates: { x: 0, y: 0 },
      startCoordinates: { x: 0, y: 0 },
      config: {
        stiffness: 180,
        damping: 12,
        precision: 0.01
      }
    }
  },
  watch: {
    isBallSelected (value) {
      if (value) {
        document.addEventListener('mousemove', this.mouseMove)
        document.addEventListener('mouseup', this.onMouseUp)
      } else {
        document.removeEventListener('mousemove', this.mouseMove)
        document.removeEventListener('mouseup', this.onMouseUp)
      }
    },
    curCoordinates: {
      handler: function (value) {
        if (value.y > 0) {
          value.y = 0
        }
      },
      deep: true
    }
  },
  computed: {
    defautCoordinates () {
      return this.getCoords(this.$refs.ball)
    }
  },
  methods: {
    onMouseDown (event) {
      this.isBallSelected = true
    },
    mouseMove (event) {
      this.curCoordinates.x = event.x - this.defautCoordinates.x
      this.curCoordinates.y = event.y - this.defautCoordinates.y
    },
    onMouseUp (event) {
      this.curCoordinates.y = 0
      this.isBallSelected = false
    },
    getCoords (elem) {
      var box = elem.getBoundingClientRect()

      return {
        y: box.top + pageYOffset,
        x: box.left + pageXOffset
      }
    }
  }
}
</script>

<style lang="scss">
.motions-ball {
  margin-top: 500px;
  border-bottom: 2px solid black;

  &__ball {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: brown;
    margin: 0 auto;
  }
}
</style>
