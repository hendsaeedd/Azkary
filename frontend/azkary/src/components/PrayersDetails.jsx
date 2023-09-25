import { useState } from "react";
import axios from "axios";

const PrayersDetails = ({ prayer }) => {
  const [count, setCount] = useState(prayer.times);

  const incrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Function to handle the copy action
  const handleCopy = () => {
    const textToCopy = prayer.body;
    alert(textToCopy);

    // Create a temporary textarea element to copy the text
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  // Function to handle the delete action
  const handleDelete = () => {
    const id = prayer._id;
    const url = `http://localhost:4000/prayers/${id}`;

    axios.delete(url).then((res) => {
      console.log(res);
    },
    window.reload()
    );
  };

  return (
    <div>
      <div className="prayer-details">
        <h3>{prayer.title}</h3>
        <p>{prayer.body}</p>
        <p>{prayer.times} مرة</p>
        <hr />
        <p>{prayer.createdAt.toLocaleString()}</p>
        <div className="features">
          <button className="increase" onClick={incrementCount}>
            {count}
          </button>
          <svg
            onClick={handleCopy}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z" />
          </svg>
          <span>
            <svg
            onClick={handleDelete}
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PrayersDetails;
