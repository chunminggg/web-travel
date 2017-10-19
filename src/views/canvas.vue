<style>
.view{
    width: 640;
    height: 480;
}
</style>

<template>
  <div class="root">
  <canvas id="myView" class="view"></canvas>
  </div>
</template>

<script>
export default {
  data(){
      return {

      }
  },
  created(){
    this.drawView()
  },
  methods:{
    drawView(){

        const canvas = document.querySelector('#myView')
        const gl = canvas.getContext('webgl')
        if(!gl){
            alert('unable to init')
            return
        }
        gl.clearColor(0.0,0.0,0.0,1.0)
        gl.cleart(gl.COLOR_BUFFER_BIT)
    },
  },
}
</script>

