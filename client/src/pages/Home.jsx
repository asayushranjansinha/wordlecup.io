import React, { useEffect } from "react";
import { useUserStore } from "../hooks/use-user-store";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user } = useUserStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, []);
  console.log(user);
  return (
    <div className="flex flex-col h-screen">
      {/* Chat Header */}
      
      
    </div>
  );
}

export default Home;
