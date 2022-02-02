import { Controller, Get, Param } from '@nestjs/common';

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
}
