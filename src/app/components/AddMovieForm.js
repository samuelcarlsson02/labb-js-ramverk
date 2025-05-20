'use client'
import { useState } from "react";

export function AddMovieForm({ onAddMovie }) {
    const [title, setTitle] = useState("");
    const [grade, setGrade] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length < 3) {
            alert("Titeln måste vara minst tre tecken lång.");
            return;
        }
        if (grade === 0) {
            alert("Vänligen välj ett betyg.");
            return;
        }
        const newMovie = {
            id: Date.now(),
            title: title,
            grade: Number(grade),
        };
        onAddMovie(newMovie);
        setTitle("");
        setGrade(0);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col items-start justify-center h-full m-4">
                <h2 className="text-2xl font-bold mb-2">Lägg till en film</h2>
                <div className="mb-6 w-full max-w-md">
                    <label htmlFor="title">Titel:</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" id="title" placeholder="Titel här... (minst tre tecken)" className="mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full shadow-md hover:shadow-lg"></input>
                    <label htmlFor="grade">Betyg:</label>
                    <select value={grade} onChange={e => setGrade(e.target.value)} id="grade" className="mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full shadow-md hover:shadow-lg">
                        <option value="0">Välj betyg</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button type="submit" className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 cursor-pointer font-bold text-white">Spara film</button>
                </div>
            </div>
        </form>
    );
}