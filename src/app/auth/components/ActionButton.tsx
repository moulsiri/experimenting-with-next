"use client";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useUser } from "@/Context/UserContext";
import IUserResponse from "@/interface/IUserResponse";

export default function ActionButton({ name }: any) {
  const { formData, setFormData, response, setResponse } = useUser();
  const router = useRouter();

  const onSignup = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    try {
      setResponse({ ...response, loading: true });
      let res;
      if (name === "Sign UP") {
        res = await axios.post("/api/auth/signup", formData);
      } else {
        res = await axios.post("/api/auth/login", formData);
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setResponse({ ...response, loading: false });
    }
  };
  return (
    <>
      {response.loading ? (
        <div className="w-5 h-5 rounded-full animate-spin border-x-green-700 border-y-green-600 border-x-4 border-y-2 border-solid mb-2"></div>
      ) : (
        <></>
      )}

      <button
        className=" w-[40%] px-6 py-2 rounded-sm cursor-pointer border-none text-white bg-green-700"
        type="submit"
        onClick={onSignup}
      >
        {name}
      </button>
    </>
  );
}
