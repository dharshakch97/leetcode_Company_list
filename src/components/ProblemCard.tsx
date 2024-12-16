import { ExternalLink } from "lucide-react";
import React from "react";
import { Problem } from "../types/Problem";
import DifficultyBadge from "./DifficultyBadge";

interface ProblemCardProps {
    problem: Problem
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem }) => {
    return(
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    {problem.id} {problem.title}
                </h3>
                <DifficultyBadge difficulty={problem.difficulty} />
            </div>
            <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Acceptance Rate:</span>
                    <span className="font-medium">{problem.acceptance}%</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Frequency Score:</span>
                    <span className="font-medium">{problem.frequency.toFixed(2)}</span>
                </div>
                
                <a
                    href={problem.leetcodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >Solve on LeetCode
                    <ExternalLink className="ml-1 h-4 w-4" />
                </a>
            </div>
        </div>
    )
}

export default ProblemCard;
