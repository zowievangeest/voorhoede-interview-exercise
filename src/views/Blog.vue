<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap flex-row mb-4">
      <div
        v-for="(post, index) of blogPosts"
        v-bind:key="index"
        class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
      >
        <article class="bg-white rounded-lg overflow-hidden shadow relative">
          <div v-if="post.social.image">
            <img
              class="h-56 w-full object-cover object-center"
              :alt="post.slug"
              :src="post.social.image.url"
            />
          </div>
          <div v-else>
            <img
              class="h-56 w-full object-cover object-center"
              :alt="post.slug"
              src="~@/assets/images/blog/blog-image-not-found.jpg"
            />
          </div>
          <div class="p-4 h-auto md:h-56 lg:h-64">
            <router-link
              class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg h-12"
              :to="{ name: 'blog/blogsingle', params: { id: post.slug } }"
              exact
            >
              {{ post.title }}
            </router-link>
            <div
              class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm"
            >
              {{ post.social.description }}
            </div>
            <footer class="relative mt-4 lg:absolute bottom-0 mb-4 lg:block">
              <div class="flex justify-between w-full">
                <div
                  v-for="(author, index) of post.authors"
                  v-bind:key="index"
                  class="flex items-center text-gray-700 px-2"
                >
                  <img
                    alt="Placeholder"
                    class="rounded-full h-8 w-8"
                    :src="author.image.url"
                  />
                  <span class="ml-2 text-sm">{{ author.name }}</span>
                </div>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "blog",
  metaInfo: {
    title: "Blog",
    meta: [
      {
        name: "description",
        content: "De Voorhoede exercise blog."
      }
    ]
  },
  async mounted() {
    try {
      await this.$store.dispatch("posts/fetchAllPosts");
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    ...mapGetters({
      blogPosts: "posts/posts"
    })
  }
};
</script>
