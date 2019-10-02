# De Voorhoede interview exercise

After an interview with **[De Voorhoede](https://voorhoede.nl)**, I was given an exercise to get an idea of my resolving power and how I approach problems. This could also be used to check whether the code is of good quality and which choices were made during development of this exercise. An API was available for the exercise which I could determine myself. The techniques I used are described below in a list. I made the choice to use the RESTful api because I already have experience with this.

![De Voorhoede interview exercise](https://res.cloudinary.com/zowie/image/upload/v1570057902/Github/Voorhoede/de-voorhoede-blog.png)


# Techniques

- [Vue.js](https://vuejs.org/) (used as frontend framework)
- [Tailwindcss](https://tailwindcss.com/) (used as utility-first css framework this is the first time I worked with this framework just to try it out 🤷‍♂️)
- [Axios](https://github.com/axios/axios) (used as promise based HTTP client)
- [Moment](https://momentjs.com/) (used to transform date directly from an object)
- [Nprogress](https://ricostacruz.com/nprogress/) (used for showing the loading state of posts)
- [VueMeta](https://github.com/nuxt/vue-meta) (used for meta tags inside components)
- [Vue-Router](https://router.vuejs.org) (used for creating routes between the used pages)
- [Vuex](https://github.com/vuejs/vuex) (used for state management)

# Linting

- [Commitlint](https://commitlint.js.org/) (used for semantic commit messages)
- [Lint-staged](https://www.npmjs.com/package/lint-staged?activeTab=dependencies) (lint all staged files in the pre-commit hook)
- [Husky](https://www.npmjs.com/package/husky) (used for creating pre commit hooks)
- [ESLint](https://eslint.org/) (used for maintaining code quality in this project)
- [Prettier](https://prettier.io/) (used in combination with ESLint to fix linting errors on save)

# Tools

- [WebStorm](https://www.jetbrains.com/webstorm/) (IDEA)
- [Netlify](https://www.netlify.com/) (used for deploying frontend)
- [GitHub](https://github.com/) (used for versioning code)

# Installation
Clone this repository with the following command

    git clone https://github.com/zowievangeest/voorhoede-interview-exercise.git

Install all dependencies

    yarn install

Copy the .env.example to a new .env with this command

    cp .env.example .env

Fill in the .env with the correct values

Compiles and hot-reloads for development

    yarn run serve

Compiles and minifies for production

    yarn run build
Lints and fixes files

    yarn run lint

This project still contains the setup for testing (unit and e2e) I didn't use the because the scope of this project. 

