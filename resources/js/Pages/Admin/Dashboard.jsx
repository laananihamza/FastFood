import { Head } from "@inertiajs/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Dashboard() {
    return ( 
        <>
            <Head title="Dashboard" />
            <Header />
                Hello admin
            <Footer />
        </>
    );
}

export default Dashboard;