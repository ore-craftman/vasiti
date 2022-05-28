// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { testimonials } from '../../mockDatabase'

interface TestimonialSchema {
  firstname: string
  lastname: string
  avatar: string
  story: string
  city: string
  clientType: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ testimonials: TestimonialSchema[] }>
) {
  if (req.method === 'GET') {
    return res.status(200).json({ testimonials })
  } else if (req.method === 'POST') {
    const { testimonialData } = req.body
    testimonials.unshift(testimonialData)
    return res.status(200).json({ testimonials })
  }
}
