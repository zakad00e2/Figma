"use client";

import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster"
      style={
        {
          "--normal-bg": "#ffffff",
          "--normal-text": "#1c1917",
          "--normal-border": "1px solid #e7e5e4",
          "--success-bg": "#ecfdf5",
          "--success-text": "#047857",
          "--success-border": "1px solid #a7f3d0",
          "--error-bg": "#fef2f2",
          "--error-text": "#b91c1c",
          "--error-border": "1px solid #fecaca",
          "--warning-bg": "#fffbeb",
          "--warning-text": "#b45309",
          "--warning-border": "1px solid #fde68a",
        } as React.CSSProperties
      }
      toastOptions={{
        style: {
          fontFamily: "'Tajawal', sans-serif",
          borderRadius: "1rem",
          boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.15)",
          padding: "1rem 1.25rem",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };