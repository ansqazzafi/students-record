import { Injectable, NotFoundException } from '@nestjs/common';
import { Student, StudentDocument } from './students.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDTO } from './create-student-dto';
import { UpdateStudentDTO } from './update-student-dto';
@Injectable()
export class StudentsService {
    constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) { }

    public async createStudent(createStudentDTO:CreateStudentDTO): Promise<{ message: string, student: Student }> {
        console.log(createStudentDTO);
        const newStudent = await this.studentModel.create(createStudentDTO)
        const createdStudent = await newStudent.save()
        return {
            message:"Student Created Successfully",
            student:createdStudent
        }
    }


    public async getAllStudents(): Promise<Student[]> {
        const allStudents = await this.studentModel.find()
        return allStudents
    }

    public async getOneStudent(studentId: string): Promise<Student> {
        const FoundStudent = await this.studentModel.findById(studentId)
        if (!FoundStudent) throw new NotFoundException("Student not Found")
        return FoundStudent
    }

    public async deleteStudent(studentId: string): Promise<{ message: string, student: Student }>  {
        const checkStudent = await this.studentModel.findById(studentId);
        if (!checkStudent) {
            throw new NotFoundException("Student not found");
        }
        await this.studentModel.deleteOne({ _id: studentId });
        return {
            message:"Student Deleted Successfully",
            student : checkStudent
        };
    }


    public async updateStudent(studentId: string, updateStudentDTO: UpdateStudentDTO): Promise<{ message: string, student: Student }>  {
        const foundStudent = await this.studentModel.findById(studentId);
        if (!foundStudent) {
            throw new NotFoundException("Student not found");
        }

        Object.assign(foundStudent, updateStudentDTO);
         await foundStudent.save();
         return{
            message:"Student Updated Successfully",
            student:foundStudent
         }
    }
    
}
