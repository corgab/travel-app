<template>
    <div>
        <AppPost :post="store.posts[store.postDay]"></AppPost>
    </div>
</template>

<script>
import AppPost from "../components/AppPost.vue";
import {store} from "../store.js"
export default {
    components: {
        store,
        AppPost
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>