import { useParams } from "react-router-dom";



const DetailedUser = () => {
    const { id } = useParams();

    return (
        <div>
            Falta implementar {id}
        </div>
    );
};

export default DetailedUser;