import { Application, Router } from 'express';
import { container } from 'tsyringe';
import { controllers } from './decorators/controller';

interface RouteDefinition {
  method: 'get' | 'post' | 'put' | 'delete';
  path: string;
  handlerName: string | symbol;
}

interface ControllerInstance {
  basePath: string;
  router: Router;
}

export function registerRoutes(app: Application) {
  for (const ControllerClass of controllers) {
    const controller = container.resolve(ControllerClass) as ControllerInstance & Record<string, any>;

    const basePath = controller.basePath;
    const router = controller.router;

    const routes: RouteDefinition[] = (ControllerClass as any).routes || [];

    for (const route of routes) {
      const handler = controller[route.handlerName as string].bind(controller);
      router[route.method](route.path, handler);
    }

    app.use(basePath, router);
  }
}
