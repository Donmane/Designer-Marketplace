import serve from "../../data/service.json"

function Servicecard() {
  return (
    <div>
        {serve.map((item)=>(
            <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
            </div>
        ))}
    </div>
  )
}

export default Servicecard