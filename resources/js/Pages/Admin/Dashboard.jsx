import { Head, Link, usePage } from "@inertiajs/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/DashboardNav";
import HeaderDashboard from "../../components/DashboardHeader";

function Dashboard({user}) {
    const {url, component} = usePage()
    return ( 
        <>
        
            <Head title="FastFood | Dashboard" />
            <HeaderDashboard user={user} namePage='Dashboard' />
                <div className="flex items-center"> {/* This color : bg-sky-500 for sky blue */}
                    <NavBar user={user} />
                    <div className="px-10 py-3 content ml-auto w-10/12 md:w-8/12 lg:w-9/12 xl:w-[80%]">
                        content
                    </div>
                </div>
        </>
    );
}

export default Dashboard;