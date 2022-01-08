import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} from './services/post'

const App = () => {
  // Get All Post
  //   const { data, isLoading, isError } = useGetAllPostQuery()
  //   return isLoading ? (
  //     <h3>Loading...</h3>
  //   ) : isError ? (
  //     <h3>Error...</h3>
  //   ) : (
  //     <div>
  //        <h1>Get All Posts</h1>
  //       <ul>
  //         {data.map((item) => (
  //           <div key={item.id}>
  //             <li>{item.id}</li>
  //             <h3>{item.title}</h3>
  //             <p>{item.body}</p>
  //             <hr />
  //           </div>
  //         ))}
  //       </ul>
  //     </div>
  //   )
  // Get  Single Post By Id
  //   const { data, isLoading, isError } = useGetPostByIdQuery(5)
  //   return isLoading ? (
  //     <h3>Loading...</h3>
  //   ) : isError ? (
  //     <h3>Error...</h3>
  //   ) : (
  //     <div>
  //        <h1>Get Single Post</h1>
  //       <ul>
  //         <li>{data.id}</li>
  //         <h3>{data.title}</h3>
  //         <p>{data.body}</p>
  //         <hr />
  //       </ul>
  //     </div>
  //   )
  // >------Get Limited Data---------<
  //   const { data, isLoading, isError } = useGetPostByLimitQuery(2)
  //   return isLoading ? (
  //     <h3>Loading...</h3>
  //   ) : isError ? (
  //     <h3>Error...</h3>
  //   ) : (
  //     <div>
  //       <h1>Query Data By Limited</h1>
  //       <ul>
  //         {data.map((item) => (
  //           <div key={item.id}>
  //             <li>{item.id}</li>
  //             <h3>{item.title}</h3>
  //             <p>{item.body}</p>
  //             <hr />
  //           </div>
  //         ))}
  //       </ul>
  //     </div>
  //   )
  // >------ Delete Post By Id---------<
  //   const [deletePost, res] = useDeletePostMutation(2)
  //   const { isError, isLoading, isSuccess } = res
  //   console.log(res)
  //   return isLoading ? (
  //     <h2>Loading...</h2>
  //   ) : isError ? (
  //     <h2>Error...</h2>
  //   ) : (
  //     <div>
  //       <h1>Delete Post By Id</h1>
  //       <button onClick={() => deletePost(2)}>Delete</button>
  //       {isSuccess && <h2>Delete Success</h2>}
  //     </div>
  //   )
  // >------Create Post---------<
  //   const [createPost, res] = useCreatePostMutation()
  //   const { data, isLoading, isError, isSuccess } = res
  //   const newPost = {
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1,
  //   }
  //   console.log(res)
  //   return isLoading ? (
  //     <h2>Loading...</h2>
  //   ) : isError ? (
  //     <h2>Error...</h2>
  //   ) : (
  //     <div>
  //       <h1>Create Post</h1>
  //       {isSuccess && (
  //         <div>
  //           <ul>
  //             <li>{data.id}</li>
  //             <h3>{data.title}</h3>
  //             <p>{data.body}</p>
  //             <hr />
  //           </ul>
  //         </div>
  //       )}
  //       <button
  //         onClick={() => {
  //           createPost(newPost)
  //         }}
  //       >
  //         Add Post
  //       </button>
  //     </div>
  //   )

  // >------PUT Delete Post By Id---------<
  const newUpdate = {
    id: 1,
    title: 'This is new update',
    body: 'This is new update',
    userId: 1,
  }
  const [updatePost, res] = useUpdatePostMutation()
  const { data, isLoading, isError, isSuccess } = res

  console.log(res)
  return isLoading ? (
    <h2>Loading...</h2>
  ) : isError ? (
    <h2>Error...</h2>
  ) : (
    <div>
      <h1>Create Post</h1>
      {isSuccess && (
        <div>
          <ul>
            <li>{data.id}</li>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
            <hr />
          </ul>
        </div>
      )}
      <button
        onClick={() => {
          updatePost(newUpdate)
        }}
      >
        Update Post
      </button>
    </div>
  )
}

export default App
