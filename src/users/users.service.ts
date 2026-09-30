import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  // CREATE
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  // READ - todos
  findAll() {
    return this.prisma.user.findMany();
  }

  // READ - uno
  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  // UPDATE
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  // DELETE
  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}