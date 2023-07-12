import React from "react";
import { HashRouter, Route } from "react-router-dom";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = () => {
  return (
    <HashRouter>
      <Route path="/:id" component={getUser} />
      <Route path="/:id/friends" component={getUserFriends} />
      <Route path="/:id/:friendId" component={addRemoveFriend} />
    </HashRouter>
  );
};

export default router;
