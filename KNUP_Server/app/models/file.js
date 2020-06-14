module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('file', { 
        
        file_index: {
            type: DataTypes.INTEGER(5),
            primaryKey: true
        },
        vaild_number: DataTypes.STRING(45),
        file_name : DataTypes.STRING(200)
        

    },{ timestamps: false,
        tableName: 'file'
    });
 
}
