import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { BASE_URL, headers } from '../services';


const defaultForm = {
  comments: ""
};

export default function NewComment() {
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
    const res = await axios.post(BASE_URL, { fields: input }, { headers });
    console.log(res);
    toast.success('Posted a new comment!');
  }
  
  return (
    <div>
      <h3>Add a new comment!</h3>
      <form onSubmit={handleSubmit}>
<input id='comments' value={input.comments} onChange={handleChange} placeholder="Write your comments.." />
      <button>Post</button><br />
      </form>
    </div>
  )
}