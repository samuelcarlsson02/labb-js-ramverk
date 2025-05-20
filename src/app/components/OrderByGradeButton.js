'use client'

export function OrderByGradeButton({ onClick }) {
    return (
        <div>
            <button onClick={onClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Betygsordning
            </button>
        </div>
    );
}