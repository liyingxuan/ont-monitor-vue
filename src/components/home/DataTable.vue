<template>
  <div class="row-data-table">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Node</th>
        <th scope="col">Region</th>
        <th scope="col">Status</th>
        <th scope="col">ONT ID</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in plots">
        <th scope="row" class="tr-td-name">{{ item[3] }}</th>
        <td>{{ item[2] }}</td>
        <td class="tr-td-color">{{ item[4] }}</td>
        <td>{{ item[5] }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
	export default {
		name: "data-table",
    props: ['plots']
  }
</script>

<style scoped>
  .row-data-table {
    width: 100%;
    background-color: white;
    padding: 0 30px;
  }
  .row-data-table > table > thead > tr {
    height: 72px;
    font-family: SourceSansPro-Bold, sans-serif;
    font-size: 18px;
    color: #595757;
  }
  .row-data-table > table > tbody > tr {
    height: 56px;
    line-height: 32px;
    font-family: SourceSansPro-Regular, sans-serif;
    font-size: 14px;
    color: #AFACAC;
  }
  .tr-td-name {
    color: #2B4045;
    font-weight: bold;
  }
  .tr-td-color {
    color: #00AE1D;
  }
</style>
