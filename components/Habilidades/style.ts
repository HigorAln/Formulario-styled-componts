import styled from 'styled-components';

export const Main = styled.div`
  width: 85%;
  height: 100%;
  border: 1px solid #bbb;
  margin-top: 75px;
  padding: 20px;
  border-radius: 5px;
`;

export const Carreira = styled.div`
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
  select {
    width: 100%;
    padding: 10px 13px;
    border: 1px solid #bbb;
    border-radius: 3px;
    font-size: 18px;
    text-transform: capitalize;
    outline: none;
    background-color: transparent;
  }
`;

export const Experiencia = styled.div`
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
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;

    label {
      border: 1px solid #bbbbbb;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33%;
      border-radius: 2px;
      cursor: pointer;
      padding: 20px;

      label {
        font-size: 15px;
        font-weight: normal;
        margin-bottom: 2px;
        margin-left: 5px;
      }
    }
  }
`;

export const YoursHabilidades = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  div {
    display: grid;
    grid-template-columns: 35% 65%;
    font-size: 17px;
    margin-bottom: 15px;

    select {
      width: 90%;
      padding: 8px;
      font-size: 17px;
      outline: none;
      border: 1px solid #bbb;
      background-color: transparent;
    }
    input {
      padding-left: 15px;
      font-size: 17px;
      outline: none;
      border: 1px solid #bbb;
    }
  }
`;
