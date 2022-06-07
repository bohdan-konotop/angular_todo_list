import { Component } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { DatabaseService } from "../../../services/database.service";

@Component({
  selector: "app-header-profile",
  templateUrl: "./header-profile.component.html",
  styleUrls: ["./header-profile.component.css"],
})
export class HeaderProfileComponent {
  user = this.db.getUserName();
  constructor(private authService: AuthService, private db: DatabaseService) {}

  logout(): void {
    void this.authService.logout();
  }

  deleteAccount() {
    this.db.deleteUserData().catch(console.error);
    this.authService.deletteUser();
    this.authService.logout().catch(console.error);
  }
}
