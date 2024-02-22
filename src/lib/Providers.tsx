"use client";
import React from 'react';
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

type TProviderProps = {
  children:React.ReactNode,
  session: Session | null,
}

const Providers = ({ children, session }: TProviderProps) => {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
    </Provider>
  );
};

export default Providers;