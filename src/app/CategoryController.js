import * as Yup from 'yup';

import Category from '../models/category';
import User from '../models/user';

class CategoryController {
     async store(request, response) {
          try {
               const schema = Yup.object().shape({
                    name: Yup.string().required(),
               });

               try {
                    schema.validateSync(request.body, {
                         abortEarly: false,
                    });
               } catch (err) {
                    return response.status(400).json({
                         error: err.errors,
                    });
               }

               // Busca o usuário logado
               const user = await User.findByPk(request.userId);

               if (!user) {
                    return response.status(404).json({
                         error: 'Usuário não encontrado.',
                    });
               }

               // Verifica se o usuário é administrador
               const { admin: isAdmin } = user;

               if (!isAdmin) {
                    return response.status(401).json({
                         error: 'Somente administradores podem criar categorias.',
                    });
               }

               // Cria a categoria
               const category = await Category.create({
                    name: request.body.name,
               });

               // Retorna a categoria criada
               return response.status(201).json(category);
          } catch (error) {
               console.error(error);

               return response.status(500).json({
                    error: 'Erro interno do servidor.',
               });
          }
     }
}

export default new CategoryController();