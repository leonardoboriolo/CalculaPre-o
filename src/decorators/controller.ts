import { Router } from 'express';

export const controllers: any[] = [];

export function Controller(basePath: string): ClassDecorator {
  return (target: any) => {
    target.prototype.basePath = basePath;
    target.prototype.router = Router();
    controllers.push(target);
  };
}
