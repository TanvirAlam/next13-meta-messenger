// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { KeyboardReturnOutlined } from '@mui/icons-material'
import type { NextApiRequest, NextApiResponse } from 'next'
import redis from '../../redis'
import { Message } from '../../typings'

type Data = {
    message: Message,
}

type ErrorData = {
    body: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | ErrorData>
) {
    if (req.method !== 'POST') {
        res.status(405).json({ body: "Method not allowed" })
        return;
    }

    const { message } = req.body

    const meMessage = {
        ...message,
        created_at: Date.now()
    }

    await redis.hset('messages', message.id, JSON.stringify(meMessage))

    res.status(200).json({ message: meMessage })
}
