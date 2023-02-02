import { IsNotEmpty, IsString } from "class-validator";

export class CreateSemesterDto {
	@IsNotEmpty() //El campo no este vacio
	@IsString() //El campo de texto
	readonly name: string;
}
