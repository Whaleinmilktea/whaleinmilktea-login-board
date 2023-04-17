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
  return (
    <LoginWrapper>
      <LoginForm>
        <IdInput type="text" placeholder="아이디를 입력하세요" />
        <PsInput type="password" placeholder="비밀번호를 입력하세요" />
        <LoginBtn>로그인</LoginBtn>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;