import Question from './Question'

const QuestionList =  (props) => {
  const questions = props.questions
  
  return <ul>
    {questions.map(question => <Question question={question.question} answer={question.answer}/>)}
  </ul>
}

export default QuestionList