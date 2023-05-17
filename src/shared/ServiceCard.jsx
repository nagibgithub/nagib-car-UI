
const ServiceCard = ({service}) => {

    const {description, facility, img, price, service_id, title, id} = service;

    return (
        <div className="border-4 px-10 py-5 rounded-3xl border-blue-800">
            <h1>{title}</h1>
            <h2>Description: {description}</h2>
            <h2>Price: ${price}</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default ServiceCard;