import React from "react";
import { companies } from "../data/companies";

interface CompanyListProps {
    onCompanySelect: (companyId: string) => void
}

const CompanyList: React.FC<CompanyListProps> = ({ onCompanySelect }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {companies.map((company) => (
                <button
                    key={company.id}
                    onClick={() => onCompanySelect(company.id)}
                    className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-left"
                >
                    <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                    <p className="mt-2 text-sm text-gray-600">
                        {company.problemCount} Problems Available
                    </p>
                </button>
            ))}
        </div>
    )
}

export default CompanyList