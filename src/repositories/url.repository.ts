import { sequelize } from '@config/database';
import { Url } from '@models';
import { Transaction } from 'sequelize/types';
import * as shortid from 'shortid';
import { ResourceNotFoundError } from '@ts';

export namespace UrlRepository {
  export const repository = sequelize.getRepository(Url);

  export const create = async (long: string, transaction: Transaction) => {
    const url = await repository.findOne({ transaction, where: { long } });

    return (
      url ||
      repository.create(
        {
          long,
          short: shortid.generate(),
        },
        { transaction },
      )
    );
  };

  export const retrieve = async (short: string, transaction?: Transaction) => {
    const url = await repository.findOne({ transaction, where: { short } });

    if (!url) {
      throw new ResourceNotFoundError('URL');
    }

    return url;
  };

  export const list = async (transaction?: Transaction) => {
    const urls = await repository.findAll({ transaction });
    return urls;
  };
}
