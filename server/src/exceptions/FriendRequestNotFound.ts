
import { HttpException, HttpStatus } from '@nestjs/common';

export class FriendRequestNotFoundException extends HttpException {
  constructor() {
    super('Friend request not found', HttpStatus.NOT_FOUND);
  }
}