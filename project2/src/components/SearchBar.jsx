import { useState } from "react";
import './SearchBar.css'

export default function SearchBar(props) {
  const [input, setInput] = useState([]);
 // eslint-disable-next-line
  const handleChange = (event) => {
    const { title, value } = event.target;
    console.log(title, value, input);
    setInput((prevInput) => ({
      ...prevInput,
      [title]: value,
    }));
  };



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await axios.post(BASE_URL, { fields: input }, { headers });
  //   console.log(res);

  // }

  return (
    <div className='searchSection'>
      <h3 id='lookFor'>LOOK FOR MORE ARTICLES</h3>
      <form>
      <input type='text' placeholder='Search..' onChange={(e) => props.onChange(e)} style={{ marginBottom: ' 40px' }}></input>
        </form>
    </div>
  )
}
//