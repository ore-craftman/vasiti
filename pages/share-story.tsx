import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IoAttach } from 'react-icons/io5'

const ShareStory = () => {
  const router = useRouter()
  const [avatar, setAvatar] = useState(null)
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [story, setStory] = useState('')
  const [clientType, setClientType] = useState('')
  const [city, setCity] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [initLoader, setInitLoader] = useState(false)

  const formHandler = async (e: any) => {
    e.preventDefault()
    setInitLoader(true)

    const data = new FormData()
    //  @ts-ignore
    data.append('file', avatar)
    data.append('upload_preset', `${process.env.NEXT_PUBLIC_CLOUD_PRESET}`)
    data.append('cloud_name', `${process.env.NEXT_PUBLIC_CLOUD_NAME}`)
    const res = await fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY}`, {
      method: 'post',
      body: data,
    })

    const processedRes = await res.json()

    const testimonialData = {
      firstname,
      lastname,
      story,
      clientType,
      city,
      avatar: processedRes.url,
    }

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/testimonials`, {
      method: 'post',
      body: JSON.stringify({ testimonialData }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setShowModal(true)
      })
  }

  return (
    <div className="transition-all duration-150 ease-linear">
      {showModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-md">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                <div className="border-slate-200 p-5 p-10 text-center">
                  <Image src="/final.svg" width="120px" height="120px" />

                  <h3 className=" text-3xl font-semibold">
                    Thank you for sharing your story!
                  </h3>

                  <p className="my-4 text-lg leading-relaxed text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <Link href="/">
                    <a className="self-end rounded bg-primaryOrange px-8 py-2 text-white shadow">
                      Close
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      )}
      <div className="flex h-screen w-screen flex-col items-center justify-center border bg-gray-200">
        <section className="w-full rounded-lg border bg-white p-6 md:w-7/12 lg:w-4/12">
          <h3 className="my-6 text-center text-2xl">
            Share your amazing story!
          </h3>

          <form onSubmit={formHandler}>
            <div className="my-3">
              <p className="mb-1 text-xs">Upload your picture</p>
              <label htmlFor="avatar" className="flex rounded border p-2">
                <p className="text-xs">
                  {/* @ts-ignore */}
                  {avatar !== null ? avatar.name : 'Choose Image'}
                </p>
                <IoAttach className="ml-auto rotate-45 text-2xl text-gray-700" />
              </label>

              <input
                type="file"
                name="avatar"
                id="avatar"
                accept=".png, .jpg, .jpeg"
                className="hidden"
                required={true}
                onChange={(e: any) => {
                  setAvatar(e.target.files[0])
                }}
              />
            </div>

            <section className="my-3 flex justify-between">
              <div style={{ width: '48%' }}>
                <label className="mb-1 text-xs">First name</label>
                <input
                  type="text"
                  value={firstname}
                  required={true}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="w-full rounded border p-2"
                />
              </div>

              <div style={{ width: '48%' }}>
                <label className="mb-1 text-xs">Last name</label>
                <input
                  type="text"
                  value={lastname}
                  required={true}
                  onChange={(e) => setLastname(e.target.value)}
                  className="w-full rounded border p-2"
                />
              </div>
            </section>

            <section className="my-3">
              <label className="mb-1 block text-xs">Share your story</label>
              <textarea
                className="h-20 w-full rounded border p-2"
                style={{ resize: 'none' }}
                value={story}
                required={true}
                onChange={(e) => setStory(e.target.value)}
              ></textarea>
            </section>

            <section className="my-3 flex justify-between">
              <p className="text-xs">What did you interact with Vasiti as?</p>
              <div className="flex justify-between">
                <div>
                  <input
                    type="radio"
                    id="customer"
                    value="customer"
                    name="clientType"
                    required={true}
                    onChange={(e) => setClientType(e.target.value)}
                  />
                  <label htmlFor="customer" className="mr-2 text-xs">
                    Customer
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="vendor"
                    name="clientType"
                    value="vendor"
                    required={true}
                    onChange={(e) => setClientType(e.target.value)}
                  />
                  <label htmlFor="vendor" className="text-xs">
                    Vendor
                  </label>
                </div>
              </div>
            </section>

            <section className="my-3">
              <label className="mb-1 text-xs">
                City or Higher Institution (for Students)
              </label>
              <input
                type="text"
                className="w-full rounded border p-2"
                value={city}
                required={true}
                onChange={(e) => setCity(e.target.value)}
              />
            </section>

            <section className="mt-5 flex flex-col">
              <button
                type="submit"
                className="self-end rounded bg-primaryOrange px-4 py-2 text-white"
              >
                {initLoader ? 'loading...' : 'Share your story!'}
              </button>
            </section>
          </form>
        </section>
      </div>
    </div>
  )
}

export default ShareStory
