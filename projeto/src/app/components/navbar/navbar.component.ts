import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [AvatarModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class MenubarBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    isMenuOpen = false;
    toggleMenu(){
        this.isMenuOpen = !this.isMenuOpen;
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
            },
            {
                label: 'Resume',
            },
                      {
                label: 'Projects',
            },
            
            {
                label: 'Contact',
            }
        ]
    }

    
}

