import React, { useEffect } from "react";
import { FC, createContext, useContext, useState } from "react";
import { setCookie, getCookie } from "cookies-next";
import fetch from "cross-fetch";

export type Account = {
  isAuth: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
};

export type UseAccount = {
  account: Account;
  handleAccount: (account: Account) => void;
  login: (email: string, password: string) => void;
  getAccount: () => void;
};

type AccountProviderProps = {
  children: React.ReactNode;
};

export const AccountContext = createContext<UseAccount>({
  account: { isAuth: false },
  handleAccount: () => {},
  getAccount: () => {},
  login: (email, password) => {},
});

export const fetchApi = async (url: string, method: string, payload: any) => {
  const body =
    method === "POST"
      ? {
          body: JSON.stringify(payload),
        }
      : {};
  const data = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    ...body,
  });
  const res = await data.json();
  console.log(res);
  return res;
};
export const AccountProvider: FC<AccountProviderProps> = ({ children }) => {
  const [account, setAccount] = useState<Account>({ isAuth: false });

  const handleAccount = (account: Account) => {
    setAccount(account);
  };

  const getAccount = async () => {
    const account = await fetchApi("/api/getUser", "GET", null);
    setAccount(account);
  };

  const login = async (email: string, password: string) => {
    console.log(email, password);
    const account = await fetchApi("/api/login", "POST", { email, password });
    setAccount(account);
  };

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <AccountContext.Provider
      value={{ account, login, getAccount, handleAccount }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => useContext(AccountContext);
