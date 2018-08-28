import * as types from "../mutation-type"

/**
 * 构建节点信息展示的浮窗的HTML
 *
 * @param region
 * @param name
 * @param status
 * @param ontId
 * @return {string}
 */
function buildContent(region, name, status, ontId) {
  return "<div class='it-tooltip-text'><span class='it-tooltip-tit'>Region: </span><span class='it-tooltip-region'>" + region + "</span></div>" +
    "<div class='it-tooltip-text'><span class='it-tooltip-tit'>Name: </span><span class='it-tooltip-name'>" + name + "</span></div>" +
    "<div class='it-tooltip-text'><span class='it-tooltip-tit'>Status: </span><span class='it-tooltip-status'>" + status + "</span></div>" +
    "<div class='it-tooltip-text'><span class='it-tooltip-tit'>ONT ID: </span><span class='it-tooltip-txt'>" + ontId.substring(0, 12) + "..." + ontId.substring(38) + "</span></div>"
}

/**
 * 构建节点信息展示的浮窗的数据结构
 *
 * @param data
 * @param size 共识节点10，备选节点8
 * @return {{latitude: *, longitude: *, tooltip: {content: string}, size: *, attrs: {fill: string}, attrsHover: {fill: string, "stroke-width": number}}}
 */
function buildPlots(data, size) {
  return {
    latitude: data[0],
    longitude: data[1],
    tooltip: {
      content: buildContent(data[2], data[3], data[4], data[5])
    },
    size: size,
    attrs: {
      fill: size === 10 ? "#fff" : "#32A4BE"
    },
    attrsHover: {
      fill: size === 10 ? "#32A4BE" : "#fff",
      "stroke-width": 0
    }
  }
}

