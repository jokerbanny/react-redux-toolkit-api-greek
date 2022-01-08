import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),

  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: 'posts',
        method: 'GET',
      }),
    }),

    getPostById: builder.query({
      query: (id) => {
        console.log(id)
        return {
          url: `posts/${id}`,
          method: 'GET',
        }
      },
    }),

    getPostByLimit: builder.query({
      query: (num) => {
        console.log('Limit Number:', num)
        return {
          url: `posts?_limit=${num}`,
          method: 'GET',
        }
      },
    }),

    deletePost: builder.mutation({
      query: (id) => {
        console.log('Delete ID:', id)
        return {
          url: `posts/${id}`,
          method: 'DELETE',
        }
      },
    }),

    createPost: builder.mutation({
      query: (newPost) => {
        console.log(newPost)
        return {
          url: `posts`,
          method: 'POST',
          body: newPost,
          headers: {
            'Content-type': 'application/json; charset=utf-8',
          },
        }
      },
    }),

    updatePost: builder.mutation({
      query: (newUpdate) => {
        const { id, ...data } = newUpdate
        console.log(id, data)
        return {
          url: `posts/${id}`,
          method: 'PUT',
          body: data,
          headers: {
            'Content-type': 'application/json; charset=utf-8',
          },
        }
      },
    }),
  }),
})

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} = postApi
