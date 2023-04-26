import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const credentials = req.body
  console.log('Credentials', credentials)
  res.status(200).json({ name: credentials.username })
}
