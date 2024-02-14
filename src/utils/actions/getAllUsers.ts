"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../authOptions";


export const getAllUsers = async () => {
    const session = await getServerSession(authOptions);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session?.token}`
        },
        cache: 'no-store',
        next: {
            tags: ['makeUserAdmin'],
        }
    });

    const userInfo = await res.json();

    return userInfo;
}