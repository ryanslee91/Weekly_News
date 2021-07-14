import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { BASE_URL, headers } from '../services';

const commentURL = 'https://api.airtable.com/v0/appzOtkGYT2fmwlmR/comments'
const defaultForm = {
  body: ""
};

export default function NewComment(props) {
  const [input, setInput] = useState(defaultForm);
  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      body: input.body,
      newsart: [props.articleId]
    }
    const res = await axios.post(commentURL, { fields }, { headers });
    console.log(res);
    toast.success('Posted a new comment!');
    props.fetchArticle();
  }
  
  return (
    <div>
      <h3>Add a new comment!</h3>
      <form onSubmit={handleSubmit}>
<input id='body' value={input.body} onChange={handleChange} placeholder="Write your comments.." />
      <button>Post</button><br />
      </form>
    </div>
  )
}