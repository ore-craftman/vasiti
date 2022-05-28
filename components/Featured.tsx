import Image from 'next/image'
import Link from 'next/link'

interface PropSchema {
  reverse?: boolean
  title: string
  type: string
  desc: string
  imgUrl: string
}

export const Featured = ({
  reverse,
  title,
  type,
  desc,
  imgUrl,
}: PropSchema) => {
  return (
    <section
      className="-mt-1 pt-20"
      style={{ backgroundColor: type === 'vendor' ? '#FFF8F5' : '#222222' }}
    >
      <div
        className={`${
          reverse && 'flex-row-reverse'
        } container mx-auto mb-4 block justify-between px-5 ${
          type === 'vendor' ? 'text-black' : 'text-white'
        } md:flex md:px-12`}
      >
        <div className="grow">
          <Image
            alt="about vasiti"
            src={imgUrl}
            width="450px"
            height="400px"
            objectFit="contain"
          />
        </div>

        <div className="w-full py-8 md:w-6/12 lg:pr-20">
          <h2 className="mb-1 text-2xl font-semibold">{title}</h2>
          <span
            className={`rounded border px-2 py-1 text-xs ${
              type === 'vendor' && 'border-primaryOrange text-primaryOrange'
            }`}
          >
            {type.toUpperCase()}
          </span>

          <p className={`my-5 ${type === 'vendor' && 'text-gray-600'}`}>
            {desc}
          </p>

          <Link href="/share-story">
            <a className="border-b border-primaryOrange hover:text-gray-200">
              SHARE YOUR OWN STORY!
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}
