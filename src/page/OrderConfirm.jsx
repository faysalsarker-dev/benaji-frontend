/* eslint-disable react/prop-types */

import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../Hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import { ScaleLoader } from "react-spinners";


const OrderConfirm = () => {
const axiosCommon = useAxios()
  const navigate=useNavigate()
  const {id}=useParams()

  const { data:order={}, isLoading } = useQuery({
    queryKey: ["Confirm"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/order-details/${id}`);
      return data;
    },
  });
  const { phone, address, date, total ,name,product_name} = order ;

  if(isLoading){
    return( <div className="h-screen flex justify-center items-center"><ScaleLoader color='green' /></div>)
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6 px-2">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-green-600 mb-4">ধন্যবাদ!</h1>
        <p className="text-xl text-center text-gray-700 mb-2">আমাদের ওয়েবসাইট থেকে অর্ডার করার জন্য আপনাকে ধন্যবাদ।</p>
        <p className="text-lg text-center text-gray-700 mb-6">আপনার অর্ডার সফলভাবে সম্পন্ন হয়েছে।</p>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">অর্ডার তথ্য</h2>
          <div className="space-y-2">
            <p className="text-gray-700"><span className="font-bold">নাম :</span> {name}</p>
            <p className="text-gray-700"><span className="font-bold">পণ্যের নাম :</span> {product_name}</p>
            <p className="text-gray-700"><span className="font-bold">ফোন নম্বর:</span> {phone}</p>
            <p className="text-gray-700"><span className="font-bold">ঠিকানা:</span> {address}</p>
            <p className="text-gray-700"><span className="font-bold">তারিখ:</span> {new Date(date).toLocaleDateString()}</p>
            <p className="text-gray-700"><span className="font-bold">মূল্য:</span> ৳{total}</p>
            
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <button onClick={()=>navigate(-1)} className="btn w-full btn-primary">হোম পেজে যান</button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
