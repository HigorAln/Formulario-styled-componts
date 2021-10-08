/* eslint-disable import/no-duplicates */
import styled from 'styled-components';

const Div = styled.div`
  width: 85%;
  display: flex;
  margin-top: 75px;
  justify-content: center;
  align-items: center;
  padding: 50px;
  border: 1px solid #ddd;
  border-radius: 5px;

  button {
    width: 120px;
    height: 50px;
    font-size: 25px;
    text-transform: capitalize;
    border: 1px solid #bbb;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      filter: opacity(80%);
    }
    &:active {
      background-color: #ccc;
    }
  }
`;

export default function Space() {
  return (
    <Div>
      <button type="button">Enviar</button>
    </Div>
  );
}
