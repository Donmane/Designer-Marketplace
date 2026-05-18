const Viewhire = () => {
  let hired = [];

  try {
    hired = JSON.parse(localStorage.getItem("hired")) || [];
  } catch {
    hired = [];
  }

  hired = hired.filter(Boolean);

  return (
    <div>
      <h1>My Hires</h1>

      {hired.length === 0 ? (
        <p>No hires yet</p>
      ) : (
        hired.map((d, index) => (
          <div key={index}>
            <h3>{d.name}</h3>
            <p>{d.role}</p>
            <p>{d.price}/hour</p>
            <p>{d.rating}/5</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Viewhire;