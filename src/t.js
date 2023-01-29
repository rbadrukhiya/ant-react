import React, { useState } from "react";
// import "./styles.css";

export default function Image() {
  const ref = React.useRef();
  const [url, setUrl] = useState(null);

  React.useEffect(() => {
    return () => {
      url && URL.revokeObjectURL(url);
    };
  }, []);

  const onSubmit = () => {
    const img = ref.current.files[0];
    const obj = URL.createObjectURL(img);
    setUrl(obj);
  };

  return (
    <div className="App">
      <h1>Image</h1>
      <input type="file" ref={ref}/>
      <button onClick={onSubmit}> SUBMIT </button>
      {/* {url && <img src={url} />} */}
    </div>
  );
}
