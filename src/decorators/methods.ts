type HttpMethod = 'get' | 'post' | 'put' | 'delete';

interface RouteDefinition {
  method: HttpMethod;
  path: string;
  handlerName: string | symbol;
}

function createRouteDecorator(method: HttpMethod) {
  return (path: string): MethodDecorator => {
    return (target, propertyKey, descriptor) => {
      const ctor = target.constructor as any;

      if (!ctor.routes) {
        ctor.routes = [] as RouteDefinition[];
      }

      ctor.routes.push({
        method,
        path,
        handlerName: propertyKey,
      });

      return descriptor; // IMPORTANTE: retornar o descriptor
    };
  };
}

export const Get = createRouteDecorator('get');
export const Post = createRouteDecorator('post');
export const Put = createRouteDecorator('put');
export const Delete = createRouteDecorator('delete');
