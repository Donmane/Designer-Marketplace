import { useState } from "react";

function Upload_Services() {
  const [designer, setDesigner] = useState({
    name: "",
    role: "",
    skill: "",
    location: "",
    bio: "",
    price: "",
  });

  function hanSubmit(e) {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("uploadedDesigners")) || [];

    const newDesigner = {
      ...designer,
      id: Date.now(),
      skills: designer.skill.split(",").map((s) => s.trim()),
      price: parseFloat(designer.price),
      rating: 0,
    };

    const updated = [...existing, newDesigner];
    localStorage.setItem("uploadedDesigners", JSON.stringify(updated));
    console.log("Saved!", newDesigner);
    clearform();
  }

  function clearform() {
    setDesigner({
      name: "",
      role: "",
      skill: "",
      location: "",
      bio: "",
      price: "",
    });
  }

  return (
    <>
      <div>Upload Services</div>
      <div>
        <form onSubmit={hanSubmit}>
          <h3>
            Enter Name :{" "}
            <input
              type="text"
              value={designer.name}
              onChange={(e) => setDesigner({ ...designer, name: e.target.value })}
            />
          </h3>
          <h3>
            Role :{" "}
            <input
              type="text"
              value={designer.role}
              onChange={(e) => setDesigner({ ...designer, role: e.target.value })}
            />
          </h3>
          <h3>
            Skills (comma separated) :{" "}
            <input
              type="text"
              value={designer.skill}
              onChange={(e) => setDesigner({ ...designer, skill: e.target.value })}
            />
          </h3>
          <h3>
            Location:{" "}
            <input
              type="text"
              value={designer.location}
              onChange={(e) => setDesigner({ ...designer, location: e.target.value })}
            />
          </h3>
          <h3>
            Bio :{" "}
            <textarea
              value={designer.bio}
              onChange={(e) => setDesigner({ ...designer, bio: e.target.value })}
            ></textarea>
          </h3>
          <h3>
            Price : ${" "}
            <input
              type="number"
              value={designer.price}
              onChange={(e) => setDesigner({ ...designer, price: e.target.value })}
            />{" "}
            per hour
          </h3>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Upload_Services;