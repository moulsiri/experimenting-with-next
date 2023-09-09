"use client";
import Link from "next/link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <nav className="w-full h-[10vh] p-8 flex justify-between fixed">
      <div id="logo">
        <h3>experimenting.</h3>
      </div>
      <div id="nLinks" className=" w-[25%] flex justify-between">
        <Link
          className="text-xs no-underline font-medium text-green-950 uppercase tracking-wide "
          href="/home"
        >
          Home
        </Link>
        <Link
          className="text-xs no-underline font-medium text-green-950 uppercase tracking-wide "
          href="/home"
        >
          Products
        </Link>
        <Link
          className="text-xs no-underline font-medium text-green-950 uppercase tracking-wide "
          href="/home"
        >
          Chat now
        </Link>
        <Link
          className="text-xs no-underline font-medium text-green-950 uppercase tracking-wide "
          href="/home"
        >
          about us
        </Link>
      </div>
      <Box>
        <Link href="/auth/signup" className="ml-4">
          <Button variant="contained">Login</Button>
        </Link>
      </Box>
    </nav>
  );
};
export default Navbar;
