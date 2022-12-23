import { useNavigate } from "react-router-dom"
import { useField } from '../hooks'

const CreateNew = (props) => {
  const navigate = useNavigate()

  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
    navigate('/')
  }

  const handleReset = (e) => {
    e.preventDefault()

    content.reset()
    author.reset()
    info.reset()
  }

  return (
    <div>
      <h2>Create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Content:
          <input {...content} reset='' />
        </div>
        <div>
          Author:
          <input {...author} reset='' />
        </div>
        <div>
          Url for more info:
          <input {...info} reset='' />
        </div>
        <div style={{ paddingTop: "1em" }}>
          <button>Create</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default CreateNew