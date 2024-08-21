<template>
    <RouterLink class="link" :to="'/' + post.day"></RouterLink>
    <div>
        <h4 class="text-center">{{ post.title }}</h4>
        <img v-if="post.thumb !== null" class="img-fluid" :src="post.thumb" alt="Foto Vacanza">
        <h6 class="fw-light">{{ post.subtitle }}</h6>
        <p class="fw-light">{{ post.description }}</p>
        <h5 class="fw-light">{{ post.dailyJournal }}</h5>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

img {
    width: 500px;
}

</style>