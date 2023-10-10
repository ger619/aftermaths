// post List link (Root path) | link to create new post (Post form)
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <Link to='/'>Post List</Link>
            {' | '}
            <Link to='/posts/new'>New Post</Link>
        </nav>
    )
}

export default Navbar