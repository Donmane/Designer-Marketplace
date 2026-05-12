import testimonials from "../../data/testimonial.json"
function Testimonals() {
  return (
    <>
    <section>
      <h1>Testimonials</h1>
      {testimonials.map((testimonial)=>(
        <div key={testimonial.id}>
        <h1>{testimonial.name}</h1>
        <h5>Role: {testimonial.role}</h5>
        <p>{testimonial.message}</p>
        <p>Rating: {testimonial.rating}/5</p>
        </div>
      ))}
    </section>
    </>
  )
}

export default Testimonals