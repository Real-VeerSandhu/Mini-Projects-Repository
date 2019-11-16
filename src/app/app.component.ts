import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Standard Form';
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  m: number;
  yi: number;
  xi: number;

  linex1: number;
  liney1: number;
  linex2: number;
  liney2: number;

  xInty: number;
  y1y: number;
  slope: number;

  xInty3: number;
  yInty3: number;
  xS: number;
  yS: number; 
  slopeS: number;
  xScalc: number;

  

  slopem() {
    console.log("Hi", this.x1, this.y1, this.x2, this.y2);
    this.m = (this.y2 - this.y1) / (this.x2 - this.x1);
    this.m = Math.round(this.m * 10) / 10
    console.log("Round Slope Value", this.m);
    
  }

  xInt() {
    this.xi = this.yi*-1/this.m
    console.log("X int is", this.xi)
    this.xi = Math.round(this.xi * 10) / 10
    console.log("Round X Value", this.xi);
  }

  yInt() {
    this.yi = this.y1 - this.x1 * this.m;
    console.log("Y int is", this.yi);
    this.yi = Math.round(this.yi * 10) / 10
    console.log("Round Y Value", this.yi);
     
  }

  calculate() {
    this.slopem()
    this.yInt()
    this.xInt()
    this.linex1 = this.x1 * 100;
    this.liney1 = this.y1 * 100;
    this.linex2 = this.x2 * 100;
    this.liney2 = this.y2 * 100;
  }

  calculate2() {
    this.xInty = this.y1y*-1/this.slope;
  }

  calculate3() {
    this.xScalc = this.xS*this.slopeS;
    this.xInty3 = (this.yS+(this.xScalc*-1))/this.slopeS;
    this.xInty3 = this.xInty3*-1;

    this.yInty3 = this.xInty3*this.slopeS*-1;
  }

}
