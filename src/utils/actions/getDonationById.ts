"use server";
import { TDonation } from "@/types/globalTypes";


export const getDonationById = async (donationId: string) => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/donation/${donationId}`, {
    cache: 'no-store',
    next: {
      tags: ['getDonationById'],
    }
  });

  const donation: TDonation = await res.json();

  return donation;
}