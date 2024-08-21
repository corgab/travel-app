<template>
    <div>
        <h1 class="my-2">{{ titlePost }}</h1>
        <ul>
            <li v-for="(post, i) in store.posts" :key="i" @click="takePostDay(i)" class="py-2">
                <RouterLink :to="'/' + post.day"><span class="h6">Giorno {{post.day}}:</span> {{ post.title }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
import importPosts from '../assets/posts.json'
import { store } from '../store'
export default {
    data() {
        return {
            store,
            titlePost: importPosts.tripTitle
        }
    },
    methods: {
        takeAllPost() {
            if (this.store.posts.length === 0) {
                for (let i = 0; i < importPosts.days.length; i++) {
                    const post = importPosts.days[i]

                    this.store.posts.push(post)

                }
            }
        },
        takePostDay(i) {
            this.store.postDay = i
        }
    },
    mounted() {
        this.takeAllPost()
        console.log(store.posts)
    }
}
</script>

<style lang="scss" scoped>

li, ul {
    list-style: none;
}

a {

    // DA SCEGLIERE
    // text-decoration: none;
    // color: currentColor;
}

</style>