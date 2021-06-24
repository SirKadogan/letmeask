import {FormEvent} from 'react';
import IllustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import { Button } from '../components/Button';


import '../styles/auth.scss';
import { useState } from 'react';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

export default function NewRoom() {
  const {user} = useAuth();
  const [roomName, setRoomName] = useState('');
  const history = useHistory();

  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    if(roomName.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: roomName,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`)
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
         <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              value = {roomName}
              onChange = {event => setRoomName(event.target.value)}
              type = "text"
              placeholder = "Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}