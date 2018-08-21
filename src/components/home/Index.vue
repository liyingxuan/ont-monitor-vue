<template>
  <div class="container">
    <div class="row">
      <top-nav></top-nav>
    </div>

    <div class="row">
      <div class="col">
        <internet-topology :plots="this.$store.state.InternetTopology.plots"></internet-topology>
      </div>
    </div>

    <div class="row">
      <data-table :plots="this.$store.state.InternetTopology.plotsVal"></data-table>
    </div>
  </div>
</template>

<script>
  import TopNav from '@/components/home/TopNav'
  import TheFooter from '@/components/TheFooter'
  import InternetTopology from '@/components/home/InternetTopology'
  import DataTable from '@/components/home/DataTable'

  export default {
    name: 'Home',
    created: function () {
      this.getPlotsData()
    },
    methods: {
      getPlotsData() {
        this.$store.dispatch('getPlots').then()
      }
    },
    components: {
      InternetTopology,
      TopNav,
      DataTable
    }
  }
</script>

<style>

</style>
