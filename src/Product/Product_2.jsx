
import imgProduct from './../img/IMG-20240803-WA0011.jpg';
import imgProduct_2 from './../img/IMG-20240803-WA0001.jpg';






import { useForm } from 'react-hook-form';

import 'react-loading-skeleton/dist/skeleton.css';

import { useState,useRef  } from 'react';


import comment_1 from "../comment/G1cqmFkfKKEfgVYtAUfAjDjqDCQ.jpg";
import comment_2 from "../comment/G2eonSIvEpdLPCAvolzGuPLIheO.jpg";
import comment_3 from "../comment/G2HxcTULNKwddWdnadaGSHsEgGJ.jpg";
import comment_4 from "../comment/G8OfRRxXPlURcMqpBHTVaTZSDiS.jpg";
import comment_5 from "../comment/GMhlbOQdCSJlWodHkLuTseXzYqY.jpg";
import comment_6 from "../comment/GOzsnAWvQqenOXITVEniwVZPeBP.jpg";

import { useMutation } from "@tanstack/react-query";

import toast from 'react-hot-toast';
import useAxios from '../Hook/useAxios';
import Review from '../component/Review';
import Footer from '../component/Footer';
import { ScaleLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

function Product_2() {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
   
    const [loading,setLoading]= useState(false)
    const axiosCommon = useAxios();
    const navigate = useNavigate()
    const sectionRef = useRef(null);

    const datas = [
      { image: comment_1 },
      { image: comment_2 },
      { image: comment_3 },
      { image: comment_4 },
      { image: comment_5 },
      { image: comment_6 },
  
    ];
    const { mutateAsync } = useMutation({
      mutationFn: async (info) => {
        const { data: updatedData } = await axiosCommon.post(`/order`, info);
        return updatedData;
      },
      onSuccess: (updatedData) => {
        reset();
        toast.success('আপনার অর্ডার সফল হয়েছে!');
        navigate(`/confirm/${updatedData.insertedId}`);
        setLoading(false);
        
      },
      onError: () => {
        toast.error('অর্ডার পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
        setLoading(false);
      },
    });
    

  
    const onSubmit = (data) => {
      setLoading(true)
      const orderInfo = {
        ...data,
        total:1150,
        quantity:1,
        date:new Date(),
        product_name:'আলকুশি + জিনসেং',
        status:'pending',
        page:3
      };
      mutateAsync(orderInfo);
    };
  
    

    const scrollToSection = () => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };



  return (
   <div>
    <div className="bg-black text-center px-8 py-8">
<div>
            <h4 className="text-center my-4 text-3xl border-green-600 pb-2 border-b-2 bg-white text-green-600 font-bold rounded-lg p-2">যারা পারতেন না দুই মিনিট, এখন পারবেন ৩০ মিনিট!</h4>
            <p className="text-white font-bold">বি: দ্র:- আল্লাহর রহমতে আমাদের প্রোডাক্ট সেবনের মাধ্যমে প্রতি রাতে বিছানায় শুয়ে, কোলে বসিয়ে, দাঁড়িয়ে দাঁড়িয়ে, চেয়ার কিংবা সোফায় ফেলে অথবা আপনার ইচ্ছেমতো যে কোন &quot;স্টাইলে&quot; ৩ থেকে ৪ বার ৩০ মিনিট সহ-বাস করতে পারবেন ইনশাআল্লাহ ♥️👌</p>
            <p className="text-red-600 my-4 font-bold">
            বিশেষ ডিস্কাউন্টে প্যাকেজটি পাচ্ছেন মাত্র ১১৫০ টাকায়!
            </p>
            {/* <div>
                <img src={imgProduct} alt="" className='rounded-lg border-4 border-secondary' />
            </div> */}
            <div className='flex justify-center items-center my-4 '>
                <button onClick={scrollToSection} className='btn text-xl bg-red-600 text-white border-1 border-red-600'>অর্ডার করুন </button>
            </div>
</div>
    </div>

    <div className='p-2 my-4'>
        <h3 className='text-center text-2xl bg-red-600 text-white p-2 rounded-lg'>এই প্যাকেজে যা যা  থাকবেঃ</h3>
    </div>
    <div className='flex flex-col gap-4 px-2'>
        <div className='border-4 border-red-600 rounded-lg'>
            <img className='w-full' src={imgProduct} alt="" />
        </div>
        <div className='border-4 border-red-600 rounded-lg'>
            <img className='w-full' src={imgProduct_2} alt="" />
        </div>





    </div>
    <div className='flex justify-center items-center my-4 '>
                <button onClick={scrollToSection} className='btn text-xl bg-red-600 text-white border-1 border-red-600'>অর্ডার করুন </button>
            </div>






<div className='bg-red-700 p-6 text-white flex flex-col justify-center gap-2'>
    <h3 className='text-center bg-yellow-400 rounded-lg p-3 text-2xl font-extrabold text-black'>উপকারিতা জানতে চাই ? </h3>
    <p className='my-4 text-2xl font-bold text-center'>
    ** অতিরিক্ত হস্ত-মৈথুন এবং স্বপ্ন-দোষের কারণে শরীরে যে হরমোনের ঘাটতি থাকে তা পূরণ করে! **
    </p>
    <div className='font-bold flex flex-col justify-center gap-3'>
        <p>
        ? সহ-বাসে টাইম কম তাই সঙ্গিনির কাছে ল-জ্জিত ?
        </p>
        <p>
       ? সঙ্গী কে শা-রীরিক সুখ দিতে পারছেন না,  মেয়ে লোকের সাথে কথা বলার সময় লি-ঙ্গ দিয়ে পানি বের হচ্ছে ?
        </p>
    </div>

<div className='flex flex-col justify-center gap-3'>

    <div className='flex gap-2'><svg color='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
</svg>
<span>আজকের পর থেকে আপনার ব-উ ক্ষমা চাইতে বাধ্য হবে ইনশাআল্লাহ!</span></div>


    <div className='flex gap-2'><svg color='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
</svg>
<span>পু-রুষাঙ্গ দৃঢ় ও লোহার মতো শ-ক্ত করে!</span></div>


    <div className='flex gap-2'><svg color='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
</svg>
<span>রোমাঞ্চকর সহ-বাসের চাহিদা বাড়ায়!</span></div>
</div>

</div>


<div className='border-4 flex justify-center items-center border-red-600 rounded-lg my-4'>
    <div className='flex'>
        <img className='w-1/2' src={imgProduct} alt="Product 1" />
        <img className='w-1/2' src={imgProduct_2} alt="Product 2" />
    </div>
</div>

        <div className='flex justify-center my-2'>
  <a href="tel:01612594964">
    <h3 className='text-2xl font-extrabold text-center bg-primary rounded-lg text-white p-4'>কল করুন 01612594964</h3>
  </a>
</div>
<div className='px-2'>
            <h3 className='text-center bg-yellow-400 rounded-lg p-3 my-4 text-2xl font-extrabold text-black'>কাজ না হলে কি টাকা ফেরত দিবেন ?</h3>
            <p className='px-4'>
            আমাদের প্রোডাক্টের প্রতি শতভাগ আস্থা আছে আমাদের অবশ্যই ইনশাআল্লাহ কাজ হবে! আমাদের প্রোডাক্ট ব্যবহার করার পরে যদি বলতে পারেন ঈমানের সাথে কাজ হয় নাই তাহলে অবশ্যই টাকা ফেরত দিবো ইনশাআল্লাহ!
            </p>
      
            <h3 className='text-center bg-yellow-400 rounded-lg p-3 my-4 text-2xl font-extrabold text-black'>খাওয়া ও ব্যবহারের নিয়ম</h3>
            <h3 className='font-bold text-2xl'>জিনসেং পাউডার ও আলকুশি খাওয়ার নিয়মঃ</h3>
            <p className='px-4 mt-2'>
            ১ চামচ আলকুশি পাউডার এবং ১ চামচ জিনসিন পাউডার এক গ্লাস ঠান্ডা দুধ অথবা ঠান্ডা পানিতে মিশিয়ে প্রতিদিন রাতে ভরা পেটে খাবেন!
    
            </p>
</div>
<div className='flex justify-center items-center my-4 '>
                <button onClick={scrollToSection} className='btn font-bold text-xl bg-red-600 text-white border-1 border-red-600'>এখনই অর্ডার করুন</button>
            </div>

            <h3 className="text-3xl font-bold text-center text-red-600 my-6">ডেলিভারি চার্জ ফ্রী 🚚</h3>

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
                className={`input input-bordered input-primary w-full ${errors.name ? 'border-red-500' : ''}`}
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
                className={`input input-bordered input-primary w-full ${errors.phone ? 'border-red-500' : ''}`}
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-secondary text-2xl">আপনার ঠিকানা লিখুন :</span>
              </label>
              <textarea
                {...register('address', { required: 'ঠিকানা দেয়া আবশ্যক' })}
                className={`textarea textarea-bordered textarea-primary h-24 w-full ${errors.address ? 'border-red-500' : ''}`}
                placeholder="জেলা, উপজেলা/ থানা, ডেলিভারি এরিয়া"
              ></textarea>
              {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
            </div>
            <div className="flex justify-center px-2">
          <button disabled={loading} type="submit" className=" w-full text-3xl py-6 rounded-lg px-4 bg-primary mt-4 text-white">{loading?<ScaleLoader color='white' />:"অর্ডার কনফার্ম করুন ১১৫০/- টাকা"}</button>
        </div>
          </div>

          <div className="w-full md:w-1/2 p-2">
            <div className="p-6 bg-gray-100 text-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold my-3">আপনার অর্ডার </h3>
              <div className=" gap-4 mb-4">
                <div className=" flex gap-2 overflow-hidden">
                   <img src={imgProduct} alt="Avatar" className="w-16 h-16 rounded-full object-cover" />
                   <img src={imgProduct_2} alt="Avatar" className="w-16 h-16 rounded-full object-cover" />
                </div>
              
              </div>
              <div>
                  <h2 className="text-2xl font-bold my-2">নাম : আলকুশি + জিনসেং</h2>
                </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">এক ফাইল ১১৫০ টাকা</h3>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold">মোট মূল্য: ১১৫০ টাকা</h3>
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





<Review datas={datas} />
<div className='space-y-2 border-2 border-primary rounded-lg m-2 p-4 text-center text-red-500 text-xl font-bold'>
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
}

export default Product_2;