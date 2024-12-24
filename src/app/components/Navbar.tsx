import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-emerald-800 p-4 rounded-lg shadow-md">
            <ul className="flex justify-center gap-10">
                <li className="hover:bg-green-500 px-4 py-2 rounded-md transition duration-300">
                    <Link href="/">Home</Link>
                </li>
                <li className="hover:bg-green-500 px-4 py-2 rounded-md transition duration-300">
                    <Link href="/about">About</Link>
                </li>
                <li className="hover:bg-green-500 px-4 py-2 rounded-md transition duration-300">
                    <Link href="/contact-us">Contact Us</Link>
                </li>
                <li className="hover:bg-green-500 px-4 py-2 rounded-md transition duration-300">
                    <Link href="/job">Job Info</Link>
                </li>
                <li className="hover:bg-green-500 px-4 py-2 rounded-md transition duration-300">
                    <Link href="/services">Services</Link>
                </li>
                <li className="hover:bg-green-500 px-4 py-2 rounded-md transition duration-300">
                    <Link href="/page1">Page1</Link>
                </li>
            </ul>
        </nav>
    );
}
