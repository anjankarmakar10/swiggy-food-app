const ShimmerUICards = () => {
  return (
    <div className="shimmer-container">
      {Array(8)
        .fill("")
        .map((e, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  );
};

const ShimmerCard = () => {
  return (
    <article className="shimmercard">
      <hr className="shimmer-image" />
      <hr className="shimmertitle" />
      <hr className="shimmer-dis" />
      <div className="shimmer-info-container">
        <hr className="shimmer-info" />
        <hr className="shimmer-info" />
        <hr className="shimmer-info" />
      </div>
      <hr className="hrt" />
      <hr className="shimmer-offer" />
      <hr className="hrb" />
    </article>
  );
};

const ShimmerMenu = () => {
  return (
    <div>
      <div className="container shimmer-menu">
        <div></div>
      </div>
      <div className="container shimmer-menu-item">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export { ShimmerUICards, ShimmerMenu };
