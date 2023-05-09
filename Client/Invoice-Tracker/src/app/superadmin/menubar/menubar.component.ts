import { Component, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { TokenHandler } from 'src/app/helpers/tokenHandler';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  arrowUp = faArrowUp;
  arrowDown = faArrowDown;
  name: string = '';
  role: string = '';
  email: string = '';
  initials: string = '';
  isHovered = false;

  ngOnInit(): void {
    this.name = this.tokenHandler.getNameFromToken();
    this.role = this.tokenHandler.getRoleFromToken();
    this.email = this.tokenHandler.getEmailFromToken();
    this.initials = this.name.split(" ").map(m=>m.charAt(0)).join("");
  }

  constructor(private tokenHandler: TokenHandler) { }

  rotateIcon(hovered: boolean) {
    this.isHovered = hovered;
  }

  profileDropdown() {
    var dropdown = document.querySelector('.dropdown-content') as HTMLElement | null;
    if (dropdown) {
      dropdown.classList.toggle('d-none');
      dropdown.classList.toggle('show');
    }
  }
}
