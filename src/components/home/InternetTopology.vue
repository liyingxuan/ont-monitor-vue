<template>
  <div class="explorer-index-it-panel explorer-card-shadow">
    <div class="internet-topology map"></div>
  </div>
</template>

<script>
  export default {
    name: "it",
    props: ['plots'],
    mounted() {
      this.$nextTick(function () {
        let $this = $(this.$el);

        $this.mapael({
          map: {
            name: "world_countries",
            defaultArea: {
              attrs: {
                fill: "#2B4045",
                stroke: "#141c1e",
                "stroke-width": 0.5
              },
              attrsHover: {
                fill: "#2B4045",
              }
            },
          },
          plots: this.plots,
        })
      })
    },
    methods: {
      mapRelayAni(betweens, idx) {
        if (idx >= betweens.length) return;

        let $this = $(this.$el);
        let _this = this;
        let newLink = {};
        newLink[idx] = {
          between: betweens[idx]
          , attrs: {
            stroke: "#ff8747",
            "stroke-width": 2
          }
        };
        $this.trigger('update', [{
          newLinks: newLink,
          animDuration: 400,
          afterUpdate: function () {
            setTimeout(function () {
              _this.mapRelayAni(betweens, idx + 1)
            }, 200)
          }
        }])
      }
    }
  }
</script>

<style>
  .explorer-index-it-panel {
    position: relative;
    width: 100%;
    margin-top: 28px;
    margin-bottom: -56px;
    clear: both;
  }

  .explorer-index-it-panel .internet-topology {
    width: 100%;
    padding-top: 20px;
    margin: 0 auto;
  }
  .mapael > .map {
    position: relative;
    height: 600px;
  }

  @media screen and (max-width: 768px) {
    .mapael > .map {
      height: 240px;
    }
  }

  .mapael .mapTooltip {
    position: absolute;
    background-color: white;
    border-radius: 3px;
    padding: 10px;
    z-index: 1000;
    display: none;
    color: black;
    font-size: 14px;
    font-family: SourceSansPro-Regular, sans-serif;
  }

  .mapael .mapTooltip .it-tooltip-text {
    margin: 8px;
  }

  .mapael .mapTooltip .it-tooltip-tit {
    display: inline-block;
    width: 76px;
    font-size: 14px;
    color: #2B4045;
  }

  .mapael .mapTooltip .it-tooltip-txt {
    color: #2B4045;
  }

  .mapael .mapTooltip .it-tooltip-status {
    color: #00AE1D;
  }
</style>
