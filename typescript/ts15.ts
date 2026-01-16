// 1.Union Type: InstructorOrAdmin
type Instructor = { id: string; coursesTaught: number };
type Admin = { id: string; accessLevel: "basic" | "super" };

// Union Type (|) allows the variable to be one OR the other
type InstructorOrAdmin = Instructor | Admin;


// 2. Readonly type for Assignments
type Assignment = { title: string; dueDate: Date; points: number; };

// Using the built-in Readonly utility type
type ReadonlyAssignment = Readonly<Assignment>;


// 3. Create a Mapped Type: StatsAsStrings
type LearnerStats = { quizzes: number; videos: number; assignments: number; };

// This maps over every key in LearnerStats and changes the value to string
type StatsAsStrings = {
  [K in keyof LearnerStats]: string;
};

// --- Test Cases ---
const stats: StatsAsStrings = {
  quizzes: "15 completed",
  videos: "10 watched",
  assignments: "5 submitted"
};