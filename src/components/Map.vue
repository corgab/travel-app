<template>
    <div id="map" style="height: 500px; width: 100%;"></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
    name: 'Map',
    props: {
        locations: {
            type: Array,
            required: true
        }
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            const map = L.map('map');

            // Aggiungi un layer con le mappe di OpenStreetMap
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Se ci sono coordinate, centrare la mappa su di esse
            if (this.locations.length) {
                const bounds = L.latLngBounds(this.locations.map(loc => [loc.latitude, loc.longitude]));
                map.fitBounds(bounds);

                this.locations.forEach(location => {
                    L.marker([location.latitude, location.longitude]).addTo(map)
                        .bindPopup(location.popup)
                        .openPopup();
                });
            } else {
                // Imposta una vista di default se non ci sono coordinate
                map.setView([51.505, -0.09], 13);
            }
        }
    }
}
</script>

<style scoped>
/* Aggiungi eventuali stili personalizzati qui */
</style>
