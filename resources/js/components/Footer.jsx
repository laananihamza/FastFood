function Footer() {
    return ( 
        <>
            <footer className="  relative">
            <div className="part-1-footer py-24 bg-[#181818] relative">
                    <div className="container mx-auto px-4">
                        <img src="/images/delivery.png" className="delivery absolute -top-28 md:-top-40 lg:-top-32 right-32 w-5/12 md:w-fit " />
                    </div>
                <div className="logo-footer mx-auto flex justify-center items-center relative">
                    <a href="/" className="w-fit flex justify-center items-center">
                        <img src="/images/BK.png" className="logo-image w-1/3 md:w-1/4 lg:w-1/3" />
                    </a>
                </div>
                <div className="container mx-auto px-4">
                        <div className="summary-info mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
                            <div className="box text-center ">
                                <p className="text-white font-black mb-3 text-xl uppercase">address</p>
                                <p className="text-stone-400 text-md">570 Giliz,
                                    Marrakesh, 40000<br />
                                    Morocco</p>
                            </div>
                            <div className="box text-center">
                                <p className="text-white font-black mb-3 text-xl uppercase">Book a Table</p>
                                <p className="text-stone-400 text-sm leading-relaxed">Dogfood och Sliders foodtruck.
                                    Under<br /> Om oss kan ni läsa</p>
                                <div className="phone-number text-yellow-400 font-bold text-lg my-3"> (+212) 5 12 48 97 26</div>
                            </div>
                            <div className="box text-center">
                                <p className="text-white font-black mb-4 text-xl uppercase">opening hours</p>
                                <ul>
                                    <li className="text-stone-400 text-sm">Monday - Friday : <span className="text-white font-bold">9:00 - 22:00 </span></li>
                                    <li className="text-stone-400 text-sm mt-2"> Saturday - Sunday : <span className="text-white font-bold">9:00 - 00:00 </span></li>
                                </ul>
                            </div>
                            <div className="box text-center">
                                <p className="text-white font-black mb-3 text-xl uppercase">newsLatest</p>
                                <p className="text-stone-400 text-sm leading-relaxed mb-2">Subscribe to the weekly newsletter for all the latest updates</p>
                                <form action={'/mess'} method="post">
                                    <div className="email-input w-full p-2 rounded-md border border-stone-500 flex items-center">
                                        <input type="email" className="p-2 w-full bg-[#181818] text-slate-50 border-none placeholder:bg-[#181818] placeholder:text-slate-300 focus:outline-none" name="email" id="email" placeholder="Your email.." />
                                        <input type="submit" className="bg-yellow-500 w-fit py-3 px-4 rounded-md cursor-pointer" value="Subscribe" />
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                        <div className="social-media flex justify-center items-center gap-5 absolute -bottom-5 w-full left-0">
                            <a href="https://facebook.com/burgerkech"><i className="lab la-facebook-f p-2 text-xl rounded-full bg-white duration-200 hover:bg-blue-600 hover:text-white"></i></a>
                            <a href="https://twitter.com/burgerkech"><i className="lab la-twitter p-2 text-xl rounded-full bg-white duration-200 hover:bg-sky-500 hover:text-white"></i></a>
                            <a href="https://instagram.com/burgerkech"><i className="lab la-instagram p-2 text-2xl rounded-full bg-white duration-200 hover:bg-gradient-to-br from-violet-400 to-pink-400 hover:bg-l hover:text-white"></i></a>
                            <a href="https://youtube.com/c/burgerkech"><i className="lab la-youtube p-2 text-2xl rounded-full bg-white duration-200 hover:bg-red-600 hover:text-white"></i></a>
                        </div>
                    
                </div>
            </div>
            <div className="part-2 bg-green-600 py-5 ">
                <div className="container mx-auto px-5 flex flex-col gap-5 py-14 md:flex-row md:gap-1 md:py-0  justify-between items-center">
                    <p className="copyright text-md text-white">
                        Copyright &copy; {new Date().getFullYear() }, Made By <span className="text-yellow-300">LAANANI</span> <i className="las la-heart text-red-600"></i>
                    </p>
                    <img src="/images/payments.png" alt="" />
                </div>
            </div>
            </footer>
        </>
     );
}

export default Footer;