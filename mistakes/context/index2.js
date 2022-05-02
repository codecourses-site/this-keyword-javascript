const person = {
  firstName: "John",
  lastName: "Helbert",
  showFullname: function () {
    console.log(`${firstName} ${lastName}`);
  },
};

const anotherPerson = {
  firstName: "James",
  lastName: "Helbert",
};

person.showFullname.apply(anotherPerson);
