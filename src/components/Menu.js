import { Link } from 'react-router-dom'

const Menu = () => {
  const padding = {
    paddingRight: "0.5em"
  }
  return (
    <div>
      <Link to='/' style={padding}>Home</Link>
      <Link to='/create' style={padding}>Create new</Link>
      <Link to='/about' style={padding}>About</Link>
    </div>
  )
}

export default Menu