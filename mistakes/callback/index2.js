const person = {
  firstName: "John",
  lastName: "Helbert",
  showFullname: function () {
    console.log(`${firstName} ${lastName}`);
  },
};

$("button").click(person.showFullname.bind(person));
