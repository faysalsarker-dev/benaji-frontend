
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Review = () => {
  const datas = [
    {
      image: "https://uposhombd.com/wp-content/uploads/2024/05/5-01-scaled.jpg",
      message: "এই হারবাল পণ্য সত্যিই চমৎকার, আমি খুবই সন্তুষ্ট।"
    },
    {
      image: "https://uposhombd.com/wp-content/uploads/2024/05/5-01-scaled.jpg",
      message: "প্রাকৃতিক উপাদানের কারণে, পার্শ্বপ্রতিক্রিয়া নেই।"
    },
    {
      image: "https://uposhombd.com/wp-content/uploads/2024/05/5-01-scaled.jpg",
      message: "এই পণ্যটি আমার স্বাস্থ্যের উন্নতি করেছে।"
    },
    {
      image: "https://uposhombd.com/wp-content/uploads/2024/05/5-01-scaled.jpg",
      message: "আমি এই হারবাল পণ্যটি সবাইকে সুপারিশ করবো।"
    },
  ];

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
          {datas.map((data, idx) => (
            <SwiperSlide key={idx}>
              <div className="p-4 flex flex-col items-center">
                <img src={data.image} alt={`Review ${idx + 1}`} className="mx-auto max-w-full h-auto rounded-lg md:max-w-sm" />
                <p className="mt-4 text-lg">{data.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
