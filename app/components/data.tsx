import { Link } from "@remix-run/react";

export default function Data({ children, to }: any) {
  return (
    <Link
      className="border-b border-white px-2 py-1 font-semibold hover:border-b-4 link"
      to={to}
    >
      {children}
    </Link>
  );
}
