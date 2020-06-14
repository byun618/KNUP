module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('user', { 
        
        user_id: {
            type: DataTypes.STRING(50),
            primaryKey: true
        },
        user_pwd: DataTypes.STRING(128), 
        user_name: DataTypes.STRING(45),
        salt: DataTypes.STRING(45)

    },{ timestamps: false,
        tableName: 'user'
    });
 
}
