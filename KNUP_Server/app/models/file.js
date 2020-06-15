module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('file', { 
        
        filename : DataTypes.STRING(32)
        
    },{ timestamps: false,
        tableName: 'file'
    });
 
}
