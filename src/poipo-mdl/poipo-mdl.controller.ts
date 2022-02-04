import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Patch, Post } from '@nestjs/common';
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
        // throw 'Random error'
        const data = this.poipoService.findOne(id)
        if (!data) {
            //throw new HttpException(`Poipo member ${id} not found`, HttpStatus.NOT_FOUND)
            throw new NotFoundException(`Poipo member ${id} not found`)
        }
        return data
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
