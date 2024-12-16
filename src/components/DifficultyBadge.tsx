import React from "react";

interface DifficultyBadgeProps {
    difficulty: 'Easy' | 'Medium' | 'Hard'
}

const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({ difficulty }) => {

    const colorClass = {
        Easy: 'bg-green-100 text-green-800',
        Medium: 'bg-yellow-100 text-yellow-800',
        Hard: 'bg-red-100 text-red-800'
    }[difficulty]

    return (
        <span className={`px-2 py-1 rounded-full text-sm font-medium ${colorClass}`}>
            {difficulty}
        </span>
    )
}

export default DifficultyBadge