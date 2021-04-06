let city1 = {};
city1.name = "ГородN";
city1.population = 10000000;
let city2 = {
    name: "ГородM",
    population: 1e6
    };
function getname(){
    city1.getname = getname;
    city2.getname = getname;
    return this.name;
};
function exportstr(){
    city1.exportstr = exportstr;
    city1.exportstr = exportstr;
    return this.name + '\n' + 'population=' + this.npopulation + '\n';
};
console.log(city1);
console.log(city2);