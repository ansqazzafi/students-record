import { StudentsService } from './students.service';
import { Student } from './students.entity';
import { Controller, Post, Body, Get ,Put, Param, Delete , UseFilters} from '@nestjs/common';
import { CreateStudentDTO } from './create-student-dto';
import { UpdateStudentDTO } from './update-student-dto';
import { CustomExceptionFilter } from 'src/ExceptionHandler/custom-exceptionFilter';
import { log } from 'console';
@Controller('students') 
@UseFilters(CustomExceptionFilter)
export class StudentsController {
    constructor(private readonly studentService :StudentsService){}
    @Post('createStudent')
    public async createStudent(@Body() createStudentDTO:CreateStudentDTO): Promise<{ message: string, student: Student }>  {
        
        return await this.studentService.createStudent(createStudentDTO);
    }


    @Get('getAllStudents')
    public async getAllStudents():Promise<Student[]>{
        return await this.studentService.getAllStudents()
    }

    
    @Post('getOneStudent/:id')
    public async getOneStudent(@Param('id')id:string):Promise<Student>{
        return await this.studentService.getOneStudent(id)
    }

    @Delete('deleteStudent/:id')
    public async deleteStudent(@Param('id') id:string):Promise<{ message: string, student: Student }> {
        return await this.studentService.deleteStudent(id)
    }

    @Put('updateStudent/:id')
    public async updateStudent(
        @Param('id') id: string,
        @Body() updateStudentDTO: UpdateStudentDTO
    ): Promise<{ message: string, student: Student }>  {
        return await this.studentService.updateStudent(id, updateStudentDTO);
    }
}
