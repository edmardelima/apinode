
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from './User';

/**
 * @Entity Associa a class Endereco à tabela enderecos
 * @Column Indica que cada item representa uma coluna da tabela endereco
 */
@Entity('endereco')
class Endereco {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    logradouro: string;

    @Column()
    numero: number;

    @Column()
    bairro: string;

    @Column()
    cidade: string;

    @Column()
    estado: string;

    @Column()
    cep: number;

    /**
     * Relacionamento um para muitos
     * - ignore essa parte até a que chegue o 4º passo conforme o README.md
     */
    @ManyToOne(() => User, user => user.endereco)
    @JoinColumn({ name: 'users_id' })
    user: User;
}

export default Endereco;