import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { authorizationToLoginPayLoad } from 'src/address/utils/bas-64-cinverter';

export const UserId = createParamDecorator((_, ctx: ExecutionContext) => {
  const { authorization } = ctx.switchToHttp().getRequest().headers;

  const loginPayload = authorizationToLoginPayLoad(authorization);

  console.log('loginPayload.id', loginPayload.id);
  return loginPayload.id;
});
