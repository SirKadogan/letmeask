import IllustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
import GoogleIconImg from '../assets/images/google-icon.svg';


import {useHistory} from 'react-router-dom';
import { Button } from '../components/Button';

import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';

export default function Home() {
  const history = useHistory();
  const { signInWithGoogle, user } = useAuth();
  const [roomCode, setRoomCode] = useState('');


  const handleCreateRoom = async () => {
    if (!user)  {
      await signInWithGoogle();
      
    }
    history.push('/rooms/new');
  }

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();
    
    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`/rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exist!');

      return;
    }

    if (roomRef.val().endedAt) {
      alert('Room has been closed.');
    }

    history.push(`/rooms/${roomCode}`)
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
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={GoogleIconImg} alt="Logo do google"/>
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
            type = "text"
            placeholder = "Digite o código da sala"
            value = {roomCode}
            onChange = {event => setRoomCode(event.target.value)}
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