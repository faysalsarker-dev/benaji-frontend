import { useForm } from 'react-hook-form';

import 'react-loading-skeleton/dist/skeleton.css';
import imgProduct from './../img/IMG-20240728-WA0003.jpg';
import { useState ,useRef} from 'react';


import { useMutation } from "@tanstack/react-query";

import toast from 'react-hot-toast';
import useAxios from '../Hook/useAxios';
import Review from '../component/Review';
import Footer from '../component/Footer';
import { ScaleLoader } from 'react-spinners';

import product from "../img/product_2.jpg";

import comment_1 from "../comment/second_1.jpg";
import comment_2 from "../comment/second_2.jpg";
import comment_3 from "../comment/second_3.jpg";
import comment_4 from "../comment/second_4.jpg";
import comment_5 from "../comment/second_5.jpg";
import { useNavigate } from 'react-router-dom';

const Product_1 = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const [quantity, setQuantity] = useState(1);
    const [loading,setLoading]= useState(false)
    const [total, setTotal] = useState(quantity * 1250);
    const axiosCommon = useAxios();
    const sectionRef = useRef(null);
    const navigate = useNavigate()
    const datas = [
      { image: comment_1 },
      { image: comment_2 },
      { image: comment_3 },
      { image: comment_4 },
      { image: comment_5 },
  
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
        page:2
      };
      mutateAsync(orderInfo);
    };
  

    const scrollToSection = () => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div className="min-h-screen bg-green-100  md:p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
        <div className="bg-green-800 text-white text-center p-4 ">
          <h1 className="text-3xl border-2 rounded-lg border-secondary p-2">পুরুষ এর হারানো যৌ-ব-ন ফিরিয়ে আনবে এই সঞ্জীবনী হনুয়া দেশের লক্ষ লক্ষ মানুষ উপকৃত হচ্ছে</h1>
          <h3 className="my-3 text-xl text-extra border-b-2 pb-2">
          নিয়মিত ৭ দিন সেবনেই প্রাথমিক ফলাফল বুঝতে শুরু করবেন। এবং ১ মাস সেবনে স্থায়ীভাবে সমাধান পাবেন 
          </h3>
        </div>

        <div className='flex justify-center items-center my-4 '>
                <button onClick={scrollToSection} className='btn text-xl   border-1 border-green-800'>অর্ডার করুন </button>
            </div>

        <div className="p-4">
          <div className="text-center py-4 rounded-lg mb-4 border-2">
            <h2 className="text-3xl font-bold">৫০০ হালুয়া মোহাব্বত - ১২০০/- টাকা</h2>
            <p className="text-xl bg-primary p-4 text-white mt-2">৭ দিনের জন্য সাথে পাচ্ছেন, ৫০ মিঃলিঃ একটি ম্যাসেজ অয়েল একদম ফ্রী</p>
          </div>

          <div className='flex justify-center text-center my-2'>
  <a href="tel:01861499020">
    <h3 className='text-2xl font-extrabold bg-primary rounded-lg text-white p-4'>প্রয়োজনে কল করুন 01861499020</h3>
  </a>
</div>
          <div className="text-center mb-4">
            <img src={product} alt="Product" className="mx-auto rounded-lg" />
            <p className="text-xl font-bold mt-2">৫০০ গ্রাম হালুয়া মোহাব্বত এর সাথে ৫০ মিলি  মেসেজ অয়েল ফ্রি </p>
          </div>
        <h3 className="text-3xl text-center font-bold  text-red-600 my-6">ডেলিভারি চার্জ ফ্রী 🚚</h3>
          <div className="mb-4">
     

          <h4 id="target-section" ref={sectionRef}  className="text-center md:text-2xl text-2xl font-extrabold mb-4 text-primary">অর্ডার করতে নিচের ফরমটি পূরণ করুন</h4>
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
          <button disabled={loading} type="submit" className=" w-full py-6 text-3xl rounded-lg px-4 bg-primary mt-4 text-white">{loading?<ScaleLoader color='white' />:"অর্ডার কনফার্ম করুন ১২০০/- টাকা"}</button>
        </div>
          </div>

          <div className="w-full md:w-1/2 p-2">
            <div className="p-6 bg-gray-100 text-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold my-3">আপনার অর্ডার</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                   <img src={imgProduct} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">নাম :হালুয়ায়ে মুহাব্বত</h2>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold">এক ফাইল ১২০০/- টাকা</h3>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold">মোট মূল্য: ১২০০/- টাকা</h3>
              </div>

              <div className="mb-6">
                {/* <div className="flex items-center gap-4">
                  <h3 className="text-xl font-semibold">কতো ফাইল নিবেন: {quantity}</h3>
                  <div>
                    <button
                      type="button"
                      className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                      onClick={() => {
                        const newQuantity = quantity + 1;
                        setQuantity(newQuantity);
                        setTotal(newQuantity * 1250);
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
                        setTotal(newQuantity * 1250);
                      }}
                    >
                      -
                    </button>
                  </div>
                </div> */}
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


          </div>
         






