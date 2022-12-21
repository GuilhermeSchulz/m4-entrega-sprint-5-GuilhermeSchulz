import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Properties } from './properties.entity';

@Entity('categories')
class Categories {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 50 , unique: true })
    name: string

    @OneToMany(() => Properties, Properties => Properties.category)
    properties: Properties[]
}

export { Categories }