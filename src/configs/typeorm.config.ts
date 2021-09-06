import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'minho1010',
  database: 'pg_db',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
};
