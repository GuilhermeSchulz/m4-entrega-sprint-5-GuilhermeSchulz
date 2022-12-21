import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Addresses } from './adresses.entity';
import { Categories } from './categories.entity';
import { Schedules } from './scheduled.entity';

@Entity('properties')
class Properties {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({default: false})
    sold: boolean
    @Column({type: 'decimal',  precision: 12, scale: 2 })
    value: number
    @Column({type: 'integer'})
    size: number

    @CreateDateColumn({type: 'date'})
    createdAt: Date
    @UpdateDateColumn({type: 'date'})
    updatedAt: Date
    
    @OneToOne(() => Addresses) @JoinColumn()
    address: Addresses
    @ManyToOne(() => Categories, Categories => Categories.properties)
    category: Categories
    @OneToMany(() => Schedules, schedules => schedules.property)
    schedules: Schedules

}   

export {Properties}