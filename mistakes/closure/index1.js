const team = {
  name: "Great team",
  members: ["John", "Anna", "James", "Camila", "Lucy"],
  showMembers: function () {
    this.members.forEach(function (member) {
      console.log(`${member} - ${this.name}`);
    });
  },
};

team.showMembers();
