import { Component, OnInit } from '@angular/core';
import { faAngleDown, faAngleUp, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { TokenHandler } from 'src/app/helpers/tokenHandler';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  arrowUp = faAngleUp;
  arrowDown = faAngleDown;
  logOut = faArrowRightFromBracket;
  name: string = '';
  role: string = '';
  email: string = '';
  initials: string = '';
  isHovered: boolean = false;
  isMenuOpen: boolean = false;
  isDropdownOpen: boolean = false;

  ngOnInit(): void {
    this.name = this.tokenHandler.getNameFromToken();
    this.role = this.tokenHandler.getRoleFromToken();
    this.email = this.tokenHandler.getEmailFromToken();
    const nameParts = this.name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');
    this.initials = firstName.charAt(0) + lastName.charAt(0);
  }

  constructor(private tokenHandler: TokenHandler) { }

  rotateIcon(hovered: boolean) {
    this.isHovered = hovered;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  profileDropdown() {
    var dropdown = document.querySelector('.dropdown-content') as HTMLElement | null;
    if (dropdown) {
      dropdown.classList.toggle('d-none');
      dropdown.classList.toggle('show');
    }
  }
}
