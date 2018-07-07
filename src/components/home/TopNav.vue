<template>
  <div class="row-top-nav">
    <img class="navbar-logo" src="./../../assets/logo.png" alt="">

    <a target="_blank" class="btn btn-info" href="https://explorer.ont.io/">
      {{ $t('navbar.bcExplorer') }}
    </a>

    <div class="main-net-icon-1">
      <div class="main-net-icon-2">
        <div class="main-net-icon-3"></div>
      </div>
    </div>

    <p class="main-net-txt">Mainnet</p>
  </div>
</template>

<script>
	export default {
		name: "top-nav"
	}
</script>

<style scoped>
  .row-top-nav {
    width: 100%;
    height: 56px;
    color: white;
    position: relative;
  }
  .navbar-logo {
    width: 113px;
    margin-top: 17px;
  }
  .btn-info {
    width: 173px;
    border-radius: 2px;
    background-color: transparent;
    border: white solid 1px;
    position: absolute;
    top: 15px;
    right: 201px;
    font-size: 13px;
    font-family: SourceSansPro-Bold, sans-serif;
  }
  .btn-info:hover {
    background-color: #2B4045;
  }

  .main-net-icon-1 {
    width: 40px;
    height: 13px;
    background: rgba(230,255,122,0.30);
    border-radius: 11px;
    position: absolute;
    top: 28px;
    right: 129px;
  }
  .main-net-icon-2 {
    width: 34px;
    height: 9px;
    background: rgba(166, 255, 26, 0.50);
    border-radius: 11px;
    margin-top: 2px;
    margin-left: 3px;
    padding-top: 2px;
    padding-left: 3px;
  }
  .main-net-icon-3 {
    width: 28px;
    height: 5px;
    background: #A6FF1A;
    border-radius: 6px;
  }

  .main-net-txt {
    font-family: SourceSansPro-Regular, sans-serif;
    font-size: 18px;
    font-weight: 300;
    position: absolute;
    top: 19px;
    right: 52px;
  }
</style>
