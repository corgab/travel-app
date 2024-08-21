<template>
    <div class="text-center text-md-start">
        <h1 class="my-2">{{ titlePost }}</h1>
        <ul>
            <li v-for="(post, i) in store.posts" :key="i" @click="handlePostClick(i)" class="py-2">
                <!-- Non usiamo RouterLink direttamente qui -->
                <a href="#" @click.stop="handlePostClick(i)">
                    <span class="h6">Giorno {{ post.day }}:</span> {{ post.title }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import importPosts from '../assets/posts.json';
import { store } from '../store';

export default {
    data() {
        return {
            store,
            titlePost: importPosts.tripTitle
        }
    },
    methods: {
        takeAllPost() {
            if (this.store.posts.length == 0) {
                for (let i = 0; i < importPosts.days.length; i++) {
                    const post = importPosts.days[i];
                    this.store.posts.push(post);
                }
            }
        },
        takePostDay(i) {
            const selectedPost = this.store.posts[i];
            if (selectedPost) {
                localStorage.setItem('post', JSON.stringify(selectedPost));
            } else {
                console.error("Errore: Post non trovato all'indice", i);
            }
        },
        handlePostClick(i) {
            this.takePostDay(i);

            // Imposta un timer
            setTimeout(() => {
                // Naviga alla pagina del post
                this.$router.push(`/${this.store.posts[i].day}`);
            }, 500); // Ritardo
        }
    },
    mounted() {
        this.takeAllPost();
    }
}
</script>

<style lang="scss" scoped>
li,
ul {
    list-style: none;
}

a {
    // text-decoration: none;
    // color: currentColor;
}
</style>