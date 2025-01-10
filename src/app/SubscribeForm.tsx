"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { subscribeAction } from "./subscribe-form.action";
import { useActionState } from "react";

export default function SubscribeForm() {
  const [, formAction, pending] = useActionState(subscribeAction, null);

  return (
    <form action={formAction} className="flex flex-col sm:flex-row gap-4 justify-center">
      <Input name="email" type="email" placeholder="Digite seu email" className="max-w-sm text-white" />
      <Button type="submit" disabled={pending}>{pending ? "Enviando..." : "Inscrever-se"}</Button>
    </form>
  );
}
