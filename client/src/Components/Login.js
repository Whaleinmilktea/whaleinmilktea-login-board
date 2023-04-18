import axios from 'axios';
import { useState, useEffect } from 'react';

import styled from 'styled-components';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IdInput = styled.input`
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
`;

const PsInput = styled.input`
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
`;

const LoginBtn = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const Login = () => {
  const [id, setId] = useState('');
  const [ps, setPs] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    // 서버로부터 세션 정보를 가져오는 요청을 수행하는 함수
    const checkLoginStatus = async () => {
      try {
        const res = await axios.get('/checkLoginStatus');
        const isLoggedIn = res.data.isLoggedIn;

        if (isLoggedIn) {
          // 로그인이 되어있는 경우에는 메인 페이지로 이동
          window.location.href = '/main';
        }
      } catch (err) {
        console.log(err);
      }
    };
    checkLoginStatus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/login', { id, ps });
      setMsg(res.data.msg);
      alert("로그인 성공")
    } catch (err) {
      setMsg(err.res.data.msg);
      alert("로그인 실패")
    }
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <IdInput
          type="text"
          placeholder="아이디를 입력하세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <PsInput
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={ps}
          onChange={(e) => setPs(e.target.value)}
        />
        <LoginBtn>로그인</LoginBtn>
        {msg && <p>{msg}</p>}
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
