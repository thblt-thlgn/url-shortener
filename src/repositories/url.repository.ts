import { sequelize } from '@config/database';
import { Url } from '@models';

export namespace UrlRepository {
  export const repository = sequelize.getRepository(Url);
}
