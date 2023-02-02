import { PartialType } from "@nestjs/mapped-types";
import { CreateLabStateDto } from "./create-lab_state.dto";

export class UpdateLabStateDto extends PartialType(
	CreateLabStateDto
) {}
