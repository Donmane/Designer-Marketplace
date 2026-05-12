import designers from "../../data/designer.json";
function FeaturedDesignerCard() {
  return (
    <>
      <section>
        <div>
          <h1>Featured developers</h1>
        </div>

        {designers.map((designer) => (
          <div key={designer.id}>
            {designer.isFeatured === true && (
              <div>
                <h1>{designer.name} </h1>
                <h4>Role: {designer.role}</h4>
                <h5>Skills: {designer.skills.join(", ")}</h5>
                <p>Rating: {designer.rating}/5</p>
                <p>Location: {designer.location}</p>
                <p>Bio: {designer.bio}</p>
                <p>Price: ${designer.price.toFixed(2)}/hour</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
export default FeaturedDesignerCard;
