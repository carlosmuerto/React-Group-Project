import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Rocket from './rocket';
import * as rocketRedux from '../../../features/rockets/RocketSlice';

const RocketsList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(rocketRedux.selectRockets);

  useEffect(() => {
    dispatch(rocketRedux.fetch());
  }, [dispatch]);
  return (
    <div className="rockets-list">
      {rockets.length > 0
        ? (rockets.map((rocket) => (<Rocket key={`rocket-item-${rocket.id}`} rocket={rocket} />)))
        : undefined}
    </div>
  );
};
//
export default RocketsList;
