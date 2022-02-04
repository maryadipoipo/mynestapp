import { PartialType } from "@nestjs/mapped-types";
import { CreatePoipoMemberDto } from "./create-poipo-member.dto";


export class UpdatePoipoMemberDto extends PartialType(CreatePoipoMemberDto) {}
