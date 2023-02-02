import "reflect-metadata";
import { DataSource } from "typeorm";

const config = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	//Solo descomentar la con su contraseña y no borrar
	password: "12345678", //Cris
	//password: "fernando654cris", //Cris
	//password: "Barbarita19@2021@", //Emily
	//password: "...", //Jenny
	//password: "...", //Jona
	database: "prueba_GELABY",
	synchronize: true,
	logging: true,
	entities: ["./src/**/*.entity.ts"],
	subscribers: [],
	migrationsTableName: "migration",
	migrations: ["src/db/migration/*.ts"],
});

export default config;
