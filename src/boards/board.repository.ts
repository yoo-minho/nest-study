import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';
import { User } from '../auth/user.entity';

export interface UserFindOptions {
  id: number;
}

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async findMany({ id }: UserFindOptions = { id: 0 }): Promise<Board[]> {
    const query = this.createQueryBuilder('board');
    if (id) query.where('board.userId = :userId', { userId: id });
    return await query.getMany();
  }

  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    const { title, description } = createBoardDto;
    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user,
    });
    await this.save(board);
    return board;
  }
}
