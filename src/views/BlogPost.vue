<template>
  <div class="container w-full md:max-w-3xl mx-auto pt-20" v-if="blogPost">
    <div class="w-full px-4 md:px-6 text-xl leading-normal">
      <div>
        <button
          class="bg-transparent hover:bg-voorhoede-blue text-voorhoede-blue font-semibold hover:text-voorhoede-white py-2 px-4 border border-voorhoede-blue hover:border-transparent rounded"
          @click="back"
        >
          &larr; terug
        </button>
        <h1
          class="break-normal text-voorhoede-blue pt-12 pb-6 text-3xl md:text-4xl text-center"
        >
          {{ blogPost.title }}
        </h1>
        <p class="text-sm md:text-base font-normal text-gray-500">
          Gepubliceerd:
          {{ $moment(blogPost.publishDate).format("DD MMMM YYYY") }}
        </p>
        <div
          class="flex w-full text-sm md:text-base font-normal mt-2 text-gray-500"
        >
          <div
            v-for="(author, index) of blogPost.authors"
            v-bind:key="index"
            class="flex items-center"
          >
            <span class="mr-2">Door:</span>
            <img
              alt="Placeholder"
              class="rounded-full h-8 w-8"
              :src="author.image.url"
            />
            <span class="ml-2 text-sm">{{ author.name }}</span>
          </div>
        </div>
      </div>

      <p class="py-6 blog-body mt-6" v-html="blogPost.body"></p>
      <BackToTop />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BackToTop from "../components/backtotop/BackToTop";

export default {
  name: "BlogSingle",
  components: { BackToTop },
  metaInfo: {
    title: "Blog Post",
    meta: [
      {
        name: "description",
        content: "Blog post"
      }
    ]
  },
  async mounted() {
    const slug = this.$route.params.slug;
    try {
      await this.$store.dispatch("posts/fetchPostBySlug", slug);
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    ...mapGetters({
      blogPost: "posts/post"
    })
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.blog-body >>> a {
  color: #202cff;
  text-decoration: underline;
  text-underline-position: under;
  font-weight: 600;
}
.blog-body >>> h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #202cff;
  margin: 3rem 0 0 0;
}

.blog-body >>> img {
  padding: 1rem 0;
}
.blog-body >>> code {
  color: #282c34;
  font-size: 1rem;
  font-weight: 500;
  white-space: pre-wrap;
  word-break: break-word;
}
.blog-body >>> .language-markup {
  background: #fefeca;
  color: #202cff;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 1rem 0;
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  border-radius: 0.5rem;
}
</style>
