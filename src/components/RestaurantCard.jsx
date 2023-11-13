import offerIcon from "../assets/icons/offer.svg";
import starIcon from "../assets/icons/star.svg";
import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  totalRatingsString,
  avgRating,
  slaString,
  costForTwoString,
  aggregatedDiscountInfo,
}) => {
  return (
    <article className="card">
      <div className="card-header">
        <img
          className="card-img"
          src={`${IMG_CDN_URL}${cloudinaryImageId}`}
          alt=""
        />
      </div>

      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-tags">{cuisines?.join(", ")}</p>
        <div className="card-info">
          <div
            style={
              +avgRating >= 4.0
                ? { background: "##48c479" }
                : { background: "#db7c38" }
            }
            title={totalRatingsString}
            className="card-rating"
          >
            <img
              style={{ width: "14px", marginBottom: "1px" }}
              src={starIcon}
              alt=""
            />
            <span className="rate">{!isNaN(+avgRating) ? avgRating : "0"}</span>
          </div>
          <span>.</span>
          <div className="time">{slaString}</div>
          <span>.</span>
          <div className="card-price">{costForTwoString}</div>
        </div>
      </div>
      <div className="offer">
        <span>
          <img className="offer-icon" src={offerIcon} alt="" />
        </span>
        <span className="offer-text">
          {aggregatedDiscountInfo?.shortDescriptionList[0]?.meta
            ? aggregatedDiscountInfo?.shortDescriptionList[0]?.meta
            : "No Offer!"}
        </span>
      </div>
      <div className="card-footer">
        <a href="#">Quick View</a>
      </div>
    </article>
  );
};

export default RestaurantCard;
