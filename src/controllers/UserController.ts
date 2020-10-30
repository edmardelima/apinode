import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

/**
 * getRepository detem a regra de como um dado pode ser criado, deletado...
 */
const create = async (req: Request, res: Response) => {
    const {
        name,
        identity,
        sus_number,
        birth_date,
        resp_name,
        resp_identity
    } = req.body;


    const userRepository = getRepository(User);

    // Cria os dados para salvar no banco
    const user = userRepository.create({
        name,
        identity,
        sus_number,
        birth_date,
        resp_name,
        resp_identity
    });

    // Salva os dados no banco
    await userRepository.save(user);

    return res.status(201).json({ user });
};

export default {
    create,
}
