import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between py-4 px-5 md:px-12">
        <section className="grow">
          <Image src="/logoSVG.svg" alt="vasiti" height="35px" width="120px" />
        </section>

        <nav className="hidden w-9/12 items-center justify-between font-roboto text-sm font-light text-slate-600 md:flex md:w-6/12 lg:w-5/12">
          <Link href="/">
            <a className="hover:text-black">ABOUT US</a>
          </Link>

          <Link href="/#">
            <a className="hover:text-black">STORIES</a>
          </Link>

          <Link href="/">
            <a className="hover:text-black">CONTACT US</a>
          </Link>

          <Link href="/">
            <a className="hover:text-black">LOGIN</a>
          </Link>

          <Link href="/">
            <a className="rounded bg-primaryOrange px-4 py-2 font-normal text-white">
              SIGN UP
            </a>
          </Link>
        </nav>
      </div>

      <div className="hidden border-t border-b shadow md:block">
        <section className="container mx-auto hidden items-center justify-between  px-10 py-3 text-sm text-slate-700  md:flex lg:px-40">
          <Link href="/">
            <a className="hover:text-black">MARKETPLACE</a>
          </Link>

          <Link href="/">
            <a className="hover:text-black">WHOLESALE CENTER</a>
          </Link>

          <Link href="/">
            <a className="hover:text-black">SELLER CENTER</a>
          </Link>

          <Link href="/">
            <a className="hover:text-black">INTERNSHIPS</a>
          </Link>

          <Link href="/">
            <a className="hover:text-black">EVENTS</a>
          </Link>
        </section>
      </div>
    </header>
  )
}
