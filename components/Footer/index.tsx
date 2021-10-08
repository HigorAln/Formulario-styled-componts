import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  margin-top: 75px;

  p {
    letter-spacing: 2px;
    font-size: 20px;
  }
`;

export default function Footer() {
  return (
    <Div>
      <p>{'Feito por Higor allan!! <3'}</p>
    </Div>
  );
}