<div className="p-4 rounded-lg mb-4 border-2 shadow-lg">
  <h2 className="text-2xl font-bold text-center">কেন আপনি হালুয়া মোহাব্বত খাবেন?</h2>
  <div className="flex flex-col">
    <p className="flex border-b-2 border-primary p-2 items-center gap-2">
      <svg color="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
      </svg>
      <span>স্ত্রীর কাছে এক মিনিটও সময় দিতে পারেন না এই হালুয়া নিয়ম তান্ত্রিক সেবন করার ফলে স্ত্রীর কাছে দীর্ঘস্থায়ী সময় পাবেন ইনশাআল্লাহ।</span>
    </p>
    <p className="flex border-b-2 border-primary p-2 items-center gap-2">
      <svg color="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
      </svg>
      <span>দীর্ঘ দিন হস্তমৈথুনের করার কারনে যে টিস্যু গুলো ক্ষতিগ্রস্ত হয়, তা পুনরায় সঠিক অবস্থানে ফিরিয়ে আনে।</span>
    </p>
    <p className="flex border-b-2 border-primary p-2 items-center gap-2">
      <svg color="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
      </svg>
      <span>আগা মোটা গোড়া চিকন দূর করবে এক মাসে</span>
    </p>
    <p className="flex border-b-2 border-primary p-2 items-center gap-2">
      <svg color="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
      </svg>
      <span>লিঙ্গ ছোট লিঙ্গ স্টং হয় না</span>
    </p>
    <p className="flex border-b-2 border-primary p-2 items-center gap-2">
      <svg color="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
      </svg>
      <span>যৌ-ন শক্তি বৃদ্ধি করে</span>
    </p>
    <p className="flex border-b-2 border-primary p-2 items-center gap-2">
      <svg color="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
      </svg>
      <span>শারীরিক দুর্বলতা দূর করে</span>
    </p>
    <p className="flex border-b-2 border-primary p-2 items-center gap-2">
      <svg color="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
      </svg>
      <span>শু-ক্রানুর পরিমান বৃদ্ধি করে</span>
    </p>
    <p className="flex border-b-2 border-primary p-2 items-center gap-2">
      <svg color="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
      </svg>
      <span>নিস্তেজ অঙ্গকে সবল করে তোলে</span>
    </p>
    <p className="flex border-b-2 border-primary p-2 items-center gap-2">
      <svg color="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
      </svg>
      <span>এটি পুরুষের হারানো যৌ-বন শক্তি ফিরিয়ে আনে</span>
    </p>
  </div>
</div>






<div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-bold text-center mb-2">মেসেজ অয়েল ব্যবহারের নিয়ম</h2>
            <p>আর ম্যাসেজ অয়েল টি প্রতিদিন রাতে , আপনার বিশেষ অঙ্গে , নিচ থেকে ওপরে এভাবে ২/৩ মিনিট মালিশ করবেন।</p>
          </div>
     


      
          <Review datas={datas} />
          <div className='space-y-2 font-extrabold border-2 border-primary rounded-lg m-2 p-4 text-center text-red-500 text-xl'>
    <p>
    সবকিছু নিশ্চিত থাকলে উপরের ফর্ম পূরণ করে অর্ডার করুন।
    </p>
    <p>এখন নিবনা পরে নিব, পরে জানাচ্ছি এরকম হলে ফর্ম পূরণ কইরেন না।</p>
    <p>
    দয়া করে সকল তথ্য পড়ুন, জানুন, তবু প্রশ্ন থাকলে কল করুন। ফোনে টাকা না থাকলে একটা মিসকল দিন, কল ব্যাক করা হবে। তবুও পরে জানাচ্ছি বলার জন্য কেউ ফর্ম পূরণ করবেন না।
    </p>
    <p>আপনার সুস্বাস্থ্য কামনা করছি।</p>
</div>
      </div>
    
    </div>
    <Footer number={'01861499020'}/>
    </div>
     );
};

export default Product_1;
