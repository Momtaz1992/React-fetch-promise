import React,{useState,useEffect} from 'react';
const Exercise1 = () => {
       const [data, setData] = useState([]);
       useEffect(() => {
              fetch("https://jsonplaceholder.typicode.com/posts")
              .then(res => res.json())
              .then(json => setData(json.slice(0,5)))
       },[]);
       return ( 
              <>
              <div>
                     <h1>Exercise1:</h1>
                     <ul>
                            {data.map(user1=> <li key={user1.id}>
                                   ID of the user who created the post: {user1.userId}<br />
                                   ID of the post:{user1.id}<br />
                                   Title of the post: {user1.title}<br />
                                   content of the post {user1.body}
                            </li>)}
                     </ul>
              </div>
              </>
       );
}
 
export default Exercise1;