"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { subscribeAction } from "./subscribe-form.action";
import { useActionState } from "react";

export default function SubscribeForm() {
  const [state, formAction, pending] = useActionState(subscribeAction, {
    error: undefined,
  });

  return (
    <div className="flex flex-col gap-4">
      <form
        action={formAction}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Input
          name="email"
          type="email"
          placeholder="Digite seu email"
          className="max-w-sm text-white"
        />
        <Button type="submit" disabled={pending}>
          {pending ? "Enviando..." : "Inscrever-se"}
        </Button>
      </form>
      {state.error && <p className="text-red-500">{state.error}</p>}
    </div>
  );
}
