import img from "../img/IMG-20240728-WA0003.jpg";

const Card = () => {
  return (
    <div className="card bg-base-100 shadow-xl p-4">
      <figure className="px-4 pt-4">
        <img src={img} alt="ভেষজ ঔষধ" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-primary">ভেষজ ঔষধ</h2>
        <p className="text-secondary">প্রাকৃতিক ঔষধের শক্তি উপভোগ করুন</p>
        <div className=" flex justify-center text-white mt-4">
          <button className="btn  bg-primary text-white">আরও জানুন</button>
          <button className="btn  bg-secondary">কিনুন</button>
        </div>
      </div>
    </div>
  
  );
};

export default Card;
