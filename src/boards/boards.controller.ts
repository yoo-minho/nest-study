import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {BoardsService} from "./boards.service";
import {CreateBoardDto} from "./dto/create-board.dto";
import {Board} from "./board.entity";
import {BoardStatusValidationPipe} from "./pipes/board-status-validation.pipe";
import {BoardStatus} from "./board-status.enum";

@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardsService) {
    }

    @Get()
    getAllBoard(): Promise<Board[]> {
        return this.boardService.getAllBoards();
    }

    @Get('/:id')
    getBoardById(@Param('id') id: number): Promise<Board> {
        return this.boardService.getBoardById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
        return this.boardService.createBoard(createBoardDto);
    }

    @Delete('/:id')
    deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.boardService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: number,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus
    ): Promise<Board> {
        return this.boardService.updateBoardStatus(id, status);
    }

}
