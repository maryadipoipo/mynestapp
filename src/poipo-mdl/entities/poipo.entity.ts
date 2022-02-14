import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

// This is used for db transaction form
@Schema()
export class Poipo extends Document{
    //id: number;

    @Prop()
    name: string;

    @Prop()
    position: string;

    @Prop([String])
    skilss: string[];
}


export const PoipoSchema = SchemaFactory.createForClass(Poipo)