import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import styled from "@emotion/styled";
import PassworD from "../components/Password";
import UserName from "../components/UserName";
import Email from "../components/Email";

const RootContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const RootChild = styled.div({
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
});

const ChildDiv = styled.div({
  display: "flex",
  justifyContent: "center",
  margin: "20px",
});

const Heading = styled.p({
  display: "flex",
  justifyContent: "center",
  fontSize: "30px",
  fontWeight: 700,
  alignItems: "center",
  color: "black",
});

const LoginWithOther = styled.p({
  display: "flex",
  fontWeight: 700,
  justifyContent: "center",
  fontSize: "16px",
  alignItems: "center",
  color: "black",
});
const StyledLink = styled.a({
  textDecoration: "none",
  color: "black",
});

const LoginWithGoogle = styled.p({
  display: "flex",
  fontWeight: 400,
  justifyContent: "center",
  fontSize: "12px",
  alignItems: "center",
  color: "black",
});

const InputContainer = styled.div({
  borderRadius: "20px",
  height: "50px",
  fontSize: "16px",
  fontWeight: 400,
  display: "flex",
  backgroundColor: "rgba(240, 237, 255, 0.8)",
  gap: 10,
  alignItems: "center",
  justifyContent: "space-between",
});

const Registraion = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <RootContainer>
      <RootChild>
        <Heading>Registration</Heading>
        <ChildDiv>
          <InputContainer>
            <div style={{ display: "flex", marginLeft: "20px" }}>
              <UserName size={20} />
            </div>
            <div>
              <Input
                placeholder="Username "
                height={35}
                value={userName}
                width={400}
                color="black"
                onChange={(value) => setUserName(value)}
              />
            </div>
          </InputContainer>
        </ChildDiv>
        <ChildDiv>
          <InputContainer>
            <div style={{ display: "flex", marginLeft: "20px" }}>
              <Email size={20} />
            </div>
            <div>
              <Input
                placeholder="Email "
                height={35}
                value={email}
                width={400}
                color="black"
                onChange={(value) => setEmail(value)}
              />
            </div>
          </InputContainer>
        </ChildDiv>
        <ChildDiv>
          <InputContainer>
            <div style={{ display: "flex", marginLeft: "20px" }}>
              <PassworD size={20} />
            </div>
            <div>
              <Input
                placeholder="Password"
                height={35}
                value={password}
                width={400}
                color="black"
                onChange={(value) => setPassword(value)}
              />
            </div>
          </InputContainer>
        </ChildDiv>
        <ChildDiv>
          <div>
            <Button
              width="124px"
              height="52px"
              BgColor="rgba(145, 129, 244, 1)"
              borderRadius="20px"
              name=" Registration Now"
              color="white"
              border="none"
              onClick={() => {
                console.log("object");
              }}
            />
          </div>
          <div style={{ paddingLeft: "15px" }}>
            <StyledLink href="/login">
              <Button
                width="124px"
                height="52px"
                BgColor="rgba(145, 129, 244, 1)"
                borderRadius="20px"
                name="Login Now"
                color="white"
                border="none"
                onClick={() => {
                  console.log("object");
                }}
              />
            </StyledLink>
          </div>
        </ChildDiv>
      </RootChild>
    </RootContainer>
  );
};
export default Registraion;
