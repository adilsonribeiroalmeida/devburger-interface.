import { v4 } from 'uuid';
import * as Yup from 'yup';

import User from '../models/User';

class UserController {
     async store(req, res) {
          const schema = Yup.object().shape({
               name: Yup.string().required(),
               email: Yup.string().email().required(),
               password: Yup.string().required().min(6),
               admin: Yup.boolean().required(),
          });

          try {
               await schema.validate(req.body, { abortEarly: false });
          } catch (error) {
               return res.status(400).json({ error: 'User validation failed' });
          }

          const { name, email, password } = req.body;

          const userExists = await User.findOne({
               where: { email },
          });

          if (userExists) {
               return res.status(400).json({ error: 'User already exists' });
          }

          const user = await User.create({
               id: v4(),
               name,
               email,
               password,
          });

          return res.json(user);
     }
}