/* eslint-disable import/extensions */
import { ContextForm } from '../../FormContext/FormContext';
import Formulario from '../../components/Formulario';
import SobreVoce from '../../components/SobreVoce';
import Apresentacao from '../../components/Apresentacao';
import { Body } from '../styles/Ui';
import Habilidades from '../../components/Habilidades';
import Busca from '../../components/Busca';
import Space from '../../components/Space';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <Body>
      <ContextForm>
        <h1>Preencha os campos para a seleção de vagas</h1>
        <Formulario>
          <SobreVoce />
          <Apresentacao />
          <Habilidades />
          <Busca />
          <Space />
        </Formulario>
        <Footer />
      </ContextForm>
    </Body>
  );
}
