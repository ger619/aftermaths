import {Link} from 'react-router-dom'
import { useState } from "react";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="w-[100%]">
        <nav className="top-0 text-center m-4">
            <div className="flex justify-center gap-8">
                <div className="mr-8">
                    <button onClick={() => setIsOpen(!isOpen)} >
                        Demos
                    </button>

                    {isOpen && (
                        <ul className="">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/posts/new'>New Post</Link>
                            </li>

                        </ul>

                    )}
                </div>
                <div >
                    <button >
                        Who We Are
                    </button>
                </div>
                <div >
                    <button >
                        Shop
                    </button>
                </div>
                <div >
                    <button >
                        Blog
                    </button>
                </div>
                <div >
                    <button >
                        All Pages
                    </button>
                </div>
            </div>


        </nav>
        <hr className="bg-white w-[100%] h-2" />
    </div>
    )
}

export default Navbar