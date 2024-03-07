"use client";

//   <Input
// type="checkbox"
// checked={showPassword}
// onChange={() => setShowPassword(!showPassword)}
// />



import React, {useContext,useState } from "react";

import { NumberContext } from "../provider";

import { Input,InputContainer } from "@/styles/form";
import { Header, HeaderImage,SpaceSpan } from "@/styles/sections";
import { H1, H2, P,Space} from "@/styles/typography";
import { Button } from "@/styles/buttons";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {

    const text = {
        header: "Welcome to Monzo Internet Banking",
        subheader1: "Sign in with your Internet Banking details.",
      
        button: "Open a Monzo account",
      };

  const { setUsername} = useContext(NumberContext);
  const [ user, setUser] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your own login logic here
    setUsername(user);
    router.push("/home");
  };
  return (
    <Header>
      <div>
        <div>
         <SpaceSpan> <H1 color="white">{text.header}</H1></SpaceSpan> 
          <P color="white">{text.subheader1}</P>
        </div>
        <Space></Space>
        <form onSubmit={handleLogin}>
          <Input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Username"
            required
          />
          <InputContainer>
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            {/* <button
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button> */}
          </InputContainer>
          <Button type="submit">Login</Button>
        </form>
      </div>

      <div>
        <HeaderImage src="/airplane.svg" alt="my image" />
      </div>
    </Header>
  );
};

export default Login;
