import React from "react";
import PropTypes from "prop-types";
const foodILike = [
  {
    id: 1,
    name: "김치",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
    rating: 4.5
  },
  {
    id: 2,
    name: "삼겹살",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffile.namu.moe%2Ffile%2F58fc0c4a323fef2482b19533e67def3f358763bd3bc18414d0ae202817a5fa1b&f=1&nofb=1",
    rating: 4
  },
  {
    id: 3,
    name: "라면",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.ezmember.co.kr%2Fcache%2Fboard%2F2014%2F04%2F09%2F731f857cf33b497024783159e3f0566e.jpg&f=1&nofb=1",
    rating: 5
  },
  {
    id: 4,
    name: "부대찌개",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeNUokgC9HnU%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 1
  }
];

const Food = ({ fav, picture, rating }) => {
  console.log(fav);
  return (
    <div>
      <h1>I like {fav}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={fav} />
    </div>
  );
};

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

const App = () => {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          fav={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
};

export default App;
