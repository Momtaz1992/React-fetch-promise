import React,{useState} from 'react';
const Exercise2 = () => {
       const [formData,setFormData]=useState({
              userId:'',
              title:'',
              body:'',
       })
       const [successMessage,setSuccessMessage]=useState('');
       const handleSubmit = (e) => {
              e.preventDefault();
              fetch('https://jsonplaceholder.typicode.com/posts', {
                     method: "POST",
                     headers: {
                            'content-type': 'application/json'
                     },
                     body: JSON.stringify(formData),
              })
              .then(response => response.json())
              .then(data => {
                setSuccessMessage('Post created successfully!');
                setFormData({ userId: '', title: '', body: '' });
              })
              .catch(error => console.error(error));
       };
       const handleChange = (e) => {
              setFormData({...formData,[e.target.name]: e.target.value,
              })
       }
       return ( 
              <>
              <h1>Exercise 2 :</h1>
              <h2>Create a new Post</h2>
              {successMessage && <p>{successMessage}</p>}
              <form onSubmit={handleSubmit}>
                     <label>
                     User ID:
          <input
            type="number"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
                     </label>
                     <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Body:
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Create Post</button>
              </form>
              </>
        );
}
 
export default Exercise2;


/* Exercise 2: Sending Data to an API

Write a React component that allows the user to enter a new post and sends it to an API. The API endpoint you should use is:

https://jsonplaceholder.typicode.com/posts

To create a new post, you need to send a POST request to the API with the following properties:

userId: ID of the user who created the post (you can use any number)
title: Title of the post
body: Content of the post
After the new post is successfully created, you should display a success message on the screen. */