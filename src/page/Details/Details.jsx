
import { useForm } from 'react-hook-form';
import img_1 from '../../img/IMG-20240728-WA0003.jpg';
import { useState } from 'react';

const Details = () => {
  const { register, handleSubmit } = useForm();
  const [pice,setPice]=useState(1)

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-center text-3xl font-bold mb-6 text-primary">সহজে কোষ্ঠকাঠিন্যের কষ্ট থেকে মুক্তির উপায়</h3>
      <div className="border-2 border-secondary rounded-lg p-4 mb-6">
        <h4 className="text-2xl font-semibold text-center mb-4 text-primary">ব্যবহার করার নিয়ম</h4>
        <p className="text-justify text-secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat praesentium soluta esse vitae eum dolorum cupiditate eius ab vel adipisci doloribus sed laboriosam, porro qui vero saepe facilis odio expedita officiis, voluptas ducimus amet maiores eligendi! Rem modi eius minima neque, labore harum voluptates quibusdam obcaecati nemo ipsam quam porro.
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <img src={img_1} alt="Product" className="rounded-lg shadow-lg" />
      </div>
      
      <div className="flex justify-center mb-6">
        <div className="rounded-lg text-center">
          <h5 className="text-4xl font-bold text-primary">মূল্য: ১২৫০ টাকা</h5>
        </div>
      </div>

      <h4 className="text-center text-2xl font-semibold mb-4 text-primary">অর্ডার করতে নিচের ফরমটি পূরণ করুন</h4>
     <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-secondary">আপনার নাম লিখুন</span>
              </label>
              <input
                {...register('name')}
                type="text"
                placeholder="আপনার নাম এখানে লিখুন"
                className="input input-bordered w-full"
              />
            </div>
    
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-secondary">আপনার মোবাইল নাম্বার লিখুন</span>
              </label>
              <input
                {...register('phone')}
                type="tel"
                placeholder="আপনার মোবাইল নাম্বার এখানে লিখুন"
                className="input input-bordered w-full"
              />
            </div>
    
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-secondary">আপনার ঠিকানা লিখুন</span>
              </label>
              <textarea
                {...register('address')}
                className="textarea textarea-bordered h-24 w-full"
                placeholder="জেলা, উপজেলা/ থানা, ডেলিভারি এরিয়া"
              ></textarea>
            </div>
    
            <div className="flex justify-center">
              <button type="submit" className="btn btn-primary mt-4">অর্ডার করুন</button>
            </div>
          </form>
     </div>
   
     <div className="p-6 bg-gray-100 text-gray-800">


<div className="flex items-center gap-4 mb-6">
  <div className="w-16 h-16 rounded-full overflow-hidden">
    <img
      src={img_1}
      alt="Avatar"
      className="w-full h-full object-cover"
    />
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
        className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
        onClick={() => setPice(pice + 1)}
      >
        +
      </button>
      <button
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
  );
};

export default Details;
