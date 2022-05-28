import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Featured } from '../components/Featured'
import { Testimonials } from '../components/Testimonials'

const Home: NextPage = ({ data }: any) => {
  const { testimonials } = data

  return (
    <>
      <Head>
        <title>Testimonial | Experiency The Better Way To Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="container mx-auto mt-4 block items-center justify-between px-5 pt-4 md:flex md:px-12">
          <div className="w-full md:w-6/12">
            <h1 className="mb-4 text-2xl font-bold text-gray-900 lg:text-6xl">
              Amazing <br /> Experiences from Our Wonderful Customers
            </h1>
            <p className="text-slate-500">
              Here is what customers and vendors are saying about us, you can
              share your stories with us too.
            </p>
          </div>

          <div className="grow self-end">
            <Image
              alt="about vasiti"
              src="/hero.svg"
              width="600px"
              height="450px"
            />
          </div>
        </section>

        <Featured
          title="Tolu & Joy’s Experience"
          imgUrl="/tolu.png"
          type="customer"
          desc="I had the best experience shopping with vasiti. Usability of the
                website was great, very good customer service, an all round
                great experience. I would definately be coming back! I had the
                best experience shopping with vasiti. Usability of the website
                was great, very good customer service, an all round great
                experience. I would definately be coming back!"
        />

        {testimonials && (
          <Testimonials data={testimonials.slice(0, 6)} displayCity={true} />
        )}

        <Featured
          title="Josiah’s Experience"
          imgUrl="/josiah.png"
          type="vendor"
          reverse={true}
          desc="I had the best experience shopping with vasiti. Usability of the
                website was great, very good customer service, an all round
                great experience. I would definately be coming back! I had the
                best experience shopping with vasiti. Usability of the website
                was great, very good customer service, an all round great
                experience. I would definately be coming back!"
        />

        {testimonials && (
          <Testimonials data={testimonials.slice(6, 12)} displayCity={false} />
        )}
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/testimonials`
  )
  const data = await res.json()
  return { props: { data } }
}

export default Home
