module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('code', { 
       
        code: {
            type: DataTypes.STRING(6),
            primaryKey: true
        }

    },{ timestamps: false,
        tableName: 'code'
    });
 
}
