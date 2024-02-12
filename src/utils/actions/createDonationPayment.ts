"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../authOptions";



export const createDonationPayment = async (id: string) => {
  const session = await getServerSession(authOptions);
  const payload = {
    payerId: session?._id,
    amount: 100,
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/donation/payment/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.token}`
    },
    body: JSON.stringify(payload),
    cache: "no-cache",
  });

  const paymentInfo = await res.json();
  return paymentInfo;
}