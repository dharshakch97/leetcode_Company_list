export interface Problem {
    id: number,
    title: string,
    acceptance: number,
    difficulty: 'Easy' | 'Medium' | 'Hard',
    frequency: number,
    leetcodeLink: string
}