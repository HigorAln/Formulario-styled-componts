/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
import { Main, Empresa, Contrato, Salario, Adicionais } from './style';

export default function Busca() {
  return (
    <Main>
      <Empresa>
        <p>Tamanho do empresa</p>
        <div>
          <label>
            <input type="checkbox" value="startup" name="startup" />
            <p>Startup</p>
          </label>
          <label>
            <input type="checkbox" value="pequena/media" name="pequena/media" />
            <p>Pequena / Media empresa</p>
          </label>
          <label>
            <input type="checkbox" value="grande" name="grande" />
            <p>Grande empresa</p>
          </label>
        </div>
      </Empresa>
      <Contrato>
        <p>Tipo(s) de contrato</p>
        <div>
          <label>
            <input type="checkbox" value="CLT" name="CLT" />
            <p>CLT</p>
          </label>
          <label>
            <input type="checkbox" value="PJ" name="PJ" />
            <p>PJ</p>
          </label>
          <label>
            <input type="checkbox" value="Estagio" name="Estagio" />
            <p>Estagio</p>
          </label>
        </div>
      </Contrato>
      <Salario>
        <div>
          <p>Qual o salario minimo que voce aceita por mes?</p>
          <select name="salario" id="salario">
            <option value=""> </option>
            <option value="1000-1500">Entre R$1.000 e R$1.500</option>
            <option value="1500-2000">Entre R$1.500 e R$2.000</option>
            <option value="2000-2500">Entre R$2.000 e R$2.500</option>
            <option value="2500-3000">Entre R$2.500 e R$3.000</option>
            <option value="3000-3500">Entre R$3.000 e R$3.500</option>
            <option value="3500-4000">Entre R$3.500 e R$4.000</option>
            <option value="4000-4500">Entre R$4.000 e R$4.500</option>
          </select>
        </div>
        <div>
          <p>Status de busca</p>
          <select name="status" id="status">
            <option value=""> </option>
            <option value="novas-oportunidades">
              Em busca de novas oportunidades
            </option>
            <option value="empregado">
              Empregado(a). Porem, uma boa oportunidade e sempre bem vinda!{' '}
            </option>
            <option value="nao">
              Nao estou procurando um novo emprego agora
            </option>
          </select>
        </div>
      </Salario>
      <hr />
      <Adicionais>
        <div>
          <p>Voce aceita trabalhar remotamente?</p>
          <div>
            <label>
              <input type="radio" value="sim" name="remoto" />
              <p>Sim</p>
            </label>
            <label>
              <input type="radio" value="nao" name="remoto" checked />
              <p>Nao</p>
            </label>
          </div>
        </div>
        <div>
          <p>Você é deficiente físico?</p>
          <div>
            <label>
              <input type="radio" value="sim" name="deficiente" />
              <p>Sim</p>
            </label>
            <label>
              <input type="radio" value="nao" name="deficiente" checked />
              <p>Nao</p>
            </label>
          </div>
        </div>
      </Adicionais>
    </Main>
  );
}
