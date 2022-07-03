import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id = "" } = request.headers as Record<string, string>;

      const allUsers = this.listAllUsersUseCase.execute({ user_id });

      return response.json(allUsers);
    } catch (error) {
      const typedError = error as Error;

      return response.status(400).json({
        error: typedError.message,
      });
    }
  }
}

export { ListAllUsersController };
