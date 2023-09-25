import { useState, useEffect } from "react";
import axios from "axios";

const PrayerForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [times, setTimes] = useState(1);
  const [error, setError] = useState(null);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Check the screen width and show/hide the form accordingly
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  }, []);

  // const toggleForm = () => {
  //   setShowForm(!showForm);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const prayer = { title, body, times };

    axios
      .post("http://localhost:4000/prayers", prayer)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    if (!res.ok) {
      setError(err.message);
    }

    if (res.ok) {
      setTitle("");
      setBody("");
      setTimes(1);
      setError(null);
      console.log("success");
    }
    // Refresh the page
    window.location.reload();
  };


  return (
    <div>
      {/* <button onClick={toggleForm} className="show">
        {showForm ? "-" : "+"}
      </button> */}
      {/* {showForm && ( */}
        {/* <div className="popup"> */}
          <form className="create" onSubmit={handleSubmit}>
            <h2>إضافة ذكر/ دعاء جديد</h2>

            <label htmlFor="title">العنوان</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="body"> الذكر/ الدعاء</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <label htmlFor="times">المرات</label>
            <input
              type="number"
              id="times"
              value={times}
              onChange={(e) => setTimes(e.target.value)}
            />

            <button>إضافة</button>
            {error && <div className="error">{error}</div>}
          </form>
        {/* </div> */}
      {/* )} */}
    </div>
  );
};

export default PrayerForm;
