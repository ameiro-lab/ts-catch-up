import { Router, Request, Response } from 'express'; // Router（ルーティング機能）と、Request（リクエスト型）、Response（レスポンス型）をインポート

const router = Router(); // APIのルートを登録するオブジェクトを作成

// POSTメソッドで '/' （このルーターのルートパス）へのリクエストを処理
router.post('/', (req: Request, res: Response) => {

  // リクエストボディから値を取得する
  const { name, email, message } = req.body;

  // コンソールに表示
  console.log('お問い合わせ内容:', { name, email, message });

  // ステータスコード200（成功）とJSON形式でメッセージを返す
  res.status(200).json({ message: 'お問い合わせ内容を受け取りました。' });
});

export default router; 
// このrouterを外部ファイルからインポートできるようにエクスポート
