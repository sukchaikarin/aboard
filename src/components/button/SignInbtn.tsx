import React from "react";

interface SignInButtonProps {
  onClick?: () => void;
}

const SignInbtn: React.FC<SignInButtonProps> = ({ onClick }) => {
  return (
    <button
      className=" bg-success text-white rounded-md h-[40px] font-medium bg-green-80 hover:bg-green-50 hover:text-black text-[20px] shadow border-none"
      onClick={onClick}
    >
      Sign In
    </button>
  );
};

export default SignInbtn;
