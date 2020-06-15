module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('code', { 
       
        code: {
            type: DataTypes.INTEGER(6),
            primaryKey: true
        }

    },{ timestamps: false,
        tableName: 'code'
    });
 
}