export default {
  state: {
    /**
     * 经度， 纬度， 所属洲， 节点名称， 在线状态， ont id
     */
    plotsVal: {
      '1': [55.451293, 30.371394, 'Europe', 'Dubhe', 'Active', 'did:ont:AWWChRewNcQ5nZuh8LzF8ksqPaCW8EXPBU'],
      '2': [33.020000, -90.350000, 'North America', 'Merak', 'Active', 'did:ont:AJEAVCJpa7JmpDZsJ9vPA1r9fPZAvjec8D'],
      '3': [-41.392900, -68.442800, 'South America', 'Phecda', 'Active', 'did:ont:APSFBEbQzMUjuCtSVwHcRjiqCrDe56jAHJ'],
      '4': [12.392900, 105.4428000, 'Asia1', 'Megrez', 'Active', 'did:ont:AGqzuKoEeDfMHPEBPJVs2h2fapxDGoGtK1'],
      '5': [35.392900, 137.442800, 'Asia2', 'Alioth', 'Active', 'did:ont:AUy6TaM9wxTqo9T7FiaYMnDeVExhjsR1Pq'],
      '6': [-29.451293, 28.521820, 'Africa', 'Mixar', 'Active', 'did:ont:AXNxyP2HEKW7GoSqYfeqcYfCSE7XaaVVu4'],
      '7': [-29.170000, 119.070000, 'Oceania', 'Alkaid', 'Active', 'did:ont:AGEdeZu965DFFFwsAWcThgL6uduJf4U7ci'],

      '8': [-20.170000, 129.070000, 'Oceania', 'Martview', 'Active', 'did:ont:ASCx8f3Dv6fuqcKXYvUmbyHbqo38anTzT1'],
      '9': [-38.392900, -60.442800, 'South America', 'Points', 'Active', 'did:ont:ARU89iSYcLkiReH5b5KZ1z9zUcR34XmPwJ'],
      '10': [55.451293, 33.371394, 'Europe', 'ONEROOT', 'Active', 'did:ont:AZJn6xNPR4nkM56bkLJJUsYkNGcZ46TH3T'],

      '11': [41.020000, -93.350000, 'North America', 'DAD', 'Active', 'did:ont:Ad8MmnWgZWHsi7mJEcuNbWycKEbDXE2a7Q'],
      '12': [28.392900, 69.442800, 'Asia2', 'CloudDesk', 'Active', 'did:ont:AVXVjmuFs9CoiHUiH4RCLyWwGByCag5SSN'],
      '13': [28.392900, 81.4428000, 'Asia1', 'Huobipool', 'Active', 'did:ont:AUXCJs76ijZU38sePH92SnUaod7P5tUmEx'],
      '14': [-35.170000, 149.070000, 'Oceania', 'J&D TECH LIMITED', 'Active', 'did:ont:AG5Bk9YV74qEtt7u5dGYpuLcwTbWSjz6Tg'],
      '15': [-5.451293, 30.021820, 'Africa', 'G&Q TECH LIMITED', 'Active', 'did:ont:Adqvs65BWKURFZEnrqyXkaexvbYB2XhXwp'],

      '16': [35.392900, 139.442800, 'Asia2', 'Matrix Partners', 'Active', 'did:ont:AbYsc5Do8tG5eUyhhX4YAW9pqSYHHCBvox'],
      '17': [37.330000, 126.580000, 'Asia2', 'Jumple', 'Active', 'did:ont:AdwiepZeuRuz7QsJGhzYhPWDpcGSrQdrjb'],
      '18': [51.451293, 30.371394, 'Europe', 'Collider', 'Active', 'did:ont:AWtA9kUr4wXc51WNmYwxd9GrTdyNrY5XMC'],
      '19': [-15.451293, 32.021820, 'Africa', 'InWeCrypto', 'Active', 'did:ont:Ac5fQiSvKNYbM7bPpYvvNvwhFz88MyDFMK'],
      '20': [-18.170000, 139.070000, 'Oceania', 'Certik', 'Active', 'did:ont:AdzY1ZW3HpwhMp2K3CxjkdgQSgg5Zwtm4Z'],

      '21': [33.020000, -100.350000, 'North America', 'Infinity Stones', 'Active', 'did:ont:AWFR1rPJZXVSrpVksg239F4bSN1mw2z11E'],
      '22': [-30.170000, 151.070000, 'Oceania', 'Crypto World', 'Active', 'did:ont:AWKLgApUpjVyPVRmyQFQNA2FAsYorCXsi7'],
      '23': [28.392900, 118.4428000, 'Asia1', 'ONTLabo', 'Active', 'did:ont:AJXDuPpU41R96DV4FDuDqG7qCLWbVbr9Mu'],
      '24': [-33.170000, 151.070000, 'Oceania', 'Blockchain Global', 'Active', 'did:ont:AV9JgC4yGQn8u66XqcUbj7dP86dwLPaYpQ'],
      '25': [18.392900, 98.4428000, 'Asia1', 'Hashed', 'Active', 'did:ont:AJc7haixsxxCKAAVSoJbFLk4RhkhgBvBQZ'],

      '26': [52.451293, 25.371394, 'Europe', 'SunStar', 'Active', 'did:ont:AHUZodjwH25kn9mLGBJZuFMVZRzTfu7fjb'],
      '27': [45.451293, 28.371394, 'Europe', 'GF.Network', 'Active', 'did:ont:ATYM4p3hQAKB9ekzNWUVYD7Qb38hCkroj8'],
      '28': [18.392900, 79.442800, 'Asia2', 'Accomplice', 'Active', 'did:ont:Ae52qMcDtJ7z2grGKFw89TCia8G7tjBeCZ'],
      '29': [33.020000, -110.350000, 'North America', 'FUM', 'Active', 'did:ont:AKCKX9YvnGDdHzoWuePNZ4SVH2TNGWrJoM'],
      '30': [-7.392900, -70.442800, 'South America', 'Trio Bravo', 'Active', 'did:ont:ARv2DJEhnAwmXmqfkNzHK3wFMJPznSR7mv'],

      '31': [4.392900, -70.442800, 'South America', 'Ontology Universe', 'Active', 'did:ont:AK1jMtS1AC1BvBptgUoFWPMhgEBh5ewyFm'],
      '32': [41.020000, -120.350000, 'North America', 'HZF Web', 'Active', 'did:ont:ARZv4ETT1LE8itaAATkjXfGQ5nskYuaCh2'],
      '33': [11.451293, -2.021820, 'Africa', 'Avocado', 'Active', 'did:ont:AZ98Zmgt3nGNnMQF4hYmYAr75g6puJjZDd']
    },

    plots: {},
  },
  mutations: {
    [types.SET_PLOTS_DATA](state, payload) {
      state.plots = payload.plots
    }
  },
  actions: {
    getPlots({commit}) {
      let plotsVal = this.state.InternetTopology.plotsVal;
      let plots = {};

      for (let plot in plotsVal) {
        let size = (plot < 8) ? 10 : 8;

        plots[plot] = buildPlots(plotsVal[plot], size)
      }

      commit({
        type: types.SET_PLOTS_DATA,
        plots: plots,
      })
    }
  }
}
