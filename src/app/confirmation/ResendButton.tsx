"use client";

import { Button } from "@/components/button";
import { useEffect, useState } from "react";

export default function ResendButton({ token }: { token: string }) {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function resendEmail(token: string) {
    setIsLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_GO_API_URL}/emails/resend?token=${token}`,
      {
        method: "POST",
      }
    );

    if (!response.ok) {
      setIsLoading(false);
      throw new Error("Failed to resend email");
    }

    setIsSent(true);
    setIsLoading(false);
    return response.json();
  }

  useEffect(() => {
    if (isSent) {
      setTimeout(() => {
        setIsSent(false);
      }, 10000);
    }
  }, [isSent]);

  return (
    <Button
      variant={"destructive"}
      className="text-primary bg-primary hover:bg-primaryHover"
      onClick={(e) => {
        e.preventDefault();
        return resendEmail(token);
      }}
      disabled={isSent || isLoading}
    >
      {isSent ? "Reenviado!" : isLoading ? "Reenviando..." : "Reenviar"}
    </Button>
  );
}
