import IllustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
import GoogleIconImg from '../assets/images/google-icon.svg';

export default function Home() {
  return (
    <div>
      <aside>
        <img src={IllustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
        <strong>{"Crie sala de Q&A ao vivo"}</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div>
          <img src={LogoImg} alt="Letmeask"/>
          <button>
            <img src={GoogleIconImg} alt="Logo do google"/>
            Crie sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input
            type = "text"
            placeholder = "Digite o código da sala"
            />
            <button type="submit">
              Entrar na sala
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}