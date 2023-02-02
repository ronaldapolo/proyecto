import {
	IsString,
	IsNumber,
	MaxLength,
	MinLength,
	IsEmail,
	IsNotEmpty,
	IsPositive,
	IsAlpha,
	IsBoolean,
} from "class-validator";

export class CreateTeacherDto {
	@IsNotEmpty() 
	@IsPositive() 
	@MaxLength(10, {
		message: "El número de cédula no puede tener más de 10 caracteres.",
	}) 
	@MinLength(10, {
		message: "El número de cédula no puede tener menos de 10 caracteres.",
	}) 
	readonly identityCard: number;

	@IsNotEmpty() 
	@IsString()
	@IsAlpha('regex:/^[A-Z][a-z]+$/') 
	readonly names: string;

	@IsNotEmpty() 
	@IsString() 
	readonly lastNames: string;

	@IsNotEmpty() 
	@IsEmail() 
	readonly institutionalMail: string;

	@IsNotEmpty() 
	@IsPositive()
	@MaxLength(10, {
		message: "El número de telefono no puede tener más de 10 caracteres.",
	}) //Maximo de 10
	@MinLength(10, {
		message: "El número de telofono no puede tener menos de 10 caracteres.",
	}) //Minimo de 10
	readonly cellPhone: number;

	@IsNotEmpty()
	@IsBoolean()
	readonly state: boolean;

	@IsNotEmpty()
	@IsBoolean()
	readonly coordinator: boolean;

	// @IsNotEmpty()
	// @IsString()
	// readonly professionalGrade: string;
}
