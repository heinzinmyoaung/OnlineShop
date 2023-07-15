import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStarHalfStroke as halfStar } from "@fortawesome/free-solid-svg-icons";

const Stars = () => {
  const CreateStars = (productDetail) => {
    const percentage = productDetail.rating.rate;
    const maxRating = 5;
    const stringArray = percentage.toString().split("."); // 2.4 => ['2','3']
    const [first, second] = stringArray.map((el) => parseInt(el)); // change to Int [2,3]

    const stars = Array(maxRating)
      .fill(null)
      .map((_, index) => {
        console.log(index);
        const starIcon =
          index <= first
            ? second !== null && first === index
              ? !second || first === maxRating
                ? regularStar
                : halfStar
              : solidStar
            : regularStar;
        return (
          <FontAwesomeIcon
            icon={starIcon}
            key={index}
            style={{ color: "gold" }}
          />
        );
      });
    return stars;
  };

  return {
    CreateStars,
  };
};

export default Stars;
