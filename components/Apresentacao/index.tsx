/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Main, Div, Curriculo } from './style';

export default function Apresentacao() {
  return (
    <Main>
      <Div style={{ marginTop: '30px' }}>
        <label htmlFor="Titulo-perfil">Titulo do seu perfil</label>
        <input
          type="text"
          placeholder="Ex: Programador Javascript"
          name="Titulo-perfil"
        />
      </Div>
      <Div>
        <label htmlFor="ingles">Nos diga seu nivel de ingles</label>
        <select
          name="ingles"
          id="ingles"
          style={{ textTransform: 'none', background: 'transparent' }}
        >
          <option value="">Indique seu nivel de ingles</option>
          <option value="nulo-pouco">Nulo ou pouco</option>
          <option value="basico">Nivel Basico</option>
          <option value="basico-intermediario">
            Nivel Basico a intermediario
          </option>
          <option value="avancado">Nivel Avancado</option>
          <option value="fluente">Fluente ou nativo</option>
        </select>
      </Div>
      <Div>
        <label htmlFor="descricao">Descricao</label>
        <textarea
          name="descricao"
          id="descricao"
          cols={30}
          rows={3}
          style={{ border: '1px solid #bbb' }}
          placeholder="Deixe que a empresa conheca mais sobre voce. Conte um pouco sobre seus objetivos, experiencias e carreiras."
        />
      </Div>
      <Div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <div style={{ width: '49%' }}>
          <label htmlFor="linkedin">Linkedin url</label>
          <input
            type="text"
            name="linkedin"
            placeholder="Ex: http://www.linkedin.com/in/higorallan"
            style={{ textTransform: 'none' }}
          />
        </div>
        <div style={{ width: '49%' }}>
          <label htmlFor="github">GibHub / GitLab / Stack url</label>
          <input
            type="text"
            placeholder="Ex: http://github.com/Higoraln"
            style={{ textTransform: 'none' }}
          />
        </div>
      </Div>
      <Curriculo>
        <span className="material-icons-outlined">upload_file</span>
        <div>
          <p>
            Anexa seu CV{' '}
            <span>
              <span className="material-icons-outlined">warning</span>
              Obrigatorio para se candidatar as vagas
            </span>
          </p>
          <label htmlFor="curriculo">Escolha Arquivo</label>
          <input type="file" name="curriculo" id="curriculo" hidden />
        </div>
      </Curriculo>
    </Main>
  );
}
