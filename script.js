mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWFuYXAyMjIiLCJhIjoiY21xNzN1bnVoMDhlZzJ4cHhubjBkcmZkMyJ9.BY7B_BbHs80mfKbLon8Fig';

const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
  style: "mapbox://styles/marianap222/cmq8gbfok009y01rf29bjg9xz", //Your style URL goes here//
  center: [-120.1, 39.02], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 11.5 // starting zoom, again you can choose the level you'd like.
    });
map.on('load', function () {
  map.addSource('points-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/mrubip222-cell/ROP/refs/heads/main/data/EZSSP_upd.geojson'
    });
  map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'points-data',
        paint: {
            'circle-color': '#0d70aa',
            'circle-radius': 7,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#fcfeae'
        }
    });
    map.on('click', 'points-layer', (e) => {
        // Copy coordinates array
        const coordinates = e.features[0].geometry.coordinates.slice();
        const properties = e.features[0].properties;

        // Create popup content using the actual data properties
        const popupContent = `
    <div>
        <h3>${properties.site_name}</h3>
        <p><strong>${properties.rop_renaming_park_uinit}</strong></p>
        ${properties.image_link ? 
           `<img src="${properties.image_link}" alt="${properties.rop_renaming_new_name}" style="width:100%; border-radius:5px; margin-bottom:10px;">`
           : ''
        }
        <p>Image Caption: ${properties.image_caption}</p>
        <p>${properties.site_description}</p>
         </div>
    `;
    
    new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(popupContent)
            .addTo(map);


    });

map.addControl(
  new mapboxgl.ScaleControl({
    maxWidth: 700,
    unit: 'imperial' // 'metric', 'imperial', or 'nautical'
  }),
  'bottom-left'
);
const insetMap = new mapboxgl.Map({
    container: 'inset-map',
    style: 'mapbox://styles/marianap222/cmq8gbfok009y01rf29bjg9xz',
    center: [-120.15, 39.05], // Lake Tahoe
    zoom: 3,
    interactive: false
});
new mapboxgl.Marker({
    color: 'red'
})
.setLngLat([-120.12, 39.05])
.addTo(insetMap);
});

const toggleButton = document.getElementById("context-toggle");
const contextPanel = document.getElementById("context-panel");

toggleButton.addEventListener("click", () => {

    contextPanel.classList.toggle("hidden");

    if (contextPanel.classList.contains("hidden")) {
        toggleButton.textContent = "Indigenous Context";
    } else {
        toggleButton.textContent = "Hide Context";
    }

});
