import { Controller, Post, Body, Param, Delete, HttpCode, HttpStatus, Put, ParseIntPipe, Get } from '@nestjs/common';
import { ProfessionService } from './profession.service';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';

@Controller('profession')
export class ProfessionController {
  constructor(private professionService: ProfessionService) { }

  @Get("")
  @HttpCode(HttpStatus.OK)
  findAll(){
    const response = this.findAll();
    return {
      data: response,
      message: 'Lista de profesiones'
    }
  }

  @Post("")
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateProfessionDto) {
    const response = this.professionService.create(payload);
    return {
      data: response,
      message: 'Profesion creada'
    };
  }

  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProfessionDto
  ) {
    const response = this.professionService.update(
      id,
      payload
    );
    return {
      data: response,
      message: `La profesion ${id} se actualizo`
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.CREATED)
  remove(@Param('id', ParseIntPipe) id: number) {
    const response = this.professionService.remove(id);
    return {
      data: response,
      message: `La profesion ${id} se elimino correctamente`
    };
  }
}
