'use strict';
module.exports = (sequelize, DataTypes) => {
  var SubjectStudent = sequelize.define('SubjectStudent', {
    IdSubjects: DataTypes.INTEGER,
    IdStudents: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  // SubjectStudent.associate = models => {
  //   SubjectStudent.belongsTo(models.Student)
  //   SubjectStudent.belongsTo(models.Subject)
  // }

  return SubjectStudent;
};