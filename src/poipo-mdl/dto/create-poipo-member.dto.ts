import { IsString } from 'class-validator'

export class CreatePoipoMemberDto {
    @IsString()
    readonly name: string

    @IsString()
    readonly position: string

    @IsString({ each: true })
    readonly skills: string[]
}
