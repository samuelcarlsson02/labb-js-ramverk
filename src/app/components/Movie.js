'use client'

export function Movie({ movie, onDelete }) {
    return (
        <div className="flex justify-between items-center w-full border-2 rounded-lg p-4">
            <h2 className="text-2xl font-bold">{movie.title}</h2>
            <div className="flex items-center justify-end">
                {Array(movie.grade).fill().map((_, i) => (
                    <img key={i} src="/images/star.png" alt="star" className="w-6 h-6" />
                ))}
                <button onClick={onDelete} className="cursor-pointer">
                    <img src="/images/delete.png" alt="delete" className="ml-4 w-10 h-10"></img>
                </button>
            </div>
        </div>
    );
}