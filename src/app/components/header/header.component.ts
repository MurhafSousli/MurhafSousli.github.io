import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'header',
  template: require('./header.html')
})

export class Header{

  isActive:boolean = false;
  @Input() data:any;

  constructor(public router: Router){
  }

  navigate(target?: string){
    this.router.navigate([target]);
    this.isActive = false;
  }
}

/**
 * Header Component represents the main menu
 *
 */
