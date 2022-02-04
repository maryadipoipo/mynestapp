import { Controller, Get } from '@nestjs/common';

@Controller('poipo-mdl')
export class PoipoMdlController {
    @Get()
    getPoipoMdl(): String {
        return "hello from get poipoMdl"
    }
}
