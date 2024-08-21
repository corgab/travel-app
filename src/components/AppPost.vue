<template>
    <div v-if="post">
        <h4 class="text-center">{{ post.title }}</h4>
        <img v-if="post.thumb" class="img-fluid" :src="post.thumb" alt="Foto Vacanza">
        <h6 class="fw-light">{{ post.subtitle }}</h6>
        <p class="fw-light">{{ post.description }}</p>
        <h5 class="fw-light">{{ post.dailyJournal }}</h5>
    </div>
    <div v-else>
        <p>Nessun post disponibile.</p>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
            // default: () => ({})  // Default a un oggetto vuoto se non viene passato nulla
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 500px;
}
</style>