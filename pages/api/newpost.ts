import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../src/lib/prisma';
 
type ResponseData = {
  message?: string;
  error?: string;
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    const body = req.body;

    try{
        const post = await db.post.create({
            data:{
                bannerAlt: body.bannerAlt,
                bannerUrl: body.bannerUrl,
                bodyPost: body.bodyPost,
                description: body.description,
                language: body.language,
                title: body.title,
                keywords: body.title,
                url: body.url,
            }
        });

        res.status(200).json({ message: 'Post created!' })
    }catch(err){
        console.log(err);
        res.status(400).json({ error: 'Algo deu errado!' });
    }
}