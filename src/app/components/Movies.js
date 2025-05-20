'use client'

import { Movie } from "./Movie";

export function Movies({ movies, onDeleteMovie }) {
    return (
        <div className="flex flex-col m-4">
            <h2 className="text-2xl font-bold mb-4">Inlagda filmer</h2>
            <div className="flex flex-col space-y-4 w-full">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <Movie key={movie.id} movie={movie} onDelete={() => onDeleteMovie(movie.id)} />
                    ))
                ) : (
                    <p className="text-xl text-gray-400">Inga filmer inlagda än</p>
                )}
            </div>
        </div>
    );
}