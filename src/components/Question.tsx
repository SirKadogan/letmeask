
import classnames from 'classnames';
import '../styles/question.scss';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: React.ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export default function Question(props: QuestionProps) {
  const { 
    content,
    author,
    children,
    isAnswered,
    isHighlighted,
  } = props;

  return (
    <div 
      className={classnames('question', {
        answered: isAnswered,
        highlighted: isHighlighted && !isAnswered
      })}
    >
      <p>{content}</p>
      <footer >
        <div className="user-info">
          <img src={author.avatar} alt={author.name}/>
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  )
}