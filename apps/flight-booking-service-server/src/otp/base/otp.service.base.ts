/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Otp as PrismaOtp, User as PrismaUser } from "@prisma/client";

export class OtpServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.OtpCountArgs, "select">): Promise<number> {
    return this.prisma.otp.count(args);
  }

  async otps<T extends Prisma.OtpFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OtpFindManyArgs>
  ): Promise<PrismaOtp[]> {
    return this.prisma.otp.findMany<Prisma.OtpFindManyArgs>(args);
  }
  async otp<T extends Prisma.OtpFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OtpFindUniqueArgs>
  ): Promise<PrismaOtp | null> {
    return this.prisma.otp.findUnique(args);
  }
  async createOtp<T extends Prisma.OtpCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OtpCreateArgs>
  ): Promise<PrismaOtp> {
    return this.prisma.otp.create<T>(args);
  }
  async updateOtp<T extends Prisma.OtpUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OtpUpdateArgs>
  ): Promise<PrismaOtp> {
    return this.prisma.otp.update<T>(args);
  }
  async deleteOtp<T extends Prisma.OtpDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OtpDeleteArgs>
  ): Promise<PrismaOtp> {
    return this.prisma.otp.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.otp
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
