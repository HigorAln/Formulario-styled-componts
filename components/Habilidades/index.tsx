/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
import { Main, Carreira, Experiencia, YoursHabilidades } from './style';

export default function Habilidades() {
  return (
    <Main>
      <Carreira>
        <label htmlFor="carreira">Foco de carreira</label>
        <select name="carreira" id="carreira">
          <option value="">Escolha sua principal competencia</option>
          <option value="back-end">Back-end</option>
          <option value="front-end">Front-end</option>
          <option value="fullstack">FullStack</option>
          <option value="mobile">Mobile</option>
        </select>
      </Carreira>
      <Experiencia>
        <p>Experiencia</p>
        <div>
          <label htmlFor="junior">
            <input type="radio" id="junior" name="experiencia" value="junior" />
            <p>Junior</p>
          </label>
          <label htmlFor="pleno">
            <input type="radio" id="pleno" name="experiencia" value="pleno" />
            <p>Pleno</p>
          </label>
          <label htmlFor="senior">
            <input type="radio" id="senior" name="experiencia" value="senior" />
            <p>Senior</p>
          </label>
        </div>
      </Experiencia>
      <YoursHabilidades>
        <p>
          Informe suas habilidades (minimo 3) e indique quantos anos de
          experiencia voce possui em cada uma
        </p>
        <div>
          <select name="habilidade" id="habilidade">
            <option value=""> </option>
            <option value="docker">Docker</option>
            <option value="Javascript">Javascript</option>
            <option value="Nodejs">Nodejs</option>
            <option value="MySQl">MySQl</option>
            <option value="MongoDB">MongoDB</option>
            <option value="Reactjs">Reactjs</option>
            <option value="Nextjs">Nextjs</option>
            <option value="Html">Html</option>
            <option value="Css3">Css3</option>
            <option value="TypeScript">TypeScript</option>
            <option value="Git">Git</option>
          </select>
          <input type="text" placeholder="Ex: 1-2 anos" />
        </div>
        <div>
          <select name="habilidade" id="habilidade">
            <option value=""> </option>
            <option value="docker">Docker</option>
            <option value="Javascript">Javascript</option>
            <option value="Nodejs">Nodejs</option>
            <option value="MySQl">MySQl</option>
            <option value="MongoDB">MongoDB</option>
            <option value="Reactjs">Reactjs</option>
            <option value="Nextjs">Nextjs</option>
            <option value="Html">Html</option>
            <option value="Css3">Css3</option>
            <option value="TypeScript">TypeScript</option>
            <option value="Git">Git</option>
          </select>
          <input type="text" placeholder="Ex: 1-2 anos" />
        </div>
        <div style={{ marginBottom: '0' }}>
          <select name="habilidade" id="habilidade">
            <option value=""> </option>
            <option value="docker">Docker</option>
            <option value="Javascript">Javascript</option>
            <option value="Nodejs">Nodejs</option>
            <option value="MySQl">MySQl</option>
            <option value="MongoDB">MongoDB</option>
            <option value="Reactjs">Reactjs</option>
            <option value="Nextjs">Nextjs</option>
            <option value="Html">Html</option>
            <option value="Css3">Css3</option>
            <option value="TypeScript">TypeScript</option>
            <option value="Git">Git</option>
          </select>
          <input type="text" placeholder="Ex: 1-2 anos" />
        </div>
      </YoursHabilidades>
    </Main>
  );
}
