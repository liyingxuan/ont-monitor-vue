<template>
  <div class="row-data-table">
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Node</th>
          <th scope="col">Region</th>
          <!--<th scope="col">Status</th>-->
          <th scope="col">ONT ID</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in plots">
          <td>{{index++}}</td>
          <td class="tr-td-name">{{ item[3] }}</td>
          <td>{{ item[2] }}</td>
          <!--<td class="tr-td-color">{{ item[4] }}</td>-->
          <td class="td-ont-id">
            <a target="_blank" :href="'https://explorer.ont.io/ontid/' + item[5]">
              {{ item[5].substr(0,12) + '...' + item[5].substr(38) }}
            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
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
    background-color: #f4f4f4;
    padding: 0 15px;
  }

  .row-data-table > .table-responsive > table > thead > tr {
    height: 64px;
    font-family: SourceSansPro-Bold, sans-serif;
    font-size: 18px;
    color: #595757;
  }

  .row-data-table > .table-responsive > table > tbody > tr {
    line-height: 28px;
    font-family: SourceSansPro-Regular, sans-serif;
    font-size: 14px;
    color: #AFACAC;
  }

  .td-ont-id > a {
    color: #36a3bc;
  }

  .tr-td-name {
    color: #2B4045;
    font-weight: bold;
  }

  .tr-td-color {
    color: #00AE1D;
  }
</style>
