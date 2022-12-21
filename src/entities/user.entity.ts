import { hashSync } from 'bcryptjs'
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Schedules } from './scheduled.entity'

@Entity('users')
class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 50 })
    name: string

    @Column({ length: 50, unique: true })
    email: string

    @Column({ length: 120 })
    password: string

    @Column()
    isAdm: boolean

    @Column( {nullable: true, default: true})
    isActive: boolean

    @OneToMany(() => Schedules, schedules => schedules.user)
    schedules: Schedules[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }

}

export { User }