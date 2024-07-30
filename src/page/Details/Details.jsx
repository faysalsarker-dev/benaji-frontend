import { useForm } from 'react-hook-form';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import img_1 from '../../img/IMG-20240728-WA0003.jpg';
import { useState } from 'react';
import Benifit from '../../component/Benifit';
import Review from '../../component/Review';

const Details = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [pice, setPice] = useState(1);
  const [isLoading, setIsLoading] = useState(true);









  const onSubmit = (data) => {
    console.log(data);
  };

  // Simulate loading
  useState(() => {
    setTimeout(() => setIsLoading(false), 2000); 
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-center text-3xl font-bold mb-6 text-primary">সহজে কোষ্ঠকাঠিন্যের কষ্ট থেকে মুক্তির উপায়</h3>
      <div className="border-2 border-secondary rounded-lg p-4 mb-6">
        <h4 className="text-2xl font-semibold text-center mb-4 text-primary border-b-2 pb-2">ব্যবহার করার নিয়ম</h4>
        <p className="text-justify text-secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat praesentium soluta esse vitae eum dolorum cupiditate eius ab vel adipisci doloribus sed laboriosam, porro qui vero saepe facilis odio expedita officiis, voluptas ducimus amet maiores eligendi! Rem modi eius minima neque, labore harum voluptates quibusdam obcaecati nemo ipsam quam porro.
        </p>
      </div>

      <div className="flex justify-center mb-6">
        {isLoading ? <Skeleton height={300} width={300} /> : <img src={img_1} alt="Product" className="rounded-lg shadow-lg" />}
      </div>

      <div className="flex justify-center mb-6">
        <div className="rounded-lg text-center border-2 p-4">
          <h5 className="text-3xl font-bold text-primary">মূল্য: ১২৫০ টাকা</h5>
        </div>
      </div>

      <h4 className="text-center md:text-2xl text-xl font-extrabold mb-4 text-primary">অর্ডার করতে নিচের ফরমটি পূরণ করুন</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex justify-center md:flex-row flex-col items-center">
          <div className="w-full md:w-1/2 p-2">
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text text-secondary">আপনার নাম লিখুন :</span>
              </label>
              <input
                {...register('name', { required: 'নাম লিখুন' })}
                type="text"
                placeholder="আপনার নাম এখানে লিখুন"
                className={`input input-bordered w-full ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>

            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text text-secondary">আপনার মোবাইল নাম্বার লিখুন :</span>
              </label>
              <input
                {...register('phone', { required: 'মোবাইল নাম্বার লিখুন' })}
                type="tel"
                placeholder="আপনার মোবাইল নাম্বার এখানে লিখুন"
                className={`input input-bordered w-full ${errors.phone ? 'border-red-500' : ''}`}
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-secondary">আপনার ঠিকানা লিখুন :</span>
              </label>
              <textarea
                {...register('address', { required: 'ঠিকানা লিখুন' })}
                className={`textarea textarea-bordered h-24 w-full ${errors.address ? 'border-red-500' : ''}`}
                placeholder="জেলা, উপজেলা/ থানা, ডেলিভারি এরিয়া"
              ></textarea>
              {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
            </div>
          </div>
        
          <div className="w-full md:w-1/2 p-2">
            <div className="p-6 bg-gray-100 text-gray-800 rounded-lg shadow-md">
              <h3 className='text-xl font-semibold my-3'>আপনার অর্ডার <i className="fa-solid fa-badge-check fa-fw"></i></h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  {isLoading ? <Skeleton circle height={64} width={64} /> : <img src={img_1} alt="Avatar" className="w-full h-full object-cover" />}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">নাম</h2>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold">প্রতি পিসের মূল্য: ১২৫০ টাকা</h3>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold">মোট মূল্য: {pice * 1250} টাকা</h3>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-semibold">কতো পিস নিবেন: {pice}</h3>
                  <div>
                    <button
                      type="button"
                      className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                      onClick={() => setPice(pice + 1)}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      disabled={pice <= 1}
                      className="bg-red-500 text-white py-2 px-4 rounded"
                      onClick={() => setPice(pice - 1)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-2xl text-primary font-semibold mb-4">ক্যাশ অন ডেলিভারি</h4>
                <div className="bg-white p-4 rounded shadow-md">
                  <p className="text-lg">পণ্য হাতে পেয়ে টাকা পরিশোধ করুন</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button type="submit" className="btn w-full bg-primary mt-4 text-white">অর্ডার করুন</button>
        </div>
      </form>

      <Benifit/>
      <Review/>
    </div>
  );
};

export default Details;
