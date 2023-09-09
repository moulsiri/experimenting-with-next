"use client";

import IUserContext from "@/interface/IUserContext";
import IForm from "@/interface/IForm";
import { createContext, useContext, useState } from "react";
import IUserResponse from "@/interface/IUserResponse";

const initialData: IUserContext = {
  response: {
    isAuthenticated: false,
    loading: false,
    error: null,
    user: null,
  },
  setResponse: () => {},
  formData: {
    username: "",
    email: "",
    password: "",
  },
  setFormData: () => {},
};

const UserContext = createContext<IUserContext>(initialData);
export function useUser() {
  return useContext(UserContext);
}

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [response, setResponse] = useState<IUserResponse>({
    isAuthenticated: false,
    loading: false,
    error: null,
    user: null,
  });
  const [formData, setFormData] = useState<IForm>({
    username: "",
    email: "",
    password: "",
  });
  return (
    <UserContext.Provider
      value={{ formData, setFormData, response, setResponse }}
    >
      {children}
    </UserContext.Provider>
  );
}
