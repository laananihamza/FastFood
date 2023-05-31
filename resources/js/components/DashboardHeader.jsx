import { Link } from "@inertiajs/react";

function HeaderDashboard({user, namePage}) {
    return ( 
        <header className="px-10 flex items-center justify-between py-5 ml-auto w-10/12 md:w-8/12 lg:w-9/12 xl:w-[80%] bg-gray-100 font-bold">
            <p className="text-2xl py-1.5 ">{namePage}</p>
            <Link href={route('logout')} id="logout-form" method="POST" className="d-none w-fit text-stone-600 duration-100 hover:text-red-700 border-0 bg-transparent" as="button">
                Logout
            </Link>
        </header>
    );
}

export default HeaderDashboard;