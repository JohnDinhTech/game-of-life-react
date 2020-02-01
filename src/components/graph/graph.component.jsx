import React, { Component } from "react";

import "./graph.styles.css";

export default class Graph extends Component {
	constructor() {
		super();

		this.state = {
			dimensions: {
				length: 36, // In "cells". Ex: cellSize = 20; lengthInPixels = dimensions.length * cellSize;
				width: 64,
			},

			cellSize: 20, // In Pixels
		};
	}

	createGridArr() {
		let arr = [];

		for (let i = 0; i < this.state.dimensions.width; i++) {
			let row = [];
			for (let j = 0; j < this.state.dimensions.length; j++) {
				row.push(Math.floor(Math.random() * 2));
			}
			arr.push(row);
			row = [];
		}

		return arr;
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
			<div
				className='grid-container'
				style={{
					width: `${this.state.cellSize *
						this.state.dimensions.width}px`,
				}}
			>
				{this.gridToHTML(this.createGridArr())}
			</div>
		);
	}
}
