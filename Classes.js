class FamilyMember {
    constructor(name, birthdate, details = {}) {
      this.name = name; // Person's name
      this.birthdate = new Date(birthdate); // Person's birthdate
      this.details = details; // Any other details (gender, occupation, etc.)
      this.children = []; // List of children
      this.parents = []; // List of parents
    }
 
    // Add a child to this person
    addChild(child) {
      if (child instanceof FamilyMember) {
        this.children.push(child);
        child.parents.push(this);
      }
    }
 
    // Update details of the family member
    updateDetails(newDetails) {
      this.details = { ...this.details, ...newDetails };
    }
}
 
class FamilyTree {
    constructor() {
      this.members = []; // List of all family members
    }
 
    // Add a new family member to the tree
    addFamilyMember(name, birthdate, details = {}) {
      const newMember = new FamilyMember(name, birthdate, details);
      this.members.push(newMember);
      return newMember; // Return the newly created member for further operations
    }
 
    // Find a family member by name
    findMemberByName(name) {
      return this.members.find(member => member.name === name);
    }
 
    // Display all descendants of a given person
    displayDescendants(personName) {
      const person = this.findMemberByName(personName);
      if (!person) {
        console.log(`${personName} not found.`);
        return;
      }
      this._printDescendants(person, 0);
    }
 
    // Helper function to recursively display descendants
    _printDescendants(person, level) {
      console.log(' '.repeat(level * 2) + `${person.name}`);
      person.children.forEach(child => this._printDescendants(child, level + 1));
    }
}

export { FamilyMember, FamilyTree };