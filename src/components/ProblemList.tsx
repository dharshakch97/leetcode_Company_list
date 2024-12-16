import React, { useEffect, useState } from "react";
// import { problems } from "../data/problems";
import ProblemCard from "./ProblemCard";
import { Problem } from "../types/Problem";
import { loadCompanyProblems } from "../util/csvParser";
import { ArrowLeft } from "lucide-react";

interface ProblemListProps {
    companyId: string,
    companyName: string,
    onBack: () => void
}
const ProblemList: React.FC<ProblemListProps> = ({ companyId, companyName, onBack }) => {
    const [problems, setProblems] = useState<Problem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProblems = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await loadCompanyProblems(companyId);
                setProblems(data)
            } catch (error) {
                setError(`Failed to load problems: ${companyName}. Try again later`)
            } finally {
                setLoading(false);
            }
        }
        loadProblems()
    }, [companyId])

    return (
        <div>
            <div className="mb-6 flex items-center">
                <button 
                    onClick={onBack}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Back to Companies
                </button>
            </div>

            <h2 className="flex justify-center items-center min-h-[200px]">
                {companyName} Problems
            </h2>

            {loading ? (
                <div className="flex justify-center items-center min-h-[200px]">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
            ): error ? (
                <div className="text-center text-red-600 p-4 bg-red-50 rounded-lg">
                {error}
            </div>
            ): (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {problems.map((problem) => {
                        return <ProblemCard key={problem.id} problem={problem} />
                    })}
                </div>
            )}
        </div>
    )
}

export default ProblemList;