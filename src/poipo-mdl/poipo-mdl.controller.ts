import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePoipoMemberDto } from './dto/create-poipo-member.dto';
import { UpdatePoipoMemberDto } from './dto/update-poipo-member.dto';

@Controller('poipo-mdl')
export class PoipoMdlController {
    @Get()
    getPoipoMdl(): String {
        return "hello from get poipoMdl"
    }

    @Post()
    createPoipoMember(@Body() createMemberdto: CreatePoipoMemberDto) {
        return createMemberdto
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMemberdto: UpdatePoipoMemberDto) {
        return `This is for updating ${id}`
    }
}
