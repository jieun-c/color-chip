import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 400px;
  height: 100%;
  margin: 0px auto;
`;

export const Loading = styled.h1`
  text-align: center;
  font-size: 2rem;
  padding: 1em;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  background-color: #222;
  color: white;
  padding: 1em 0;
`;

export const Form = styled.form`
  width: 100%;
  padding: 0.5em 1em;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  * {
    border: none;
    height: 35px;
    font-size: 1rem;
  }

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 100px;
    max-width: 300px;
    border: 1px solid gray;
    box-shadow: 2px 2px 2px gray;
    text-indent: 0.5em;
  }

  button {
    width: 100px;
    background-color: deepskyblue;
    color: white;
    border: 1px solid gray;
    box-shadow: 2px 2px 2px gray;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2em;
  margin: 1em 0;
  padding: 0.5em 1em;
`;

export const Article = styled.article`
  display: flex;
  width: 450px;
  height: 150px;
  background-color: white;
  box-shadow: 2px 2px 2px 2px gray;
  div {
    padding: 0.5em;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  div > p {
    word-break: break-all;
  }
  a {
    display: block;
    text-align: center;
    background-color: #eee;
    border: 1px solid #eee;
  }
`;
