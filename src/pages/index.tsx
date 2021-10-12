/* eslint-disable import/extensions */
import { useEffect } from 'react';
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
  useEffect(() => {
    alert(
      'Aplicação extremamente simples, toda estilizacao feita com styled-components, sem o uso de useState, para guarda valores, e sem o uso de banco de dados para guardar valores, aplicação feita somente para fazer um formulario sem muito detalhe.',
    );
  }, []);
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
