import { Head } from "@inertiajs/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Profile({user}) {
    return ( 
        <>
        <Head title="FastFoode | Profile" />
        <Header user={user} />
        <p>Hello User</p>
        <Footer />
        </>
     );
}

export default Profile;