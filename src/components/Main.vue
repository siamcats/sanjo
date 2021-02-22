<template>
  <div class="outer">
    <div class="inner">
      <div id="map-container"></div>
    </div>
    <div id="title"></div>
  </div>
</template>

<script>
import * as d3 from 'd3'
import geoJson from '../assets/japan.geo.json'
export default {
  data () {
    return {
    }
  },
  methods: {
    window: onload = function () {
      // 描画エリア
      var width = 800
      var height = 1000
      // 経度
      var west = 127
      var east = 147
      // 緯度 ※経度範囲に合わせてスケールを決めるため、描画エリアによってトリツメされる可能性あり
      var north = 46
      var south = 30

      var projection = d3.geoMercator()
        .center([(west + east) / 2, (north + south) / 2]) // 中心点の経度,緯度
        .translate([width / 2, height / 2]) // 中心点
        .scale(width / (2 * Math.PI * ((east - west) / 360))) // 経度範囲に合わせてスケールを決める

      var path = d3.geoPath(projection)

      const svg = d3
        .select(`#map-container`)
        .append(`svg`)
        .attr(`viewBox`, `0 0 ${width} ${height}`)
        .attr(`width`, `100%`)
        .attr(`height`, `100%`)

      svg
        .selectAll(`path`)
        .data(geoJson.features)
        .enter()
        .append(`path`)
        .attr(`d`, path)
        .attr(`stroke`, `#fff`)
        .attr(`stroke-width`, 0.25)
        .attr(`fill`, `#2c3e50`)
        .attr(`fill-opacity`, 100)
        .on('mouseover', mouseover)
        .on('mouseout', mouseout)
        .on('mousedown', drag)
        .on('mouseup', drop)
    }
  }
}
function mouseover (d) {
  d3.select(this).style('fill', '#f9f1e6')
}
function mouseout (d) {
  d3.select(this).style('fill', '#2c3e50')
}
function drag () {

}
function drop () {

}
</script>

<style scoped>
.outer{
  position: relative;
  padding: 20px;
}

#map-container {
  width: 80%;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border: solid 10px #ffd916;
  /* background-color: #ffd916; */
}
#title{
  position: absolute;
  top: 50px;
  font-size: 3em;
}
</style>
