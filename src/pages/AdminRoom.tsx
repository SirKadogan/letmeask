import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { database } from '../services/firebase';

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import Question from '../components/Question';

import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';

import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';

import '../styles/room.scss';

type RoomParams = {
  id: string;
}


export default function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const {questions, title} = useRoom(roomId);

  const handleDeleteQuestion = async (questionId: string) => {
    if (window.confirm("Tem certeza que deseja excluir essa pergunta?")){
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    };
  }



  return <div id = "page-room">
    <header>
      <div className = "content">
        <img src={logoImg} alt = "letmeask"/>
        <div>
          <RoomCode code={roomId}/>
          <Button isOutlined>Encerrar sala</Button>
        </div>
      </div>
    </header>
    <main>
      <div className="room-title">
        <h1>Sala {title}</h1>
        {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
      </div>
     
      <div className="question-list">
        {questions.map((question) => 
          <Question key={question.id} {...question}>
            <button
            type ="button"
            onClick = {() => handleDeleteQuestion(question.id)}
            >
              
              <img src ={deleteImg} alt="Remover pergunta"/>
            </button>

          </Question>
        )}
      </div>
    </main>
  </div>
}