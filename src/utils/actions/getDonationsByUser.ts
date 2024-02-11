"use server";
import { DonationInterface } from "@/types/globalTypes";


export const getDonationsByUser = async (userId: string) => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/donations/${userId}`);

  const donations: DonationInterface[] = await res.json();

  return donations;
}