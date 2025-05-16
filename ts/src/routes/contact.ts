import { Router, Request, Response } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  console.log('お問い合わせ内容:', { name, email, message });

  res.status(200).json({ message: 'お問い合わせ内容を受け取りました。' });
});

export default router;
