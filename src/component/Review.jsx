/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Review = ({datas}) => {

  return (
    <section className="py-12 text-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-secondary">আমাদের গ্রাহকদের কিছু রিভিউ</h2>
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper rounded-lg"
        >
          {datas?.map((data, idx) => (
            <SwiperSlide key={idx}>
              <div className="p-4 flex flex-col items-center border-2 rounded-lg border-green-500">
                <img src={data.image} alt={`Review ${idx + 1}`} className="mx-auto max-w-full h-auto  rounded-lg md:max-w-sm" />
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
