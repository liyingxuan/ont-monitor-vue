<template>
  <div class="container" style="width: 944px">
    <div class="row">
      <top-nav></top-nav>
    </div>

    <div class="row">
      <internet-topology
        :plots="this.$store.state.InternetTopology.plots"
        :plotsNameList="this.$store.state.InternetTopology.plotsName"></internet-topology>
    </div>

    <!--<div class="row">-->
      <!--<blockchain-info></blockchain-info>-->
    <!--</div>-->

    <div class="row">
      <data-table :plots="this.$store.state.InternetTopology.plotsVal"></data-table>
    </div>
  </div>
</template>

<script>
  import TopNav from '@/components/home/TopNav'
  import InternetTopology from '@/components/home/InternetTopology'
  import DataTable from '@/components/home/DataTable'
  import BlockchainInfo from '@/components/home/BlockchainInfo'

  export default {
    name: 'Home',
    components: {
      InternetTopology,
      TopNav,
      DataTable,
      BlockchainInfo
    }
  }
</script>

<style>

</style>
