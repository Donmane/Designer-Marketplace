import choose from "../../data/whychooseus.json"
function Whychooseus() {
  return (
    <>
    <div>
      <h1>Why Choose Us</h1>
      {choose.map((item)=>(
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default Whychooseus