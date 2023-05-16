import { useLoaderData } from "react-router-dom";
import ServiceCard from "../shared/ServiceCard";

const Home = () => {

    const services = useLoaderData()
    console.log(services);

    return (
        <div className="grid grid-cols-2 mx-auto">
                {
                    services.map(pd=> <ServiceCard key={pd._id} service={pd}></ServiceCard>)
                }
        </div>
    );

};

export default Home;