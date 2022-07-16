import React from 'react'
import { useEffect } from 'react'
import SingleProduct from './SingleProduct'
import { getDetails } from '../actions/detailAction'
import { useDispatch, useSelector } from 'react-redux';
const Homepage = () => {
	const dispatch = useDispatch();
	const detailsState = useSelector(state => state.getDetails)
	// console.log(detailsState)
	// const customerBalanceState = useSelector(state => state.getCustomerBalance)
	// my array
	// let datas;
	// if (detailsState.loading === false)
	// 	console.log(detailsState.details.data);

	useEffect(() => {
		dispatch(getDetails());
	}, [])

	return (
		<>
			{
				detailsState.loading === true ?
				<div>
					wait loading
				</div> :
				<>
				
					<div className="container-fluid mb-5">
						<div className="row">
							
								{
									detailsState.details.data.map((data) => {
										return <SingleProduct key={data.id} product={data} />
									})
								}
							
						</div>
					</div>
				</>
			}
		</>
	)
}

export default Homepage;

// {
// 	"code": "success",
// 		"data": [
// 			{
// 				"id": 6256,
// 				"vendor": "e0e941bc-49dc-4c32-a2e1-1a30e71aaa6c",
// 				"slug": "bikaji-kolkata-chanachur",
// 				"out_of_stock": false,
// 				"name": "Bikaji Kolkata Jhal Chanachur",
// 				"product_type": "VARIABLE",
// 				"thumbnail": "https://media.homedrop.in/media/2020/04/26102015/Bikaji-Kolkata-Special-Chanachur.jpg",
// 				"display_price": "₹52 - ₹104"
// 			},
// 	}