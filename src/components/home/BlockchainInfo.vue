<template>
  <div class="bc-info-row">
    <div class="row row-bc-info-tit">
      <div class="col text-center">Last Block</div>
      <div class="col text-center">Transaction Number</div>
      <div class="col text-center">Whole Network Node</div>
      <div class="col text-center">ONT ID</div>
    </div>
    <div class="row row-bc-info-data">
      <div class="col text-center">{{  }}</div>
      <div class="col text-center">{{  }}</div>
      <div class="col text-center">{{  }}</div>
      <div class="col text-center">{{  }}</div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "blockchain-info",
    mounted: function () {
      this.getInfos()
    },
    methods: {
      getInfos() {
        // this.axios.get('https://explorer.ont.io/api/v1/explorer/summary').then(response => {
        //   console.log(response.data)
        // })
      }
    }
	}
</script>

<style scoped>
  .bc-info-row {
    width: 100%;
    padding: 0 0 64px;
    color: white;
  }
  .row-bc-info-tit {
    opacity: 0.3;
    font-family: SourceSansPro-Bold, sans-serif;
    font-size: 24px;
    color: #FFFFFF;
  }
  .row-bc-info-data {
    font-family: SourceSansPro-Light, sans-serif;
    font-size: 48px;
    color: #FFFFFF;
    font-weight: 100;
  }
</style>
