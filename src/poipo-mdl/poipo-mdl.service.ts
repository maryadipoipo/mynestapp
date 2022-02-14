import { Injectable } from '@nestjs/common';
import { Poipo } from './entities/poipo.entity';

@Injectable()
export class PoipoMdlService {
    private poipoDB: Poipo[] = [
        {
            //id: 1,
            name: "Poipo",
            position: "Black Anbu",
            skilss: ["Rasenggang", "Amaterasu"]
        }
    ]
    findAll() {
        return this.poipoDB
    }

    findOne(id: string) {
        return this.poipoDB.find(item => item.id === +id)
    }

    create(createPoipoMemberDto: any) {
        this.poipoDB.push(createPoipoMemberDto)
    }

    update(id: string, updatePoipoMemberDto: any) {
        const existingMember = this.findOne(id);
        if (existingMember) {
            // Update existing entity
        }
    }

    remove(id: string) {
        const memberIndex = this.poipoDB.findIndex(item => item.id === +id)
        if (memberIndex > 0) {
            this.poipoDB.splice(memberIndex, 1)
        }
    }

}
