import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSightings } from '../store/actions/sightingsAction';

function SightingsList() {

    const dispatch = useDispatch();

    const showSightings = useSelector(state => state.sightings);
    console.log(showSightings);

    useEffect(() => {
        dispatch(getSightings());
    }, [])


    return (
        <div>
            {showSightings?.sightings.map(sightings => {
                return (
                    <img key={sightings.id} src={sightings.picture} />
                )
            })}
        </div>
    );
}

export default SightingsList;