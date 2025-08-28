import { Request, Response } from 'express';
import { Get, Post, Put, Delete } from '../../decorators/methods';

export class UserController {
  @Get('/')
  async list(req: Request, res: Response) {
    res.json({ message: 'list' });
  }

  @Get('/:id')
  async getById(req: Request, res: Response) {
    res.json({ message: `getById ${req.params.id}` });
  }

  @Post('/')
  async create(req: Request, res: Response) {
    res.json({ message: 'create' });
  }

  @Put('/:id')
  async update(req: Request, res: Response) {
    res.json({ message: `update ${req.params.id}` });
  }

  @Delete('/:id')
  async remove(req: Request, res: Response) {
    res.json({ message: `remove ${req.params.id}` });
  }
}
