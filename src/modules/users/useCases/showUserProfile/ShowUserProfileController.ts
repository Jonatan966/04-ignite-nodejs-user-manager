import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const targetUser = this.showUserProfileUseCase.execute({ user_id });

      return response.json(targetUser);
    } catch (error) {
      const typedError = error as Error;

      return response.status(404).json({
        error: typedError.message,
      });
    }
  }
}

export { ShowUserProfileController };
