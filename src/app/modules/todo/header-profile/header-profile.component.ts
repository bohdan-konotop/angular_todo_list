import { Component } from "@angular/core";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-header-profile",
  templateUrl: "./header-profile.component.html",
  styleUrls: ["./header-profile.component.css"],
})
export class HeaderProfileComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    void this.authService.logout();
  }
}
