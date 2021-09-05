import {Injectable, NotFoundException} from '@nestjs/common';
import {BoardStatus} from "./board-status.enum";
import {CreateBoardDto} from "./dto/create-board.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {BoardRepository} from "./board.repository";
import {Board} from "./board.entity";

@Injectable()
export class BoardsService {

    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository: BoardRepository
    ) {
    }

    async getBoardById(id: number): Promise<Board> {
        const found = await this.boardRepository.findOne(id);
        if (!found) throw new NotFoundException(`Can't find Board width id '${id}'`);
        return found;
    }

    async createBoard(createBoardDto: CreateBoardDto): Promise<Board>{
        const {title, description} = createBoardDto;
        const board = this.boardRepository.create({
            title,
            description,
            status: BoardStatus.PUBLIC,
        })
        await this.boardRepository.save(board);
        return board;
    }

    // private boards: Board[] = [];
    //
    // getAllBoards(): Board[] {
    //     return this.boards;
    // }
    //
    // getBoardById(id: string): Board {
    //     const found = this.boards.find(board => board.id === id);
    //     if (!found) throw new NotFoundException(`Can't find Board width id '${id}'`);
    //     return found;
    // }
    //
    // createBoard(createBoardDto: CreateBoardDto) {
    //     const {title, description} = createBoardDto;
    //     const board: Board = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: BoardStatus.PUBLIC,
    //     }
    //     this.boards.push(board);
    //     return board;
    // }
    //
    // deleteBoard(id: string): void {
    //     const found = this.getBoardById(id);
    //     if (!found) throw new NotFoundException(`Can't find Board width id '${id}'`);
    //     this.boards = this.boards.filter(board => found.id !== id);
    // }
    //
    // updateBoardStatus(id: string, status: BoardStatus): Board {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }

}
