"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../authOptions";


interface IDonationPayload {
  title: string,
  description: string,
  goal: number,
  raised: number,
  picture: string,
  category: string,
  startDate: string,
  endDate: string,
  location: string,
}

export const createDonation = async (data: IDonationPayload) => {
  const session = await getServerSession(authOptions);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/donation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.token}`
    },
    body: JSON.stringify({ ...data, organizer: session?._id }),
    cache: "no-cache",
  });

  const donationInfo = await res.json();
  return donationInfo;
}