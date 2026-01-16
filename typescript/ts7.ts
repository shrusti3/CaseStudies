// 1. Define the Enum for Staff Roles
enum Role {
    Doctor = "Doctor",
    Nurse = "Nurse",
    Admin = "Admin"
}

// 2. Create the Interface
interface Staff {
    id: number;
    name: string;
    role: Role; // We use the Enum here, not just a plain string!
}

// 3. Create an Array of Staff Members
const hospitalStaff: Staff[] = [
    { id: 101, name: "Dr. Ayesha", role: Role.Doctor },
    { id: 102, name: "Nurse John", role: Role.Nurse },
    { id: 103, name: "Admin Sarah", role: Role.Admin }
];

// 4. Function to Print Summary
function printStaffSummary(staffList: Staff[]): void {
    console.log("--- Hospital Staff Directory ---");
    
    // We loop through the array
    for (const member of staffList) {
        console.log(`[${member.role}] ${member.name} (ID: ${member.id})`);
    }
}

// Run the function
printStaffSummary(hospitalStaff);