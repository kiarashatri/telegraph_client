import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard(): JSX.Element {
  let n = useNavigate();
  useEffect(() => {
    // n('/login')
  });

  return <p>123</p>;
}
