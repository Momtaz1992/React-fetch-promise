import React,{useState,useEffect} from 'react';
const Exercise3 = () => {
       const[data, setData] = useState([]);
       useEffect(()=> {
              const fetchData = async ()=> {
                     try {
                            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                            const json = await response.json();
                            setData(json.slice(0,5));
       }
       catch (error) {
              console.log(error);
       }
              };fetchData();
       },[]);
       return ( 
              <>
              <h1>Exercise 3:</h1>
              <h2>List of Posts</h2>
              <ul>
                     {data.map(post => ( 
                            <li key={post.id}>
                                   <h3>{post.title}</h3>
                                   <p>{post.body}</p>
                                   <p>ID of the user who created the post : {post.userId}</p>
                            </li>
                     ))}
              </ul>
              </>
       );
}

 export default Exercise3;
/*Exercise 4: Using Async/Await

Rewrite the React component from Exercise 1 to use async/await instead of the .then() method.
 Your component should still fetch data from the same API endpoint and display the same list of posts 
 on the screen. */