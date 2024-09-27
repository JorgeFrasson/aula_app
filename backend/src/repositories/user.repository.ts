// src/repositories/user.repository.ts
import { User } from '@prisma/client';
import prisma from '../../prisma/client';
import { SaveUserRequest } from '../models/user';

export class UserRepository {
  async createUser(user: SaveUserRequest) {
    return prisma.user.create({data: user});
  }

  async getUsers() {
    return prisma.user.findMany();
  }

  async getUserById(id: number) {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  async deleteUser(id: number) {
    return prisma.user.delete({
      where: { id },
    });
  }

  async updateUser(id: number, userUpdated: User) {
    return prisma.user.update({
      where: { id },
      data: userUpdated,
    });
  }
}