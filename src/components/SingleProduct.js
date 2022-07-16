import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import './style.css'
const SingleProduct = (props) => {
	const { product } = props
	return (

		<div className="col-sm mt-5">
			{/* <div className="div-7-card"> */}
				<Card sx={{width:"400px"}}>
					<CardMedia
						component="img"
						height="200"
						image={product.thumbnail}
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{product.name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{product.display_price}
						</Typography>
					</CardContent>
				</Card>
			{/* </div> */}
		</div>
	)
}

export default SingleProduct


	// < div className = "container-fluid mt-5 mb-5" >
	// 	<div className="row">
	// 		<div className="col-md">
	// 			<div class="card bg-dark text-white">
	// 				<img src="..." class="card-img" alt="...">
	// 					<div className="card-img-overlay">
	// 						<h5 className="card-title">Card title</h5>
	// 						<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
	// 						<p className="card-text">Last updated 3 mins ago</p>
	// 					</div>
	// 			</div>
	// 		</div>
	// 		<div className="col-md">
	// 			<div className="card card-styles" style=" background-color:#B9B7BD;">
	// 				<div className="card-body">
	// 					<h1 className="card-title">2</h1>
	// 					<h3>Head of Strategy Marketing</h3>
	// 					<p className="card-text">Some quick example text to build on the card title and make up the bulk of
	// 						the
	// 						card's content.</p>
	// 					<button className="btn btn-secondary" style="background-color:black;">Read More</button>
	// 				</div>
	// 			</div>
	// 		</div>
	// 		<div className="col-md">
	// 			<div className="card card-styles">
	// 				<div className="card-body">
	// 					<h1 className="card-title">3</h1>
	// 					<h3>Abhay Gupta</h3>
	// 					<p className="card-text">Some quick example text to build on the card title and make up the bulk of
	// 						the
	// 						card's content.</p>
	// 					<button className="btn btn-secondary" style="background-color:black;">Read More</button>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </div >