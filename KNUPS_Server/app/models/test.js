module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('test', { 

        title: DataTypes.STRING(100)
        
    },{ timestamps:false,
        tableName: 'test'
    });
}
