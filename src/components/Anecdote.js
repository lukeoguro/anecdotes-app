const Anecdote = ({ anecdote }) => {
  return (
    <div>
      <h3><b>{anecdote.content}</b></h3>
      <div>By: {anecdote.author}</div>
      <div>More info: <a href={anecdote.info}>{anecdote.info}</a></div>
    </div>
  )
}

export default Anecdote