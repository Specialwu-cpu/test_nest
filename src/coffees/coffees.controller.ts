import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { get } from 'http';

@Controller('coffees')
export class CoffeesController {
    @Get('flavors')
    findAll() {
        return 'this returns all coffees';
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return `this returns #${id} coffees drink coffee`;
    }

    @Post()
    create(@Body("name") body) {
        return body;
        //return `this action creates a coffee`;
    }
}