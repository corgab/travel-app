<template>
    <div>
        <div v-if="post">
            <h4 class="text-center">{{ post.title }}</h4>
            <img v-if="post.thumb" class="img-fluid" :src="post.thumb" alt="Foto Vacanza">
            <h6 class="fw-light">{{ post.subtitle }}</h6>
            <p class="fw-light fs-4 lh-base py-3">{{ post.description }}</p>
            <p class="fw-light fs-5">{{ post.dailyJournal }}</p>
            <div>
                <!-- Passa le coordinate -->
                <Map :locations="getLocations()" />
            </div>
        </div>
        <div v-else>
            <p>Nessun post disponibile.</p>
        </div>
    </div>
</template>

<script>
import Map from './Map.vue';

export default {
    name: 'AppPost',
    components: {
        Map
    },
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        getLocations() {
            return [
                {
                    popup: this.post.popup,
                    latitude: this.post.latitude, 
                    longitude: this.post.longitude
                }
            ];
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 500px;
}
</style>
