import { faBoxesStacked, faChartLine, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";

function NavBar({user}) {
    return ( 
        <>
            <nav className="nav group px-3 py-8 text-white bg-green-500 rounded-r-lg w-2/12 duration-200 hover:w-8/12 md:hover:w-4/12 md:w-4/12 lg:hover:w-3/12 lg:w-3/12 xl:hover:w-[20%] xl:w-[20%] h-screen fixed top-0">
            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl pl-1 group"><FontAwesomeIcon icon={faUser} size="lg" /> <span className="ml-3 hidden md:inline group-hover:inline">Hello, {user?.name}</span></p>
                        <ul className="mt-5">
                            <li className="my-2 pl-1 text-lg duration-300 hover:pl-2"><Link href={route('dashboard')}><FontAwesomeIcon icon={faChartLine} /> <span className="ml-2 opacity-0 md:opacity-100 duration-150 hidden md:inline group-hover:inline group-hover:opacity-100 text-sm md:text-lg">Dashboard</span></Link></li>
                            <li className="my-2 pl-1 text-lg duration-300 hover:pl-2"><Link href={route('products.index')}><FontAwesomeIcon icon={faBoxesStacked} /> <span className="ml-2 opacity-0 md:opacity-100 duration-150 hidden md:inline group-hover:inline group-hover:opacity-100 text-sm md:text-lg"> Products management</span></Link></li>
                        </ul>
                    </nav>
        </>
    );
}

export default NavBar;