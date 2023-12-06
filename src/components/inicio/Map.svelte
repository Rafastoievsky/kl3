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
      }
      @media (max-width: 767px) and (orientation: portrait) {
          :root{
              --img-height: 5rem;
          }
  }
    figure {
      width: 100%;
      z-index: 0;
      height: var(--img-height);
      box-shadow: var(--shadow-elevation-low);
    }
  </style>