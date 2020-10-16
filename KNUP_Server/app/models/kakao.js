module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('kakao', { 
       
        id: {
            type: DataTypes.STRING(15),
            primaryKey: true,
        },
        nickname: { type: DataTypes.STRING(20) }

    },{ timestamps: false,
        tableName: 'kakao'
    });

 
}
