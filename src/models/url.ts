import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  underscored: true,
  timestamps: true,
  updatedAt: false,
  deletedAt: false,
})
export class Url extends Model<Url> {
  @Column({ unique: true })
  long: string;

  @Column({ unique: true })
  short: string;
}

export default Url;
