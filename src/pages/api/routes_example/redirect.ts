import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const name = 'name'
  const message = 'hi'
  try {
    await handleFormInputAsync({ name, message })
    res.redirect(307, '/')
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}

function handleFormInputAsync({ name, message }: any) {
  return new Promise((resolve, reject) => {
    if (!name || !message) {
      reject(new Error('Name and message are required'))
    } else {
      setTimeout(() => {
        resolve({ success: true })
      }, 1000)
    }
  })
}
