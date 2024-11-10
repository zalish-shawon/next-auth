'use client';
import app from '@/firebaseConfig';
import { getAuth, signOut as firebaseSignOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const auth = getAuth(app);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Only runs on the client
        }
    }, []);

    const handleSignOut = () => {
        firebaseSignOut(auth)
            .then(() => {
                router.push('/login'); // Redirect to login page after sign out
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    };

    return (
        <div>
            <h1 className="text-5xl text-center mt-10">Welcome to Dashboard panel</h1>
            <button onClick={handleSignOut} className="bg-red-500 px-6 py-2">
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
