"use client";
import React from 'react';
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SessionProvider } from 'next-auth/react';

const Providers = ({ children, session }: { children: React.ReactNode, session: any }) => {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
    </Provider>
  );
};

export default Providers;