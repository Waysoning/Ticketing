import express from 'express';

import { currentUser } from '@wayson-ticketing/common';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  // if(!req.session || !req.session.jwt){
  // if (!req.session?.jwt) {
  //   return res.send({ currentUser: null });
  // }

  res.send({ currentUser: req.currentUser || null }); // may undefined
});

export { router as currentUserRouter };
