/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';



const Benefit = ({benefitsData }) => {
  return (
    <section className="py-12 text-primary">
      <div className="container mx-auto text-center">
        
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
