<template>
  <div>
    <!-- <Motion
      :value="offset" tag="div"
      class="demo-container"
    >
      <div
        class="demo"
        :style="{ width: 100, height: 100, transform: `translateX(${readyInput}px)` }"
      >
      </div>
    </Motion>
    <input
      :value="valueInput"
      @input="onInput"
    />
    <button @click="onClick">
      Set
    </button> -->
    <hr />
    <Motion :value="n">
      <template slot-scope="values">
        <span>Value is</span>
        <pre>{{ values }}</pre>
        <div class="demo-container">
          <div
            class="demo"
            :style="{transform: `translate3d(${values.value}px, 0, 0)`}"
          />
        </div>
      </template>
    </Motion>
    <input v-model.number="n" step="10" type="number" />
    <button @click="toggle">Toggle</button>
    <br/>
  </div>
</template>

<script>
export default {
  name: 'MotionTest',
  // props: {
  //   value: {
  //     type: Number,
  //     default: 100
  //   }
  // },
  data () {
    return {
      n: 0,
      max: 200
      // offset: 500,
      // valueInput: 100,
      // readyInput: 100
    }
  },
  methods: {
    toggle () {
      this.n = this.n < this.max / 2
        ? this.max
        : 0
    }
    // onInput (event) {
    //   console.log(event.target.value)
    //   this.valueInput = event.target.value
    // },
    // onClick () {
    //   this.readyInput = this.valueInput
    // }
  }
}
</script>

<style>
.demo {
  width: 100px;
  height: 100px;
  background-color: crimson;
}

.demo-container {
  width: 300px;
  background-color: #d3d3d3;
}
</style>
