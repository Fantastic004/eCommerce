import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "./store/Store";
import { JSX } from "react";

export default function PublicRoute({ children }: { children: JSX.Element }) {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/home" replace />;
  }

  return children;
}
