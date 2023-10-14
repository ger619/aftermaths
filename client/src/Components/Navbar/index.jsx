// post List link (Root path) | link to create new post (Post form)
import {Link} from 'react-router-dom'
import { useState } from "react";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav>
            <button onClick={() => setIsOpen(!isOpen)}>
                Menu
            </button>
            {isOpen && (
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>Home2</Link>
                    </li>
                    <li>
                        <Link to='/posts/new'>New Post</Link>
                    </li>



                </ul>
            )}

        </nav>
    )
}

export default Navbar