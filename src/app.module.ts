import { Module } from '@nestjs/common';
import { StudentsController } from './students/students.controller';
import { StudentsService } from './students/students.service';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigModule and ConfigService
import { Student } from './students/students.entity'; // Assuming this is your interface
import { StudentSchema } from './students/students.entity'; // Assuming this is your schema

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule], 
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'), 
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    StudentsModule,
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class AppModule {}
