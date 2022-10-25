import { Router } from "express";

export class RouterDefinitions {
  path: string;
  router: Router;

  constructor(path: string, router: Router) {
    this.path = path;
    this.router = router;
  }
}
