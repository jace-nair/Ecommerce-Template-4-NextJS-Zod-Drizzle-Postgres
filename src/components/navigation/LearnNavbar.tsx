import { auth } from "@/lib/auth";
//import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";


export default async function LearnNavbar() {
    const session = await auth();
	if(session) {
        return(
            <nav className="flex gap-4 container justify-end text-md">
                <Button variant="ghost">
                    <Link href="#">My Courses</Link>
                </Button>
                <Button variant="ghost">
                    <Link href="#">Purchase History</Link>
                </Button>
            </nav>
        );
    } else {
        return(
            //redirect("/sign-in")
            <p>please sign in to view your courses.</p>
        );
    } 
}