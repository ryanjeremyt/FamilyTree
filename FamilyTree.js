import { FamilyMember, FamilyTree } from "./Classes.js";
 
// Create the family tree
const familyTree = new FamilyTree();
 
// Step 1: Add family members
const john = familyTree.addFamilyMember("John Doe", "1980-01-01", { gender: "Male", occupation: "Engineer" });
const jane = familyTree.addFamilyMember("Jane Doe", "1982-03-15", { gender: "Female", occupation: "Teacher" });
 
// Step 2: Define relationships (John and Jane as parents of Alex and Emily)
const alex = familyTree.addFamilyMember("Alex Doe", "2005-02-20", { gender: "Male", occupation: "Student" });
const emily = familyTree.addFamilyMember("Emily Doe", "2007-05-18", { gender: "Female", occupation: "Student" });
 
john.addChild(alex);
john.addChild(emily);
jane.addChild(alex);
jane.addChild(emily);
 
// Step 3: Display descendants of John
familyTree.displayDescendants("John Doe");
 
// Updating Emily's occupation
emily.updateDetails({ occupation: "Therapist" });
console.log(`${emily.name}'s updated details:`, emily.details);
 