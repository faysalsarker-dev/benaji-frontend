

const Banner = () => {
    return (
        <div className='lg:h-[80vh] md:h-[40vh] sm:h-[40vh] h-[45vh] border rounded-xl my-4 p-4'>
            <section className="bg-primary text-secondary py-20">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">স্বাগতম হার্বাল রেমেডিসে</h2>
    <p className="mb-8">প্রকৃতির শক্তি অনুভব করুন আমাদের <span className="text-secondary">ঐতিহ্যবাহী হার্বাল ওষুধের মাধ্যমে।</span></p>
    <button className="bg-secondary text-primary py-2 px-4 rounded">আরও জানুন</button>
  </div>
</section>
        </div>
    );
};

export default Banner;