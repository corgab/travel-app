<template>
    <RouterLink class="link" :to="'/' + post.day"></RouterLink>
    <div>
        <h4 class="text-center">{{ post.name }}</h4>
        <img v-if="post.thumb !== null" class="mt-3" :src="post.thumb" alt="Foto Vacanza">
        <h6 class="fw-light">{{ post.subtitle }}</h6>
        <p>{{ post.description }}</p>
        <h6 class="fw-light">{{ post.dailyJournal }}</h6>
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

<style lang="scss" scoped></style>