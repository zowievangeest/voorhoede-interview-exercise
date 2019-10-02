/*
 * Posts Actions
 * The actions available for the posts module.
 */

import Vue from "vue";
import * as types from "./mutation-types";

export const fetchAllPosts = async ({ commit }) => {
  try {
    const { data } = await Vue.$http.get("/posts");
    commit(types.FETCH_POSTS_SUCCESS, { data });
  } catch (e) {
    console.error(e);
  }
};

/**
 * Action for fetching post by slug
 * @param commit
 * @param slug
 * @returns {Promise<void>}
 */
export const fetchPostBySlug = async ({ commit }, slug) => {
  try {
    const { data } = await Vue.$http.get(`/posts/${slug}`);
    commit(types.FETCH_POST_BY_SLUG, { data });
  } catch (e) {
    console.error(e);
  }
};

export default {
  fetchAllPosts,
  fetchPostBySlug
};
