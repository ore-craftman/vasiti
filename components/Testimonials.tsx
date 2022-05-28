import Image from 'next/image'

interface TestimonialSchema {
  firstname: string
  lastname: string
  avatar: string
  story: string
  city: string
  clientType: string
}

export const Testimonials = ({
  data,
  displayCity,
}: {
  data: TestimonialSchema[]
  displayCity: boolean
}) => {
  return (
    <section className="container my-16 mx-auto mb-4 block flex-wrap justify-between px-5 text-white md:flex md:px-12">
      {data.map((testimonial, i) => {
        return (
          <div
            key={i}
            className="m-2 w-full grow text-gray-800 md:mx-8 md:w-1/4"
          >
            <Image
              src={testimonial.avatar}
              width="160px"
              height="160px"
              className="rounded-full"
            />

            <h3 className="text-xl">
              {`${testimonial.firstname} ${testimonial.lastname}`}
            </h3>
            <div className="my-4 text-black">
              {displayCity && testimonial.city && (
                <span className="mr-2">{`In ${testimonial.city} `}</span>
              )}
              <span
                className={`${
                  testimonial.clientType === 'vendor'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-50 text-blue-800'
                } rounded px-2 py-1 text-xs font-medium`}
              >
                {testimonial.clientType.toUpperCase()}
              </span>
            </div>

            <div className="my-4">
              <p>{testimonial.story}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}
