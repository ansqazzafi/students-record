
import { Controller, Post, Body, Get ,Put, Param, Delete , UseFilters} from '@nestjs/common';

@Controller() 
export class AppController {


    @Get()
    public greet():string{
        return "Hello Welcome"
    }
   
    
}
