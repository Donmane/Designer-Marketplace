import designers from "../../data/designer.json";

function Designers() {
  const user = JSON.parse(localStorage.getItem("user"));
const handleHire = (designer) => {
  if (!designer) return;

  const existing = JSON.parse(localStorage.getItem("hired")) || [];

  const alreadyHired = existing.some((d) => d.id === designer.id);

  if (alreadyHired) return;

  const updated = [...existing, designer];

  localStorage.setItem("hired", JSON.stringify(updated));
};
  return (
    <section>
      <h1>Featured developers</h1>
      {designers.map((d) => (
        <div key={d.id}>
          <h1>{d.name}</h1>
          <h4>Role: {d.role}</h4>
          <h5>Skills: {d.skills.join(", ")}</h5>
          <p>Rating: {d.rating}/5</p>
          <p>Location: {d.location}</p>
          <p>Bio: {d.bio}</p>
          <p>Price: ${d.price.toFixed(2)}/hour</p>

          {user && user.role === "client" && (
            <button onClick={() => handleHire(d)}>
              Hire me
            </button>
          )}
        </div>
      ))}
    </section>
  );
}

export default Designers;