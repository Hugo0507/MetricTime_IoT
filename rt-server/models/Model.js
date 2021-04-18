const Agent = require("./Agent");
const Metric = require("./Metric");
const User = require("./User");

class DatabaseModel {
  constructor(sequelize) {
    this.sequelize = sequelize;
    this.entities = {
      agentModel: "agent",
      metricModel: "metric",
      userModel: "user",
    };
  }
  defineAgent() {
    return this.sequelize.define(this.entities.agentModel, Agent);
  }
  defineMetric() {
    return this.sequelize.define(this.entities.metricModel, Metric);
  }
  defineUser() {
    return this.sequelize.define(this.entities.userModel, User);
  }
}

module.exports = DatabaseModel;
