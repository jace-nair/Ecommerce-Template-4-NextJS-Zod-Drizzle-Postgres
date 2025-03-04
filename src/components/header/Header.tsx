import Link from "next/link";
import { Navbar } from "../navigation/Navbar";

export default function Header() {
    return(
        <header className="flex gap-5 p-5 justify-between items-center border">
            <Link href="/">MyLogo</Link>
            <Navbar/>
        </header>
    );
}