import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Endereco from './Endereco';

/**
 * @Entity Associa a class User à tabela users
 * @Column Indica que cada item representa uma coluna da tabela users
 */

@Entity('users')
class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    identity: number;

    @Column()
    sus_number: number;

    @Column()
    birth_date: string;

    @Column()
    resp_name: string;

    @Column()
    resp_identity: string;

    /**
     * Relacionamento um para muitos
     * - ignore essa parte até a que chegue o 4º passo conforme o README.md
     */
     @OneToMany(() => Endereco, endereco => endereco.user, {
         cascade: ['insert', 'update', 'remove']
     })
     @JoinColumn({ name: 'users_id' })
     endereco: Endereco[];

}

export default User;