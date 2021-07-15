import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { headers } from '../services';
import './NewComment.css';

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
    clearSearch();
  }

  const clearSearch = () => {
    if (input.body === input.body) {
      input.body = "";
    }
  }

  
  return (
    <section>
      <div>

      </div>
    <div class="container">
        <h3>Add your comment!</h3>
      <form onSubmit={handleSubmit}>
       
<textarea id='body' value={input.body} onChange={handleChange} placeholder="Write your comments.." />
      <button>Post</button>
      </form>
      </div>
      </section>
  )
}