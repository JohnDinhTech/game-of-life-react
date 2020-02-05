import React, { Component } from "react";

import "./graph.styles.css";

import { Button } from "../button/button.component";

export default class Graph extends Component {
	constructor() {
		super();

		this.state = {
			isPlaying: false,
			dimensions: {
				length: 36, // In "cells". Ex: cellSize = 20; lengthInPixels = dimensions.length * cellSize;
				width: 64,
			},

			grid: [],

			cellSize: 20, // In Pixels
		};
	}

	playButtonHandler = () => {
		console.log(this.state);
		this.setState({ isPlaying: true });
	};

	pauseButtonHandler = () => {
		this.setState({ isPlaying: false });
	};

	playGame() {
		setInterval(() => {
			if (this.state.isPlaying) {
				this.setState({ grid: this.createGrid(true) });
				console.log("new grid!");
			}
		}, 10);
	}

	createGrid(isSeeding) {
		let arr = [];

		for (let i = 0; i < this.state.dimensions.width; i++) {
			let row = [];
			for (let j = 0; j < this.state.dimensions.length; j++) {
				if (isSeeding) {
					row.push(Math.floor(Math.random() * 2));
				} else {
					row.push(0);
				}
			}
			arr.push(row);
			row = [];
		}

		return arr;
	}

	componentDidMount() {
		this.setState({ grid: this.createGrid() });
		this.playGame();
	}

	gridToHTML(grid) {
		let htmlArr = [];

		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[0].length; j++) {
				htmlArr.push(
					<div
						className={`cell-${grid[i][j]}`}
						key={`${i}-${j}`}
						style={{
							width: `${this.state.cellSize}px`,
							height: `${this.state.cellSize}px`,
							display: "inline-block",
							margin: 0,
							padding: 0,
						}}
					/>
				);
			}
		}

		return htmlArr;
	}
	render() {
		return (
			<div>
				<div style={{ textAlign: "center", paddingBottom: "30px" }}>
					<Button text='Play' handler={this.playButtonHandler} />
					<Button text='Pause' handler={this.pauseButtonHandler} />
				</div>
				<div
					className='grid-container'
					style={{
						width: `${this.state.cellSize *
							this.state.dimensions.width}px`,
					}}
				>
					{this.gridToHTML(this.state.grid)}
				</div>
			</div>
		);
	}
}
