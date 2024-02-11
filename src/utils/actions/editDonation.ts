"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../authOptions";

interface IDonationPayload {
  title: string,
  description: string,
  goal: number,
  picture: string,
  category: string,
  startDate: string,
  endDate: string,
  location: string,
}

export const editDonation = async (data: IDonationPayload, id: string) => {
  const session = await getServerSession(authOptions);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/donation/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.token}`
    },
    body: JSON.stringify({ data }),
    cache: "no-cache",
  });

  const donationInfo = await res.json();
  return donationInfo;
}