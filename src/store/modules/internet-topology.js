function buildContent(region, name, status, ontId) {
  return "<div class='it-tooltip-text'><span class='it-tooltip-tit'>Region: </span><span class='it-tooltip-region'>" + region + "</span></div>" +
    "<div class='it-tooltip-text'><span class='it-tooltip-tit'>Name: </span><span class='it-tooltip-txt'>" + name + "</span></div>" +
    "<div class='it-tooltip-text'><span class='it-tooltip-tit'>Status: </span><span class='it-tooltip-status'>" + status + "</span></div>" +
    "<div class='it-tooltip-text'><span class='it-tooltip-tit'>ONT ID: </span><span class='it-tooltip-txt'>" + ontId.substring(0,24) + "...</span></div>"
}

function buildPlots(lat, lng, region, name, status, ontId) {
  return {
    latitude: lat,
    longitude: lng,
    tooltip: {
      content: buildContent(region, name, status, ontId)
    },
    size: 10,
    attrs: {
      fill: "#32A4BE"
    },
    attrsHover: {
      fill: "#fff",
      "stroke-width": 0
    }
  }
}



export default {
  namespaced: true,
  state: {
    plotsName: [
      'Dubhe',
      'Merak',
      'Phecda',
      'Megrez',
      'Alioth',
      'Mixar',
      'Alkaid',

      'Aries',
      'Taurus',
      'Gemini',
      'Cancer',
      'Leo',
      'Virgo',
      'Libra'
    ],

    plots: {
      'Dubhe': buildPlots(55.451290, 30.370000, 'Europe', 'Dubhe', 'Active', 'did:ont:AWWChRewNcQ5nZuh8LzF8ksqPaCW8EXPBU'),
      'Merak': buildPlots(53.020000, -118.350000, 'North America', 'Merak', 'Active', 'did:ont:AJEAVCJpa7JmpDZsJ9vPA1r9fPZAvjec8D'),
      'Phecda': buildPlots(-35.020000, -62.350000, 'South America', 'Phecda', 'Active', 'did:ont:APSFBEbQzMUjuCtSVwHcRjiqCrDe56jAHJ'),
      'Megrez': buildPlots(39.460000, 65.420000, 'Asia1', 'Megrez', 'Active', 'did:ont:AGqzuKoEeDfMHPEBPJVs2h2fapxDGoGtK1'),
      'Alioth': buildPlots(28.370000, 77.130000, 'Asia2', 'Alioth', 'Active', 'did:ont:AUy6TaM9wxTqo9T7FiaYMnDeVExhjsR1Pq'),
      'Mixar': buildPlots(36.420000, 3.130000, 'Africa', 'Mixar', 'Active', 'did:ont:AXNxyP2HEKW7GoSqYfeqcYfCSE7XaaVVu4'),
      'Alkaid': buildPlots(-35.170000, 149.070000, 'Oceania', 'Alkaid', 'Active', 'did:ont:AGEdeZu965DFFFwsAWcThgL6uduJf4U7ci'),

      'Aries': buildPlots(38.537070, -77.021820, 'USA', 'Aries', 'Active', 'did:ont:AGRYu8FbEAfxg9yQXY1zPGoxf7GAxuiwsM'),
      'Taurus': buildPlots(35.392900, -89.442800, 'USA', 'Taurus', 'Active', 'did:ont:ARz9yL7UZzDhZHnGcdhKJnDP9ijBxsRvCh'),
      'Gemini': buildPlots(37.330000, 126.580000, 'Korea', 'Gemini', 'Active', 'did:ont:ASYcQ3EgpRLX7wNBAwsuMadnW5oJp5Aq3q'),
      'Cancer': buildPlots(48.522552, 2.174203, 'Europe', 'Cancer', 'Active', 'did:ont:AHVFYCDiVUsYnDkTNhyoDyUjy4Pdbu1ARw'),
      'Leo': buildPlots(39.260000, 115.250000, 'China', 'Leo', 'Active', 'did:ont:ARt5hT4VKn9d3GXaaAwTcbPgg1PJmLu54f'),
      'Virgo': buildPlots(55.451293, 37.371394, 'Europe', 'Virgo', 'Active', 'did:ont:ASW4oGuYHHEptd3rNZ9tRv2geYHnCxjz6D'),
      'Libra': buildPlots(1.090000, 103.380000, 'Sigapore', 'Libra', 'Active', 'did:ont:AJ7gdF1Pcey4sAAwkdT6FWVi3o1pKS2Hkq')
    },

    plotsVal: [
      [55.451293, 37.371394, 'Europe', 'Dubhe', 'Active', 'did:ont:AWWChRewNcQ5nZuh8LzF8ksqPaCW8EXPBU'],
      [41.020000, -93.350000, 'North America', 'Merak', 'Active', 'did:ont:AJEAVCJpa7JmpDZsJ9vPA1r9fPZAvjec8D'],
      [-15.470000, 47.560000, 'South America', 'Phecda', 'Active', 'did:ont:APSFBEbQzMUjuCtSVwHcRjiqCrDe56jAHJ'],
      [139.460000, 35.420000, 'Asia1', 'Megrez', 'Active', 'did:ont:AGqzuKoEeDfMHPEBPJVs2h2fapxDGoGtK1'],
      [28.370000, 77.130000, 'Asia2', 'Alioth', 'Active', 'did:ont:AUy6TaM9wxTqo9T7FiaYMnDeVExhjsR1Pq'],
      [36.420000, 3.130000, 'Africa', 'Mixar', 'Active', 'did:ont:AXNxyP2HEKW7GoSqYfeqcYfCSE7XaaVVu4'],
      [-35.170000, 149.070000, 'Oceania', 'Alkaid', 'Active', 'did:ont:AGEdeZu965DFFFwsAWcThgL6uduJf4U7ci'],

      [38.537070, -77.021820, 'USA', 'Aries', 'Active', 'did:ont:AGRYu8FbEAfxg9yQXY1zPGoxf7GAxuiwsM'],
      [35.392900, 139.442800, 'USA', 'Taurus', 'Active', 'did:ont:ARz9yL7UZzDhZHnGcdhKJnDP9ijBxsRvCh'],
      [37.330000, 126.580000, 'Korea', 'Gemini', 'Active', 'did:ont:ASYcQ3EgpRLX7wNBAwsuMadnW5oJp5Aq3q'],
      [48.522552, 2.174203, 'Europe', 'Cancer', 'Active', 'did:ont:AHVFYCDiVUsYnDkTNhyoDyUjy4Pdbu1ARw'],
      [39.260000, 115.250000, 'China', 'Leo', 'Active', 'did:ont:ARt5hT4VKn9d3GXaaAwTcbPgg1PJmLu54f'],
      [55.451293, 37.371394, 'Europe', 'Virgo', 'Active', 'did:ont:ASW4oGuYHHEptd3rNZ9tRv2geYHnCxjz6D'],
      [1.090000, 103.380000, 'Sigapore', 'Libra', 'Active', 'did:ont:AJ7gdF1Pcey4sAAwkdT6FWVi3o1pKS2Hkq']
    ]
  },

  mutations: {}
}
