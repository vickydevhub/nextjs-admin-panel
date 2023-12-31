import { useSession, signIn, signOut } from "next-auth/react"

export default function Navbar() {
    const { data: session } = useSession(); 
    return (
        <nav class="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
            <div class="container mx-auto flex flex-wrap items-center">
                <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                    <a class="text-white no-underline hover:text-white hover:no-underline" href="/">
                        <span class="text-2xl pl-2"><i class="em em-grinning"></i> Admin Panel</span>
                    </a>
                </div>
                <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                    <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                        <li class="mr-3">
                            <a class="inline-block py-2 px-4 text-white no-underline" href="/">Home</a>
                        </li>

                        {session ? (
                            <li class="mr-3">
                                <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#" onClick={() => signOut()}>Logout</a>
                            </li>
                        ) : (
                            <>
                                    {/* <li class="mr-3">
                                    <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="/register">Register</a>
                        </li> */}
                                <li class="mr-3">
                                    <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="/login">Login</a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}