"strict mode";

const firstName = "John";
const lastName = "Helbert";

function showFullname() {
  console.log(`${this.firstName} ${this.lastName}`);
}

showFullname();
