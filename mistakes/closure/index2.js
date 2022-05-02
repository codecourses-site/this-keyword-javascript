const team = {
  name: "Great team",
  members: ["John", "Anna", "James", "Camila", "Lucy"],
  showMembers: function () {
    const that = this;
    this.members.forEach(function (member) {
      console.log(`${member} - ${that.name}`);
    });
  },
};

team.showMembers();
