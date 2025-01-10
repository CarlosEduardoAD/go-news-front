"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export async function subscribeAction(
  _: unknown,
  formData: FormData
): Promise<{ error?: string }> {
  const { email } = schema.parse({
    email: formData.get("email"),
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GO_API_URL}/emails/check-in`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  );

  if (response.status !== 201) {
    const json = await response.json();

    return {
      error: json.message,
    };
  }

  const json = await response.json();

  redirect(`/confirmation?token=${json.token}`);
}
