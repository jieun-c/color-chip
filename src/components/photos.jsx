import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Title, Loading } from "../styled/style";
import PhotoList from "./photo-list";
import PhotoInput from "./photo-input";

const Photos = () => {
  const [state, setState] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!input) {
      getDefaultData();
    } else {
      getData();
    }
  }, [input]);

  const getDefaultData = async () => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    const res = await axios.get(url);
    if (res.status === 200) {
      setState(res.data);
    }
  };

  const getData = async () => {
    const url = `https://jsonplaceholder.typicode.com/albums/${input}/photos`;
    const res = await axios.get(url);
    if (res.status === 200) {
      setState(res.data);
    }
    if (res.data.length === 0) {
      alert(`[ ${input} ]에 해당하는 albumId가 없습니다.`);
      setInput("");
      getDefaultData();
    }
  };

  const onSubmit = (text) => {
    setInput(text);
  };

  return (
    <>
      {state.length === 0 ? (
        <Loading>로딩중...</Loading>
      ) : (
        <Container>
          <Title>Color Chip</Title>
          <PhotoInput input={input} onSubmit={onSubmit} />
          <PhotoList state={state} />
        </Container>
      )}
    </>
  );
};

export default Photos;
