import logger from '@/libs/logger'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const log = req.body.log
    const level = req.body.level

    switch (level) {
      case 'log':
        logger.log(log)
        break
      case 'debug':
        logger.debug(log)
        break
      case 'warn':
        logger.warn(log)
        break
      case 'error':
        logger.error(log)
        break
      case 'info':
      default:
        logger.info(log)
        break
    }
    res.status(200).json({ message: 'Log sent successfully' })
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
