import React, { useEffect } from "react";
import { useUserStore } from "../hooks/useUserStore";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user } = useUserStore();
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    navigate("/chat");
  });
  return <div className="">Home</div>;
}

export default Home;
