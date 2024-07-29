import Banner from "../../component/Banner";
import Card from "../../component/Card";

const Home = () => {
    return (
        <div>
            <Banner/>
            <h2 className="text-6xl font-bold text-center">amader product</h2>

            <div className="grid container my-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                <Card/>
            </div>
            
        </div>
    );
};

export default Home;