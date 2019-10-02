/*
 * Posts Mutations
 * The mutations available for the posts module.
 */

import { FETCH_POSTS_SUCCESS, FETCH_POST_BY_SLUG } from "./mutation-types";

export default {
  /**
   * Mutation for fetching post if success
   * @param state
   * @param posts
   */
  [FETCH_POSTS_SUCCESS](state, { data }) {
    state.posts = data;
  },

  /**
   * Mutation for fetching post by slug
   * @param state
   * @param post
   */
  [FETCH_POST_BY_SLUG](state, { post }) {
    state.post = post;
  }
};
