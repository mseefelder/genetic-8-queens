import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  @ViewChild("canvas") canvasElement: ElementRef;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private board: HTMLImageElement;
  private queen: HTMLImageElement;


  private initPop: number = 6;
  private boards: number[][] = [];
  private scores: number[] = [];

  ngOnInit () {
    this.canvas = this.canvasElement.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.board = document.createElement('img');
    this.board.src = "assets/board.png";
    this.queen = document.createElement('img');
    this.queen.src = "assets/queen.png";

    this.boards = this.randomPopulation();
  }

  ngAfterViewInit () {
    this.scoreAll();
    this.render();
  }

  randomHouse(): number {
    return Math.floor(Math.random() * 8);
  }

  randomBoard(): number[] {
    let board = [];
    for(let i=0; i<8; i++) {
      board.push(this.randomHouse());
    }
    return board;
  }

  randomPopulation(): number[][] {
    let population = [];
    for(let i = 0; i < this.initPop; i++){
      population.push(this.randomBoard());
    }
    return population;
  }

  scoreAll () {
    let score: number;
    let board: number[];
    let current = {x: 0, y: 0};
    let target = {x: 0, y: 0};
    for (let b = 0; b < this.boards.length; b++) {
      score = 0;
      board = this.boards[b];
      for (let c = 0; c < board.length; c++) {
        current.x = board[c];
        current.y = c;
        for (let t = c+1; t < board.length; t++){
          target.x = board[t];
          target.y = t;
          if ( 
            (current.x == target.x) || 
            (Math.abs(target.x-current.x) == Math.abs(target.y-current.y))
          ) {
            score++;
          } 
        }
      }
      this.scores[b] = score;
    }
  }

  cross () {
    let tempA: number[];
    let tempB: number[];
    for (let b = 0; b < this.initPop; b+= 2) {
      tempA = this.boards[b].slice(0,4);
      tempB = this.boards[b+1].slice(4,8);
      tempA = tempA.concat(tempB);
      this.boards.push(tempA);

      tempA = this.boards[b+1].slice(0,4);
      tempB = this.boards[b].slice(4,8);
      tempA = tempA.concat(tempB);
      this.boards.push(tempA);
    }
    this.scoreAll();
    this.render();
  }

  mutate () {
    let house = 0;
    let len = this.boards.length;
    let temp;
    for (let b = this.initPop; b > 0; b--) {
      temp = [];
      house = this.randomHouse();
      temp = temp.concat(this.boards[len-b]);
      temp[house] = this.randomHouse();
      this.boards.push(temp);
    }
    this.scoreAll();
    this.render();
  }

  select () {

  }

  render () {
    let qPos = [0,0];
    for (let b = 0; b < this.boards.length; b++) {
      let column = b%6;
      let row = (b-column)/6;
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.translate(column*80, row*80);
      this.ctx.drawImage(this.board, 0, 0, 64, 64);
      this.ctx.fillText(this.scores[b]+'',64,64);
      
      for (let q = 0; q < this.boards[b].length; q++) {
        qPos[0] = this.boards[b][q] * 8;
        qPos[1] = q*8;
        this.ctx.drawImage(this.queen, qPos[0], qPos[1], 8, 8);
      }
    }
  }

}
