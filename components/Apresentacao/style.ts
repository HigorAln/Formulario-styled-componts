import styled from 'styled-components';

export const Main = styled.div`
  margin-top: 75px;
  width: 85%;
  height: 100%;
  border: 1px solid #bbb;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;
export const Div = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  input[type='text'],
  select {
    width: 100%;
    padding: 10px 13px;
    border: 1px solid #bbb;
    border-radius: 3px;
    font-size: 18px;
    text-transform: capitalize;
    outline: none;
  }
  textarea {
    outline: none;
    padding: 10px;
    font-size: 18px;
  }
`;

export const Curriculo = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  div {
    display: flex;
    flex-direction: column;
  }
  p {
    span {
      color: red;
      font-size: 15px;
      span {
        margin: 0;
        margin-left: 10px;
      }
    }
  }

  span {
    font-size: 120px;
    color: #555;
    margin-right: 50px;
    user-select: none;
  }
  label {
    padding: 10px;
    background-color: #bbb;
    margin: 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      filter: opacity(70%);
    }
  }
`;
