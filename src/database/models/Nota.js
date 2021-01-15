module.exports = (sequelize, DataTypes) => {
    let alias = 'Nota';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        title: {
            type: DataTypes.STRING,
            notNull: true
        },
        text: {
            type: DataTypes.STRING(500),
            notNull: true
        },
        status: {
            type: DataTypes.INTEGER,
            notNull: true
        }
    }
    let config = {
        tableName: 'notes',
        timestamps: false
    }

    const Nota = sequelize.define(alias, cols, config);
    return Nota;
}