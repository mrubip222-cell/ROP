mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWFuYXAyMjIiLCJhIjoiY21xNzN1bnVoMDhlZzJ4cHhubjBkcmZkMyJ9.BY7B_BbHs80mfKbLon8Fig';

const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
  style: "mapbox://styles/marianap222/cmq8gbfok009y01rf29bjg9xz", //Your style URL goes here//
  center: [-120.1, 39.02], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 10.5 // starting zoom, again you can choose the level you'd like.
    });