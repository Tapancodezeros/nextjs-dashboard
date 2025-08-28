'use client';
import React from 'react';
import { useEffect } from 'react';
export default function Error({ error, reset, }) {
    useEffect(() => {

        console.error(error);
    }, [error]);
    return (React.createElement("main", { className: "flex h-full flex-col items-center justify-center" },
        React.createElement("h2", { className: "text-center" }, "Something went wrong!"),
        React.createElement("button", { className: "mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400", onClick: 

            () => reset() }, "Try again")));
}
