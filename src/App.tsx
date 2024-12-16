import { Code2 } from "lucide-react"
import ProblemList from "./components/ProblemList"
import { useEffect, useState } from "react"
// import { companies } from "./data/companies";
import SearchBar from "./components/SearchBar";
import CompanyGrid from "./components/CompanyGrid";
import { Company } from "./types/Company";
import { companyData } from "./data/companyData";

function App() {
	const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
	const [searchQuery, setSearchQuery] = useState('')
	const [company, setCompany] = useState<Company[]>(companyData);
	const [filteredCompanies, setfilteredCompanies] = useState<Company[]>(companyData);

	const selectedCompanyData = selectedCompany ? filteredCompanies.find(c => c.id === selectedCompany): null

	const handleCompanySelect = (companyId: string) => {
		setSelectedCompany(companyId)
	}
	const handleBack = () => {
		setSelectedCompany(null)
	}

	useEffect(() => {
		if (!searchQuery) {
			setfilteredCompanies(company || []);
		return;
		}
		const query = searchQuery.toLowerCase();
		const filtered = company.filter((comp) => {
			return comp.name.toLowerCase().includes(query)
		})
		setCompany(companyData)
		setfilteredCompanies(filtered)
	}, [searchQuery, company])

  	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-white shadow-sm">
				<div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
					<div className="flex items-center space-x-3">
						<Code2 className="h-8 w-8 text-blue-600" />
						<h1 className="text-2xl font-bold text-gray-900">
							LeetCode Problem List (Company wise)
						</h1>
					</div>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
				{selectedCompany && selectedCompanyData ? (
					<ProblemList 
						companyId={selectedCompanyData.id} 
						companyName={selectedCompanyData.name}
						onBack={handleBack}
					/>
				): (
					<>
						<div className="mb-8">
							<h2 className="text-xl font-semibold text-gray-800">
								Select a company
							</h2>
							<p className="mt-2 text-gray-600">
								Browse through {filteredCompanies.length} companies and their coding problems
							</p>
						</div>
						
						<SearchBar 
							value={searchQuery} 
							onChange={setSearchQuery} 
						/>

						<CompanyGrid 
							companies={filteredCompanies}  
							onCompanySelect={handleCompanySelect} 
						/>
					</>
				)}
			</main>
		</div>
	)
}

export default App
