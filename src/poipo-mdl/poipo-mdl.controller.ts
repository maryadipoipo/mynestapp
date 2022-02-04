import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePoipoMemberDto } from './dto/create-poipo-member.dto';
import { UpdatePoipoMemberDto } from './dto/update-poipo-member.dto';
import { PoipoMdlService } from './poipo-mdl.service';

@Controller('poipo-mdl')
export class PoipoMdlController {
    constructor(private readonly poipoService: PoipoMdlService) {}

    @Get()
    getPoipoMdlAll() {
        return this.poipoService.findAll();
    }

    @Get(':id')
    getPoipoMdlOne(@Param('id') id: string) {
        return this.poipoService.findOne(id)
    }

    @Post()
    createPoipoMember(@Body() createMemberdto: CreatePoipoMemberDto) {
        return this.poipoService.create(createMemberdto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMemberdto: UpdatePoipoMemberDto) {
        // return `This is for updating ${id}`
        return this.poipoService.update(id, updateMemberdto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.poipoService.remove(id)
    }
}
