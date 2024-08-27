import express from 'express';
import songRoutes from '../routes/song';

const router = express.Router();

router.use('/song', songRoutes);

export default router;
