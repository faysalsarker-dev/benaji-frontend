import { useForm } from 'react-hook-form';

import 'react-loading-skeleton/dist/skeleton.css';
import imgProduct from '../../img/IMG-20240728-WA0003.jpg';
import { useState } from 'react';


import comment_1 from "../../comment/first_1.jpg";
import comment_2 from "../../comment/first_2.jpg";
import comment_3 from "../../comment/first_3.jpg";
import comment_4 from "../../comment/first-4.jpg";


import Review from '../../component/Review';
import { useMutation } from "@tanstack/react-query";
import useAxios from '../../Hook/useAxios';
import toast from 'react-hot-toast';
import Benefit from '../../component/Benifit';
import Footer from '../../component/Footer';
import { ScaleLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const { register, handleSubmit, formState: { errors } ,reset} = useForm();
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(quantity * 1200);
  const [loading,setLoading]= useState(false)
  const axiosCommon = useAxios();
  const navigate = useNavigate()

  const datas = [
    { image: comment_1 },
    { image: comment_2 },
    { image: comment_3 },
    { image: comment_4 },

  ];

  const { mutateAsync } = useMutation({
    mutationFn: async (info) => {
      const { data: updatedData } = await axiosCommon.post(`/order`, info);
      return updatedData;
    },
    onSuccess: (updatedData) => {
      reset()
      toast.success('আপনার অর্ডার সফল হয়েছে!');
      navigate(`/confirm/${updatedData.insertedId}`);
      setLoading(false)
    },
    onError: () => {
      toast.error('অর্ডার পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
      setLoading(false)
    },
  });

  const onSubmit = (data) => {
    setLoading(true)
    const orderInfo = {
      ...data,
      total,
      quantity,
      product_name:'হালুয়ায়ে মুহাব্বত',
      date:new Date(),
      status:'pending',
      page:1
    };
    mutateAsync(orderInfo);
  };



  const benefitsData = [
    {
      description: 'এক থেকে দুই মিনিট সময় পাই না তাদের সময় বাড়বে ।'
    },
    {
      description: 'বী-র্য গাঢ় এবং শক্তিশালী করে'
    },
    {
      description: 'শু-ক্রানুর পরিমান বৃদ্ধি করে'
    },
    {
      description: 'দ্রুত বীর্যপাত বন্ধ করে '
    },
    {
      description: 'যৌ-ন শক্তি বৃদ্ধি করে'
    },
    {
      description: 'আগা মোটা-গোড়া চিকন-রগ পুলা'
    },
    {
      description: 'লিঙ্গ বাঁকা'
    },
    {
      description: 'লিঙ্গ ছোট?'
    },
    {
      description: 'লিঙ্গ ষ্টং হয়না'
    },
  ];


  return (
    <div className="container mx-auto p-4">
      <h3 className="text-center text-5xl font-bold mb-6 text-primary">আমাদের হালুয়া। দেশের লক্ষ লক্ষ মানুষ উপকৃত হচ্ছে</h3>
      <div className="border-2 border-secondary rounded-lg p-4 mb-6">
        <h4 className="text-3xl font-semibold text-center mb-4 text-primary border-b-2 pb-2">খাওয়ার নিয়ম</h4>
        <p className=" text-black font-semibold text-center">
          প্রতিদিন রাতে, খাবার ৩০ মিনিট পরে, আধা-চামচ হালুয়া চেটে খাবেন অথবা পানিতে মিক্স করে খাবেন। অথবা দুধ থাকলে দুধের সাথে মিক্স করে খাবেন।
          
নিয়মিত ৭ দিন সেবনেই প্রাথমিক ফলাফল বুঝতে শুরু করবেন। এবং এক মাস সেবনে স্থায়ীভাবে সমাধান পাবেন
        </p>
      </div>
      <div className='flex justify-center my-2'>
  <a href="tel:01612594964">
    <h3 className='text-2xl font-bold bg-primary rounded-lg text-white p-4'>কল করুন 01612594964</h3>
  </a>
</div>

      <div className="flex justify-center mb-6">
        <img src={imgProduct} alt="Product" className="rounded-lg shadow-lg" />
      </div>

      <div className="flex justify-center mb-6">
        <div className="rounded-lg text-center border-2 p-4">
          <h5 className="text-3xl font-bold text-primary">মূল্য: ১২০০ টাকা</h5>
        </div>
      </div>
      <h3 className="text-3xl text-center font-bold  text-red-600 my-6">ডেলিভারি চার্জ ফ্রী 🚚</h3>
      <h4 className="text-center md:text-2xl text-xl font-extrabold mb-4 text-primary">অর্ডার করতে নিচের ফরমটি পূরণ করুন</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex justify-center md:flex-row flex-col items-center">
          <div className="w-full md:w-1/2 p-2">
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text text-secondary text-2xl">আপনার নাম লিখুন :</span>
              </label>
              <input
                {...register('name', { required: 'নাম দেয়া আবশ্যক' })}
                type="text"
                placeholder="আপনার নাম এখানে লিখুন"
                className={`input input-bordered w-full ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>

            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text text-secondary text-2xl">আপনার মোবাইল নাম্বার লিখুন :</span>
              </label>
              <input
                {...register('phone', { required: 'মোবাইল নাম্বার দেয়া আবশ্যক' })}
                type="tel"
                placeholder="আপনার মোবাইল নাম্বার এখানে লিখুন"
                className={`input input-bordered w-full ${errors.phone ? 'border-red-500' : ''}`}
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-secondary text-2xl">আপনার ঠিকানা লিখুন :</span>
              </label>
              <textarea
                {...register('address', { required: 'ঠিকানা দেয়া আবশ্যক' })}
                className={`textarea textarea-bordered h-24 w-full ${errors.address ? 'border-red-500' : ''}`}
                placeholder="জেলা, উপজেলা/ থানা, ডেলিভারি এরিয়া"
              ></textarea>
              {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
            </div>
            <div className="flex justify-center">
          <button disabled={loading} type="submit" className="p-6 rounded-lg w-full text-3xl bg-primary mt-4 text-white">{loading?<ScaleLoader color='white' />:"অর্ডার কনফার্ম করুন ১,২০০ /- টাকা"}</button>
        </div>
          </div>

          <div className="w-full md:w-1/2 p-2">
            <div className="p-6 bg-gray-100 text-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold my-3">আপনার অর্ডার <i className="fa-solid fa-badge-check fa-fw"></i></h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                   <img src={imgProduct} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">নাম : হালুয়ায়ে মুহাব্বত</h2>
                </div>
              </div>

              {/* <div className="mb-6">
                <h3 className="text-xl font-semibold">এক ফাইল ১২০০ টাকা</h3>
              </div> */}
              <div className="mb-6">
                <div className="flex items-center gap-4">
                <h3 className="text-xl font-semibold">এক ফাইল ১,২০০ টাকা</h3>
                  {/* <div>
                    <button
                      type="button"
                      className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                      onClick={() => {
                        const newQuantity = quantity + 1;
                        setQuantity(newQuantity);
                        setTotal(newQuantity * 1200);
                      }}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      disabled={quantity <= 1}
                      className="bg-red-500 text-white py-2 px-4 rounded"
                      onClick={() => {
                        const newQuantity = quantity - 1;
                        setQuantity(newQuantity);
                        setTotal(newQuantity * 1200);
                      }}
                    >
                      -
                    </button>
                  </div> */}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold">মোট মূল্য: {total} টাকা</h3>
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

    
      </form>
      <h2 className="text-3xl text-center my-4 font-bold mb-8 text-primary">❤️হালুয়ার উপকারিতা ❤️ <br /> ❤️যে সমস্ত কাজগুলো করবে ❤️</h2>
      <Benefit benefitsData={benefitsData} />
      <Review datas={datas} />
      <div className='space-y-2 font-extrabold border-2 border-primary rounded-lg m-2 p-4 text-center text-black  text-xl'>
    <p>
    সবকিছু নিশ্চিত থাকলে উপরের ফর্ম পূরণ করে অর্ডার করুন।
    </p>
    <p>এখন নিবনা পরে নিব, পরে জানাচ্ছি এরকম হলে ফর্ম পূরণ কইরেন না।</p>
    <p>
    দয়া করে সকল তথ্য পড়ুন, জানুন, তবু প্রশ্ন থাকলে কল করুন। ফোনে টাকা না থাকলে একটা মিসকল দিন, কল ব্যাক করা হবে। তবুও পরে জানাচ্ছি বলার জন্য কেউ ফর্ম পূরণ করবেন না।
    </p>
    <p>আপনার সুস্বাস্থ্য কামনা করছি।</p>
</div>

<Footer number={'01612594964'}/>
    </div>
  );
};

export default Details;
