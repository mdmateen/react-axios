import React from 'react'
import axios from "axios";
export default function PostApi() {

    const baseURL = "https://jsonplaceholder.typicode.com/posts";

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
            console.log(response.data)
            setPost(response.data);
        });
      }, []);

      function createPost() {
        axios
          .post(baseURL, {
            id:101,
            title: "Hello World!",
            body: "This is a new post."
          })
          .then((response) => {
            console.log(response.data)
            setPost(response.data);
          })
          .catch(error=>{
            console.log(error)
          })
      }
      if (!post) return "No post!"

      return (
        <div>
            <h1>{post.id}</h1>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <button onClick={createPost}>Create Post</button>
        </div>
      );
}
