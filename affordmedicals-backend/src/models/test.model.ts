import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";


export class Test extends Model {}

Test.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  },
  {
    sequelize,
    modelName: "Test",
    timestamps: true,
    underscored: true,
    tableName: "Test",
  }
);
