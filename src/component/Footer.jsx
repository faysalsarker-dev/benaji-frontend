/* eslint-disable react/prop-types */

const Footer = ({ number }) => {
    return (
        <div className="sticky bottom-0 w-full z-50 bg-base-200 text-white p-4">
            <a href={`tel:${number}`}>
                <div className="flex justify-center items-center p-4 rounded-lg bg-blue-500">
                    <span className="text-lg font-semibold">কল করুন: {number}</span>
                </div>
            </a>
        </div>
    );
};

export default Footer;
