const firstName = "John";
const lastName = "Helbert";

const person = {
  firstName: "James",
  lastName: "Helbert",
  showFullname: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

person.showFullname();

const showFullname = person.showFullname;

showFullname();
