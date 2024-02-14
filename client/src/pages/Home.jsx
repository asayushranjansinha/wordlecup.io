import React, { useEffect } from "react";
import { useUserStore } from "../hooks/useUserStore";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  });
  return <div className="">Home</div>;
}

export default Home;
