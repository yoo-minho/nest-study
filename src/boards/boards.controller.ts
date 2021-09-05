import {Body, Controller, Get, Param, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {BoardsService} from "./boards.service";
import {CreateBoardDto} from "./dto/create-board.dto";
import {Board} from "./board.entity";

@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardsService) {
    }

    // @Get()
    // getAllBoard(): Board[] {
    //     return this.boardService.getAllBoards();
    // }
    //
    @Get('/:id')
    getBoardById(@Param('id') id: number): Promise<Board> {
        return this.boardService.getBoardById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
        return this.boardService.createBoard(createBoardDto);
    }

    //
    // @Delete('/:id')
    // deleteBoard(@Param('id') id: string): void {
    //     this.boardService.deleteBoard(id);
    // }
    //
    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id: string,
    //     @Body('status', BoardStatusValidationPipe) status: BoardStatus
    // ): Board {
    //     return this.boardService.updateBoardStatus(id, status);
    // }

}
