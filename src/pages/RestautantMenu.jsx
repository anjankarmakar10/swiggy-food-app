import { useParams } from "react-router-dom";
import { BASE_URL, IMG_CDN_URL } from "../constants";
import { ShimmerMenu } from "../components/ShimmerUI";
import offerIcon from "../assets/icons/offer.svg";
import starIcon from "../assets/icons/star.svg";
import useRestaurant from "../hooks/useRestaurant";
import MenuCart from "../components/MenuCart";
const RestautantMenu = () => {
  const { id } = useParams();
  const data = useRestaurant(id);

  console.log(data);

  return (
    <div>
      {!data ? (
        <ShimmerMenu />
      ) : (
        <div className="container restaurant-container">
          <div className="restaurant-manu pb-28">
            <section className="restaurant-menu-img">
              <img
                src={`${IMG_CDN_URL}${data?.resData?.cloudinaryImageId}`}
                alt=""
              />
            </section>
            <section className="restaurant-menu-info">
              <h2 className="restaurant-menu-name font-semibold text-2xl">
                {data?.resData?.name}
              </h2>
              <span
                style={
                  data?.resData?.veg
                    ? { backgroundColor: "#48C479" }
                    : { backgroundColor: "#fc8019" }
                }
                className="restaurant-menu-veg"
              >
                {data?.resData?.veg ? "VEGE" : "NON VEGE"}
              </span>
              <div className="rate-box">
                <div
                  title={data?.resData?.avgRating}
                  className="card-rating menu-rating"
                >
                  <img
                    style={{ width: "14px", marginBottom: "1px" }}
                    src={starIcon}
                    alt=""
                  />
                  <span className="rate">
                    {!isNaN(data?.resData?.avgRating) ? 4.5 : "0"}
                  </span>
                </div>
                <span className="menu-rate">
                  ({data?.resData?.totalRatingsString})
                </span>
              </div>
              <div className="restaurant-menu-box flex gap-2">
                {data?.resData?.cuisines.map((item) => (
                  <div className="restaurant-menu-cuisines">{item}</div>
                ))}
              </div>
              <div className="price-box">
                <span className="price-text">Price</span>
                <span className="price">
                  {data?.resData?.costForTwoMessage}
                </span>
              </div>
              <div className="price-box">
                <span className="price-text">Location</span>
                <span className="price">{data?.resData?.city}</span>
              </div>
            </section>
          </div>

          <div className="rasturant-list">
            {data?.menus[1]?.card?.card?.itemCards?.map((item) => (
              <MenuCart key={item.card.info?.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestautantMenu;

// category: "Classic Pizzas For Classic Maniacs";
// cloudinaryImageId: "a1mgkqed5lbqpglh487w";
// cropChoices: 2;
// description: "[17.7 CM 180 GM] A Delectable Combination Of Freshly Cooked Capsicum & Paneer With Our In House Sauce";
// displayOrder: 0;
// enabled: 1;
// id: 88579218;
// inStock: 1;
// isBestSeller: false;
// isGuiltFree: false;
// isHealthy: false;
// isPopular: 0;
// isVeg: 1;
// itemDiscount: 0;
// itemNudgeType: "";
// itemScore: 0;
// name: "Capsicum & Paneer Pizza";
// price: 13900;
// recommended: 1;
// restId: "514729";
