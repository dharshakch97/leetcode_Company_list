import React from "react";
import { Company } from "../types/Company";
import { Building2 } from "lucide-react";

interface CompanyGridProps {
    companies: Company[];
    onCompanySelect: (companyId: string) => void
}

const CompanyGrid: React.FC<CompanyGridProps> = ({ companies, onCompanySelect }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {companies.map((company) => (
                <button
                    key={company.id}
                    onClick={() => onCompanySelect(company.id)}
                    className="group p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-[1.02] text-left"
                >
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {company.name}
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                {company.problemCount} Problems Available
                            </p>
                        </div>
                        <Building2 className="h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                </button>
            ))}
        </div>
    )
}

export default CompanyGrid
