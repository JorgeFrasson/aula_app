// src/repositories/user.repository.ts
import { User } from '@prisma/client';
import prisma from '../../prisma/client';
import { SaveUserRequest, UpdateUserRequest } from '../dto/userDTO';

export class UserRepository {
  async createUser(user: SaveUserRequest) {
    return await prisma.user.create({data: user});
  }

  async getUsers() {
    return prisma.user.findMany();
  }

  async getUserById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  async getUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  async getUserByUsername(username: string) {
    return await prisma.user.findUnique({
      where: { username },
    });
  }

  async getUserByCpf(cpf: string) {
    return await prisma.user.findUnique({
      where: { cpf },
    });
  }

  async deleteUser(id: number) {
    return await prisma.user.delete({
      where: { id },
    });
  }

  async updateUser(id: number, userUpdated: UpdateUserRequest) {
    return await prisma.user.update({
      where: { id },
      data: userUpdated,
    });
  }
}