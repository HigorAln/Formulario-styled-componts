/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
import { Main, Photo, Info1, Info2 } from './style';

export default function Inputs() {
  return (
    <Main>
      <Photo>
        <div>
          <span className="material-icons-outlined">add_a_photo</span>
        </div>
        <label htmlFor="avatar">Escolha uma foto para seu perfil</label>
        <input type="file" id="avatar" name="avatar" accept="image/*" hidden />
      </Photo>
      <Info1>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" />
        </div>
        <div>
          <label htmlFor="sobrenome">Sobrenome</label>
          <input type="text" name="sobrenome" />
        </div>
      </Info1>
      <Info2>
        <div>
          <label htmlFor="celular">Numero de Celular</label>
          <input type="text" name="nome" placeholder="Ex: (11) 9 9999 9999" />
        </div>
        <div>
          <label htmlFor="cidade">Cidade onde voce mora</label>
          <input type="text" name="nome" placeholder="Ex: Sao paulo" />
        </div>
      </Info2>
    </Main>
  );
}
