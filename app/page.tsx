"use client"
import { Button } from "@/components/ui/button";
import { SignInButton ,UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";

export default function Home() {
  return (
    <>
      <main>
      <Unauthenticated>
        <Button>
        <SignInButton />

        </Button>
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        
      </Authenticated>
    </main>
    </>
  )
}
