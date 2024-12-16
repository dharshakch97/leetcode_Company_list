import { BUCKET_NAME, SUPABASE_URL } from "../environment";
import { Problem } from "../types/Problem";

export const parseCSV = (csv: string): Problem[] => {
    const lines = csv.trim().split('\n');

    return lines.slice(1).map(line => {
        const values = line.split(',');
        return {
            id: parseInt(values[0], 10),
            title: values[1],
            acceptance: parseFloat(values[2]),
            difficulty: values[3] as 'Easy' | 'Medium' | 'Hard',
            frequency: parseFloat(values[4]),
            leetcodeLink: values[5]
        };
    });
}

export const loadCompanyProblems = async (companyId: string): Promise<Problem[]> => {
    try {
        const response = await fetch(`${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${companyId}.csv`, {
            method: 'GET',
            headers: {
                'Content-type': "application/json"
            }
        });
        // Check if the response is successful
        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`);
        }
        const csvData = await response.text();
        return parseCSV(csvData);
    } catch (error) {
        console.error(`Error loading ${companyId} problems: `, error);
        return [];
    }
}