const firstName = "John";
const lastName = "Helbert";

const person = {
  firstName: "Elisa",
  lastName: "Helbert",
  showFullname: function () {
    console.log(`${firstName} ${lastName}`);
  },
};

const showFullname = person.showFullname.bind(person);

showFullname();
