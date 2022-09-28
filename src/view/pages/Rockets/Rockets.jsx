import Rocket from '../../components/Rocket/rocket';
import rocketsListMock from './RocketMock';

const RocketsPage = () => {
  const rockets = rocketsListMock.map((rocketMock) => ({
    id: rocketMock.id,
    rocketName: rocketMock.rocket_name,
    description: rocketMock.description,
    flickrImages: rocketMock.flickr_images,
  }));
  // eslint-disable-next-line no-console
  console.log(rockets);

  return (
    <div className="rockets-container">
      {rockets.map((rocket) => (
        <Rocket key={`rockets-item-${rocket.id}`} rocket={rocket} />
      ))}
    </div>
  );
};
/*
*/
export default RocketsPage;
