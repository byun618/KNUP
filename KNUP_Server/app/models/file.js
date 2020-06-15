module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('file', { 
        
        filename : DataTypes.STRING(200)
        
    },{ timestamps: false,
        tableName: 'file'
    });
 
}
