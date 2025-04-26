import { LoginForm } from "@/components/auth/LoginForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login | Insurance Dashboard",
};

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your insurance dashboard
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
