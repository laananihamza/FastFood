import { Head } from "@inertiajs/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Product({products, id}) {
    console.log(products);
    return ( 
        <>
        <Head title="FastFood | Product" />
        <Header />
        <section className="container mx-auto px-14">
            <img src={`/${products[0].urlPhoto}`} alt="" />
        </section>
        <Footer />
        </>
     );
}

export default Product