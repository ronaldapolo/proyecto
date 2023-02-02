import { IsNotEmpty, IsString } from "class-validator";

export class CreateShiftDto {
	@IsNotEmpty() //El campo no este vacio
	@IsString() //El campo de texto
	readonly name: string;

	@IsNotEmpty() //El campo no este vacio
	@IsString() //El campo de texto
	readonly checkTime: string;

	@IsNotEmpty() //El campo no este vacio
	@IsString() //El campo de texto
	readonly departureTime: string;
}
