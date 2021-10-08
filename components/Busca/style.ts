import styled from 'styled-components';

export const Main = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  margin-top: 75px;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Empresa = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 40px;

  p {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;

    label {
      width: 32%;
      border: 1px solid #ddd;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      cursor: pointer;
      border-radius: 3px;

      p {
        margin: 0;
        margin-left: 10px;
        font-size: 16px;
      }
    }
  }
`;

export const Contrato = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 40px;

  p {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;

    label {
      width: 32%;
      border: 1px solid #ddd;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      cursor: pointer;
      border-radius: 3px;

      p {
        margin: 0;
        margin-left: 10px;
        font-size: 16px;
      }
    }
  }
`;

export const Salario = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;

  div {
    width: 50%;

    select {
      width: 90%;
      padding: 10px;
      font-size: 18px;
      border: 1px solid #ddd;
      background-color: transparent;
    }
  }
  p {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export const Adicionais = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 40px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      label {
        width: 49%;
        padding: 10px;
        border: 1px solid #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        p {
          margin: 0;
          margin-left: 5px;
        }
      }
    }
  }
`;
