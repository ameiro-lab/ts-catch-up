import express from 'express';
import cors from 'cors';
import contactRouter from './routes/contact';

const app = express();
const PORT = 3005;  // Expressのポート番号

// Expressにミドルウェアやルーターを登録する
app.use(cors());                        // CROS設定
app.use(express.json());                // リクエストのJSONボディを解析するミドルウェア

app.use('/api/contact', contactRouter); // /api/contact へのルーティング（お問い合わせ処理を実行する）

// サーバーを起動する
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
