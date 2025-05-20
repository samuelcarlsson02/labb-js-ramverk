'use client'

export function OrderByAlphaButton({ onClick }) {
    return (
        <div>
            <button onClick={onClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Alfabetisk ordning
            </button>
        </div>
    );
}