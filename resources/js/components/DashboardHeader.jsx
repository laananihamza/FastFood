function HeaderDashboard({user, namePage}) {
    return ( 
        <header className="px-10 flex items-center justify-between py-5 ml-auto w-10/12 md:w-8/12 lg:w-9/12 xl:w-[80%] bg-gray-100 font-bold">
            <p className="text-2xl py-1.5 ">{namePage}</p>
        </header>
    );
}

export default HeaderDashboard;