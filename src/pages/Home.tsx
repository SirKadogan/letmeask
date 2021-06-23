import IllustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
import GoogleIconImg from '../assets/images/google-icon.svg';

import {useHistory} from 'react-router-dom';

import '../styles/auth.scss';
import { Button } from '../components/Button';

export default function Home() {
  const history = useHistory();

  const navigateToNewRoom = () => {
    history.push('/rooms/new')
  }

  return (
    <div id ="page-auth">
      <aside>
        <img src={IllustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
        <strong>{"Crie sala de Q&A ao vivo"}</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={LogoImg} alt="Letmeask"/>
          <button className="create-room" onClick={navigateToNewRoom}>
            <img src={GoogleIconImg} alt="Logo do google"/>
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input
            type = "text"
            placeholder = "Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}