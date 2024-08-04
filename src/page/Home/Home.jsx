import Banner from "../../component/Banner";
import Card from "../../component/Card";


const Home = () => {



    const items = [
        {
          img: "https://example.com/image1.jpg",
          name: "Item One",
          link: "/product-1"
        },
        {
          img: "https://example.com/image2.jpg",
          name: "Item Two",
          link: "/product-2"
        },
        {
          img: "https://example.com/image3.jpg",
          name: "Item Three",
          link: "/product-3"
        }
      ];
    return (
        <div>
            <Banner/>
            <h2 className="text-6xl font-bold text-center">amader product</h2>

            <div className="grid container my-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {items.map((pd,idx)=><Card key={idx} link={pd.link}/>)}
            </div>
            
        </div>
    );
};

export default Home;