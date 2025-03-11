require('dotenv').config();

export const development = {
  url: process.env.POSTGRES_URL,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
};
export const production = {
  url: process.env.POSTGRES_URL,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
};
// import { Sequelize } from "sequelize";
// import dotenv from "dotenv";

// dotenv.config();

// export const sequelize = new Sequelize(process.env.POSTGRES_URL, {
//   dialect: "postgres",
//   logging: false,
//   dialectOptions: {
//     ssl:{
//       require: true,
//       rejectUnauthorized: false
//     }
//   }
// });

// export const connectDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("🟢 Conexión con PostgreSQL establecida.");
//   } catch (error) {
//     console.error("🔴 Error al conectar con PostgreSQL:", error);
//   }
// };


