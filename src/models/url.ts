import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  underscored: true,
  createdAt: true,
  updatedAt: false,
  deletedAt: false,
})
export class Url extends Model<Url> {
  @Column
  long: string;

  @Column
  short: string;
}

export default Url;
