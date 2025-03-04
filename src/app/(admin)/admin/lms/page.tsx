import Link from "next/link";

export default function LMSPage() {
    return(
        <main className="flex gap-10 p-3">
            <Link href="/admin/lms/courses" className="hover:underline">
                <h1 className="text-lg">Courses</h1> 
            </Link>
            <Link href="#" className="hover:underline">
                <h1 className="text-lg">Products</h1> 
            </Link>  
            <Link href="#" className="hover:underline">
                <h1 className="text-lg">Sales</h1> 
            </Link>           
        </main>
    );
}