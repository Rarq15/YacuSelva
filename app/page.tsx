"use client"

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Home() {
  const {isLoading, user, error} = useUser()

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user? (
      <div>
        <img src={user.picture ?? "ruta-usuario-sin-perfil"} alt={user.name ?? ""}/>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Link href={"/api/auth/logout"}>Log Out</Link>
      </div>
    ) : (
        <div>
          <h1>Página por defecto</h1>
          <Link href={"/api/auth/login"}>Log In</Link>
        </div>
    )
  );
}
