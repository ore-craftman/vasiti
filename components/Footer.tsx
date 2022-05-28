import Image from 'next/image'
import Link from 'next/link'

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="mt-32 " style={{ backgroundColor: '#25201D' }}>
      <section className="container mx-auto mb-4 block justify-between px-5 text-white md:flex md:px-12">
        <div className="-mt-12 grow">
          <Image
            alt="footer vasiti"
            src="/footer.svg"
            width="450px"
            height="400px"
          />
        </div>

        <div className="w-full py-8 md:w-6/12 lg:pr-28">
          <h2 className="mb-1 text-2xl font-semibold md:text-5xl">
            Be a member of our community 🎉
          </h2>

          <p className="my-5">
            We’d make sure you’re always first to know what’s happening on
            Vasiti—thus, the world.
          </p>

          <div className="relative">
            <input
              type="text"
              placeholder="enter your email address"
              className="-mr-28 rounded py-1.5 pr-28 pl-3"
              style={{ backgroundColor: '#514D4A' }}
            />
            <button className="absolute left-48 top-0.5 rounded bg-white px-3 py-1 text-black">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto block justify-between py-12 px-5 text-white md:flex md:px-12 ">
        <div className="mx-2 mt-2 w-full md:mx-4 md:w-1/4">
          <h3 className="text-xl">Company</h3>
          <ul className="mb-2 text-sm">
            <li className="mt-3">
              <Link href="/">
                <a>About Us</a>
              </Link>
            </li>

            <li className="mt-3">
              <Link href="/">
                <a>Term of Use</a>
              </Link>
            </li>

            <li className="mt-3">
              <Link href="/">
                <a>Privacy Policy</a>
              </Link>
            </li>

            <li className="mt-3">
              <Link href="/">
                <a>Press & Media</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mx-2 mt-2 w-full md:mx-4 md:w-1/5">
          <h3 className="text-xl">Products</h3>
          <ul className="mb-2 text-sm">
            <li className="mt-3">
              <Link href="/">
                <a>Marketplace</a>
              </Link>
            </li>

            <li className="mt-3">
              <Link href="/">
                <a>Magazine</a>
              </Link>
            </li>

            <li className="mt-3">
              <Link href="/">
                <a>Seller</a>
              </Link>
            </li>

            <li className="mt-3">
              <Link href="/">
                <a>Wholesale</a>
              </Link>
            </li>

            <li className="mt-3">
              <Link href="/">
                <a>Services</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="m-2 w-full md:mx-4 md:w-1/5">
          <h3 className="text-xl">Careers</h3>
          <ul className="mb-2 text-sm">
            <li className="mt-3">
              <Link href="/">
                <a>Become a Campus Rep</a>
              </Link>
            </li>

            <li className="mt-3">
              <Link href="/">
                <a>Become a Vasiti Influencer</a>
              </Link>
            </li>

            <li className="mt-3">
              <Link href="/">
                <a>Become a Campus writer</a>
              </Link>
            </li>

            <li className="mt-3">
              <Link href="/">
                <a>Become an Affiliate</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="m-2 w-full md:mx-4 md:w-1/5">
          <h3 className="text-xl">Get in touch</h3>
          <ul className="mb-2 text-sm">
            <li className="mt-3">
              <Link href="/">
                <a>Contact us</a>
              </Link>
            </li>

            <li className="mt-3">
              <Link href="/">
                <a>Partner with us</a>
              </Link>
            </li>

            <li className="mt-3">
              <Link href="/">
                <a>Advertise with us</a>
              </Link>
            </li>

            <li className="mt-3">
              <Link href="/">
                <a>Help/FAQs</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="m-2 w-full grow md:mx-4 md:w-1/5">
          <h3 className="text-xl">Join our community</h3>
          <div className="my-4 flex justify-between pr-8">
            <div className="h-8 w-8 rounded-full bg-white pt-2">
              <FaFacebookF style={{ color: '#000' }} className="mx-auto" />
            </div>

            <div className="h-8 w-8 rounded-full bg-white pt-2">
              <FaInstagram style={{ color: '#000' }} className="mx-auto" />
            </div>

            <div className="h-8 w-8 rounded-full bg-white pt-2">
              <FaTwitter style={{ color: '#000' }} className="mx-auto" />
            </div>

            <div className="h-8 w-8 rounded-full bg-white pt-2">
              <FaLinkedinIn style={{ color: '#000' }} className="mx-auto" />
            </div>
          </div>

          <h3 className="text-xl font-light">Email Newsletter</h3>
        </div>
      </section>
    </footer>
  )
}
