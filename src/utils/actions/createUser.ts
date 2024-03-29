"use server";

type TUserPayload = {
  name: string,
  email: string,
  password: string
}

export const createUser = async (data: TUserPayload ) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });

  const userInfo = await res.json();
  return userInfo;
}