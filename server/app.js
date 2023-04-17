const express = require('express');
const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  const { id, password } = req.body;

  // 인증 로직 수행
  if (id === 'user' && password === '1234') {
    // 인증이 성공한 경우
    const sessionID = Math.random().toString(36).slice(2); // 무작위 세션 ID 생성

    res.cookie('sessionID', sessionID); // 클라이언트에게 쿠키를 전송
    res.json({ message: '인증이 성공하였습니다.' });
  } else {
    // 인증이 실패한 경우
    res.status(401).json({ message: '인증에 실패하였습니다.' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
