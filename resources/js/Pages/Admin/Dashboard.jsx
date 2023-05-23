import { Head, usePage } from "@inertiajs/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Dashboard({user}) {
    const pageInfo = usePage()
    return ( 
        <>
        
            <Head title="Dashboard" />
            <Header user={user} />
                Hello admin
            <Footer />
        </>
    );
}

export default Dashboard;