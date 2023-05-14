import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./features/categories/categories.component";
import { FlashCardsComponent } from "./features/flash-cards/flash-cards.component";
import { GamesComponent } from "./features/games/games.component";
import {WriteModeComponent} from "./features/write-mode/write-mode.component";
import {FlashCardModeComponent} from "./features/flash-card-mode/flash-card-mode.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "categories" },
  { path: "categories", component: CategoriesComponent },
  {
    path: "categories/:category-id/flash-cards",
    component: FlashCardsComponent,
  },
  { path: "categories/:categoryId/games", component: GamesComponent },
  { path: "categories/:categoryId/games/flashCard", component: FlashCardModeComponent},
  { path: "categories/:categoryId/games/write", component: WriteModeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
