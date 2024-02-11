"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../authOptions";

export const deleteDonation = async (id: string) => {
  const session = await getServerSession(authOptions);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/donation/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.token}`
    },
    body: JSON.stringify({}),
    cache: "no-cache",
  });

  const donationInfo = await res.json();
  return donationInfo;
}