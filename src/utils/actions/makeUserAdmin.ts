"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../authOptions";
import { revalidateTag } from "next/cache";


export const makeUserAdmin = async (id: string) => {
  const session = await getServerSession(authOptions);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/admin-user/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.token}`
    },
    body: JSON.stringify({}),
  });

  const userInfo = await res.json();

  if (userInfo.success) {
    revalidateTag('makeUserAdmin');
  }

  return userInfo;
}