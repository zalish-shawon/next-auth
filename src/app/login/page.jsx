/* eslint-disable @next/next/no-img-element */
'use client';

import Swal from "sweetalert2";
import Link from "next/link";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "@/firebaseConfig";
import { useRouter } from "next/navigation";

const Login = () => {
    const auth = getAuth(app);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            Swal.fire('Welcome!', 'Successfully logged in!', 'success');
            router.push('/dashboard');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            });
        }
    };


    return (
        <div>
        
            <div className="bg-white flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-[200px] w-[200px]" src="data:image/png;base64,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" alt="Your Company" />
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>
                <div className="flex justify-center mt-5">
               
                </div>
                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleLogin} className="space-y-6" action="#" method="POST">
                        <div>
                            <label  className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                    </p>
                    <Link href={"/register"}><p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register your account</p></Link>

                </div>
            </div>
        </div>
    );
};

export default Login;