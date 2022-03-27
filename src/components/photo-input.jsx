import { useRef, useEffect, useState } from "react";
import { Form } from "../styled/style";

const PhotoInput = ({ input, onSubmit }) => {
  const [text, setText] = useState(input);
  const textRef = useRef(null);

  useEffect(() => textRef.current.focus(), []);

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("AlbumId 를 입력해주세요.");
      return;
    }

    onSubmit(text);
    setText("");
    textRef.current.focus();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={textRef}
        placeholder="Enter your AlbumId"
        value={text}
        onChange={changeInput}
      />
      <button type="submit">Search</button>
    </Form>
  );
};

export default PhotoInput;
