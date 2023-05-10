import { Link } from "@inertiajs/react";

function NotFound() {
    return ( 
        <>
            <p className="text-center text-lg">Opss..</p>
            <p className="text-center text-lg">This page not Found (404)</p>
            <Link href={route('home')}>To Home...</Link>
        </>
     );
}

export default NotFound;