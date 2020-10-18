module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('file', { 
        
        originalname : DataTypes.STRING(500),
        storedname : DataTypes.STRING(32),
        userid: DataTypes.STRING(15),
        
    },{ timestamps: false,
        tableName: 'file'
    });
 
}
