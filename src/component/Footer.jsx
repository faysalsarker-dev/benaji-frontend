const Footer = () => {
    return (
        <footer className="footer footer-center bg-neutral rounded p-10 text-white">
            <div className="flex flex-col md:flex-row w-full justify-between  md:items-center mb-4">
                <div>
                    <div className="text-lg font-semibold mb-2">যোগাযোগ:</div>
                    <div>ফোন: 03492384823</div>
                    <div>ইমেইল: benaji@gmail.com</div>
                    <div>বাংলাদেশ</div>
                </div>
                <div className="max-w-md text-sm ">
                    <p>আমাদের প্রোডাক্ট একেবারে অরিজিনাল এবং নাম্বার ১ কোয়ালিটি। আমরা কথায় নয়, কাজে বিশ্বাসী।</p>
                </div>
            </div>
        
            <aside className="mt-4 border-t pt-2">
                <p className="font-bold">© {new Date().getFullYear()} - সর্বস্বত্ব সংরক্ষিত BENAJI দ্বারা</p>
            </aside>
        </footer>
    );
};

export default Footer;
