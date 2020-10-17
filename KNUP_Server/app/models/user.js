module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('user', { 
       
        userid: {
            type: DataTypes.STRING(15),
            primaryKey: true,
        },
        nickname: { type: DataTypes.STRING(20) }

    },{ timestamps: false,
        tableName: 'user'
    });

 
}
