import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFlowers } from '../store/actions/flowersAction';

function FlowersList() {

    const dispatch = useDispatch();
    // const showFlowers = useSelector();

    // const [flowers, setFlowers] = useState();

    const showFLowers = useSelector(state => state.flowers);
    console.log(showFLowers);

    useEffect(() => {
        dispatch(getFlowers());
    }, []);

    // const getFlowers = api.get("/flowers");

    // api.then(response => {
    //     setImages(response.data.results);
    // });

    // useEffect(() => {
    //     getFlowers.then(response => {
    //         setFlowers(response.data.flowers)

    //         console.log(response.data.flowers);
    //     })
    // }, []);

    return (
        <div>
            {showFLowers.flowers?.map((flowers) => {
                return (
                    <h1 key={flowers.id}>{flowers.name}</h1>
                )
            })}

            {/* <br />
            {showFLowers?.map((img) => (
                <>
                    <h1>{img.latin_name}</h1>
                    <img src={img.profile_picture} />
                </>
            ))} */}
        </div>
    );
}

export default FlowersList;