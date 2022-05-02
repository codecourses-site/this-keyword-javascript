const person = {
  firstName: "John",
  lastName: "Helbert",
  showFullname: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

person.showFullname();
