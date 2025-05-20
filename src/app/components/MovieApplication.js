'use client'

export function MovieApplication({ children }) {
    return (
        <div className="flex flex-col font-sans h-screen">
            <div className="flex flex-col h-full max-w-screen-xl mx-auto m-2">
                <h1 className="font-mono text-3xl font-bold pl-4">Min filmlista</h1>
                {children}
            </div>
        </div>
    );
}