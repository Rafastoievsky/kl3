<script lang="ts">
    import { setMap } from '../../shared/actions/map';
  
    export let latitude: number = 29.1103937;
    export let longitude: number = -110.985229;
    export let zoom: number = 14;
    export let markerMarkup: string = '';
  
  </script>
  
  <figure use:setMap={{ latitude, longitude, zoom, markerMarkup }} />
  
  <style>
    :root{
              --img-height: 25rem;
              --img-width: 100%;
      }
      @media (max-width: 767px) and (orientation: portrait) {
          :root{
              --img-height: 10rem;
              --img-width: 50%;
          }
  }
    figure {
      width: var(--img-width);
      z-index: 0;
      height: var(--img-height);
      box-shadow: var(--shadow-elevation-low);
    }
  </style>