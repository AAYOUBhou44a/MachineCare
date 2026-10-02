const machineRepo = require("../repositories/machine.repository");

const createMachine = async (machine)=>{
    return machineRepo.create(machine);
}

module.exports = {
    createMachine
}