"use client";
import { ChangeEvent } from "react";
import { useUser } from "@/Context/UserContext";
export default function InputComponent({ name, type }: any) {
  const { formData, setFormData } = useUser();
  const getUserData = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <input
      type={type}
      className="h-full shadow-sm border-none rounded-sm w-[80%] px-4 outline-none"
      id={name}
      placeholder={`please enter your ${name} here`}
      onChange={getUserData}
      name={name}
    />
  );
}
