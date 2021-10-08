import styled from 'styled-components';

export const Main = styled.div`
  margin-top: 75px;
  width: 85%;
  height: 250px;
  border: 1px solid #999;
  border-radius: 7px;
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    'photo info1'
    'photo info2';
`;

export const Photo = styled.div`
  grid-area: photo;
  border-right: 1px solid #bbb;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: 70%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #bbb;
    border-radius: 5px;

    span {
      font-size: 50px;
      border: 1px solid #bbb;
    }
  }
  label {
    width: 80%;
    font-size: 14px;
    text-align: center;
    height: 20%;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    margin-top: 5px;

    &:hover {
      filter: opacity(50%);
    }
  }
`;

export const Info1 = styled.div`
  display: flex;
  div {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    label {
      font-size: 20px;
      margin-bottom: 3px;
    }

    input[type='text'] {
      width: 65%;
      font-size: 20px;
      padding: 4px 10px;
      outline: none;
      text-transform: capitalize;
      border: 1px solid #999;
      border-radius: 3px;
      box-shadow: 0 0 5px #ccc, inset 0 0 5px #ccc;
    }
  }
`;

export const Info2 = styled.div`
  display: flex;
  div {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    label {
      font-size: 20px;
      margin-bottom: 5px;
    }

    input[type='text'] {
      width: 65%;
      font-size: 20px;
      padding: 4px 10px;
      outline: none;
      text-transform: capitalize;
      border: 1px solid #999;
      border-radius: 3px;
      box-shadow: 0 0 5px #ccc, inset 0 0 5px #ccc;
    }
  }
`;
