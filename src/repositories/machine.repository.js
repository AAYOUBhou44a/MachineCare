const Machine = require("../models/Machine");

const create = async (machine)=>{
    return await Machine.create(machine);
}

module.exports = {
    create
}