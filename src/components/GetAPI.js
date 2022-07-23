import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function GetAPI() {

    const [post, setPost] = React.useState(null);

    // pass  id 
    React.useEffect(() => {
      axios.get(baseURL)
        .then(response=>{
            console.log(response.data);
            setPost(response.data);
        })     
        .catch(error=>{
            console.log(error)
        });
    }, []);

    if(!post) return "No Post"
 
    return (
      <>
        <h1>Get By Id API </h1>
        <h3>{post.id}</h3>
        <h3>{post.title}</h3>
        <h3>{post.body}</h3>
      </>
    );

}
