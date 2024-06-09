function skillsMember() {
    this.skills = ["JavaScript", "React", "NodeJS"];
    this.addSkill = function(skill) {
        this.skills.push(skill);
    };
}