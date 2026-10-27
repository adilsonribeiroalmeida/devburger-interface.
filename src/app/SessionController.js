import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import User from '../models/User';

class SessionController {
     async store(req, res) {
          const schema = Yup.object().shape({
               email: Yup.string().email().required(),
               password: Yup.string().required(),
          });

          const userEmailOrPasswordIncorrect = () => {
               return res.
                    status(401).
                    json({ error: 'User email or password incorrect' });
          };

          try {
               await schema.validate(req.body, { abortEarly: false });
          } catch (error) {
               return userEmailOrPasswordIncorrect();
          }

          const { email, password } = req.body;

          const user = await User.findOne({
               where: { email },
          });

          if (!user) {
               userEmailOrPasswordIncorrect();
          }

          if (!(await user.checkPassword(password))) {
               userEmailOrPasswordIncorrect();
          }

          const { id, name } = user;

          return res.json({

               user: {
                    id,
                    name,
                    email,
               },
               token: jwt.sign({ id }, authConfig.secret, {
                    expiresIn: authConfig.expiresIn,
               }),
          });
     }
}

export default new SessionController();