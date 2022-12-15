const findTheOldest = function(people) {
    let peopleSort = people.sort((a, b) => {
        if ('yearOfDeath' in a) {
            aYOD = a.yearOfDeath;
        } else {
            aYOD = new Date().getFullYear();
        };
        if ('yearOfDeath' in b){
            bYOD = b.yearOfDeath
        } else {
            bYOD = new Date().getFullYear();
        }
        return ((aYOD-a.yearOfBirth) > (bYOD-b.yearOfBirth)) ? -1 : 1; }
        );
    return peopleSort[0];
};

// Do not edit below this line
module.exports = findTheOldest;
