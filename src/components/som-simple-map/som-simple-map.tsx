import { Component, h, Prop } from '@stencil/core';
import Esri from 'esri-loader';

@Component({
  tag: 'som-simple-map',
  styleUrl: 'som-simple-map.css',
})
export class SomSimpleMap {
  @Prop() lat;
  @Prop() long;
  @Prop() zoom: number = 14;

  /**
   * Properties to hold the map, mapview and featurelayer
   */
  map;
  mapView;
  mapContainer;

  /**
   * The component is loaded and has rendered.
   * Only called once per component lifecycle
   */
  componentDidLoad() {
    this.initMap();
  }

  async initMap() {
    const [Map, MapView, Graphic] = await Esri.loadModules(['esri/Map', 'esri/views/MapView', 'esri/Graphic'], { css: true });

    this.map = new Map({
      basemap: 'streets-navigation-vector',
    });

    this.mapView = new MapView({
      container: this.mapContainer,
      map: this.map,
      zoom: this.zoom,
      center: [this.long, this.lat],
    });

    const point = {
      type: 'point', // autocasts as new Point()
      longitude: this.long,
      latitude: this.lat,
    };

    // Create a symbol for drawing the point
    const markerSymbol = {
      type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
      color: [39, 124, 120],
      size: 20,
      outline: {
        // autocasts as new SimpleLineSymbol()
        color: [255, 255, 255],
        width: 2,
      },
    };

    // Create a graphic and add the geometry and symbol to it
    const pointGraphic = new Graphic({
      geometry: point,
      symbol: markerSymbol,
    });

    this.mapView.graphics.addMany([pointGraphic]);
  }

  render() {
    return <div class="app-map" ref={ref => (this.mapContainer = ref)} />;
  }
}
