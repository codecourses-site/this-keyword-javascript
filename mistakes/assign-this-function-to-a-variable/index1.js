const firstName = "John";
const lastName = "Helbert";

const person = {
  firstName: "James",
  lastName: "Helbert",
  showFullname: function () {
    console.log(`${firstName} ${lastName}`);
  },
};

const showFullname = person.showFullname;

showFullname();
