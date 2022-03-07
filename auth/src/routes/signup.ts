import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { User } from '../models/user';
import { RequestValidationError } from '../errors/request-validation-error';
import { BadRequestError } from '../errors/bad-request-error';
// import { DatabaseConnectionError } from '../errors/database-connection-error';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters!'),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // This is a Js land (not ts)
      // const error = new Error('Invalid email or password');
      // error.reasons = errors.array();
      // throw error;
      throw new RequestValidationError(errors.array());
    }

    // const { email, password } = req.body;
    // console.log('Creating a user...');
    // throw new DatabaseConnectionError();
    // res.send({});

    const { email, password } = req.body;

    const existingUSer = await User.findOne({ email });

    if (existingUSer) {
      // console.log('Email in use');
      // return res.send({});
      throw new BadRequestError('Email in use');
    }

    const user = User.build({ email, password });
    await user.save();

    res.status(201).send(user);
  }
);

export { router as signupRouter };
