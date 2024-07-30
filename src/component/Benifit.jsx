
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const benefitsData = [
  {
    description: 'আমাদের হারবাল পণ্য শুধুমাত্র প্রাকৃতিক উপাদান থেকে তৈরি।'
  },
  {
    description: 'আমাদের পণ্য পার্শ্বপ্রতিক্রিয়া মুক্ত এবং নিরাপদ।'
  },
  {
    description: 'আমাদের হারবাল পণ্যগুলি আপনার সামগ্রিক স্বাস্থ্য উন্নত করতে সাহায্য করে।'
  }
];

const Benefit = () => {
  return (
    <section className="py-12 text-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">পণ্যের সুবিধা</h2>
        <div className="grid md:grid-cols-3 gap-2">
          {benefitsData.map((benefit, idx) => (
            <div key={idx} className=" p-6 border-primary border-2 rounded-lg  shadow-xl flex items-center space-x-4">
              <FontAwesomeIcon icon={faCircleCheck} size="2x" className="text-green-600" />
              <div className="text-left">
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;
