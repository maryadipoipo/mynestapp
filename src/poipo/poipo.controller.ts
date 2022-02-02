import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('poipo')
export class PoipoController {
    @Get()
    getPoipo(): string {
      return "hello poipo controller";
    }

    @Get(':id')
    getPoipoId(@Param('id') id: string) {
        return `the id is ${id}`
    }

    @Post()
    createPoipo(@Body() body) {
        return body
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `This is for updating ${id}`
    }
}
