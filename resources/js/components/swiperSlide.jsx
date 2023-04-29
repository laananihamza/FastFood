import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default () => {
    return (
      <Swiper
      modules={[Autoplay]}
      breakpoints={{
          768: {
              spaceBetween: 10,
              slidesPerView : 1,
            },
            992: {
                spaceBetween: 20,
                slidesPerView : 2,
                
            }
        }}
        autoplay={{delay : 5000}}
        loop
      >
        <SwiperSlide>
            <div className="slide swiper-slide rounded-md bg-white px-6 py-7">
                            <div className="info flex justify-between items-center overflow-hidden">
                                <div className="profile flex gap-3 items-center">
                                    <img src="/images/user.png" className="rounded-full w-16" alt="" />
                                    <div className="names">
                                        <p className="text-sm md:text-md font-bold uppercase">User1 Unknown</p>
                                        <p className="text-sm text-slate-500">Ordred Pizza</p>
                                    </div>
                                </div>
                                <div className="starts flex gap-1">
                                    <i className="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i className="far fa-star text-sm md:text-md text-yellow-400"></i>
                                </div>
                            </div>
                            <div className="description mt-6 text-md md:text-lg text-slate-800">
                                <q>I ordred a medium cheese pizza, It's amazing</q>
                            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide swiper-slide rounded-md bg-white px-6 py-7">
                            <div className="info flex justify-between items-center overflow-hidden">
                                <div className="profile flex gap-3 items-center">
                                    <img src="/images/user-2.png" className="rounded-full w-16" alt="" />
                                    <div className="names">
                                        <p className="text-sm md:text-md font-bold uppercase">User2 Unknown</p>
                                        <p className="text-sm text-slate-500">Ordred Burger</p>
                                    </div>
                                </div>
                                <div className="starts flex gap-1">
                                    <i className="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                </div>
                            </div>
                            <div className="description mt-6 text-md md:text-lg text-slate-800">
                                <q>Best burger I ate in Marrakesh, Deserves it</q>
                            </div>
                        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide swiper-slide rounded-md bg-white px-6 py-7">
                            <div className="info flex justify-between items-center overflow-hidden">
                                <div className="profile flex gap-3 items-center">
                                    <img src="/images/avatar-04.png" className="rounded-full w-16" alt="" />
                                    <div className="names">
                                        <p className="text-sm md:text-md font-bold uppercase">Amid Folan</p>
                                        <p className="text-sm text-slate-500">Ordred Burger</p>
                                    </div>
                                </div>
                                <div className="starts flex gap-1">
                                    <i className="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i className="far fa-star text-sm md:text-md text-yellow-400"></i>
                                </div>
                            </div>
                            <div className="description mt-6 text-md md:text-lg text-slate-800">
                                <q>That was perfect Burger, Thank you..</q>
                            </div>
                        </div>
        </SwiperSlide>
      </Swiper>
    );
  };