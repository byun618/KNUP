module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('file', { 
        
        originalname : DataTypes.STRING(500),
        storedname : DataTypes.STRING(32)
        
    },{ timestamps: false,
        tableName: 'file'
    });
 
}
