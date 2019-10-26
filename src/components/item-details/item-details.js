import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import ErrorButton from "../error-button/error-button";
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


const Record = ({item, field, label}) => {
	return (
		<li className="list-group-item">
				<span className="term">{label}</span>
				<span>{item[field]}</span>
				</li>
	)
}

export {
	Record
};

export default class ItemDetails extends Component {

	swapiService = new SwapiService();

	state = {
		item: null,
		image: null,
		loading: true
	}

	componentDidMount(){
		this.updateItem();
	}

	componentDidUpdate(prevProps){
		if(this.props.itemId !== prevProps.itemId ||
			this.props.getData !== prevProps.getData || 
			this.props.getImageUrl !== prevProps.getImageUrl){
				this.setState({
					loading: true,
				})
				this.updateItem();
		}
	}

	updateItem(){
		const {itemId, getData, getImageUrl} = this.props;
		if (!itemId) {
			return;
		}
		getData(itemId)
		.then((item) => {
			this.setState({
				item,
				image: getImageUrl(item),
				loading: false,
				error: false
			});
		})
		.catch(this.onError);
	}

	onError = (err) => {
		console.log(err);
		this.setState({
		error: true,
		loading: false
		});
	};
	render() {

		const { item, image } = this.state;
		
		if (!item) {
			return <span>Select a item from a list</span>;
		}
	
		const { name } = item;
	
		return (
			<div className="item-details card">
				<img className="item-image"
					src={image}
					alt="item"/>
		
				<div className="card-body">
					<h4>{name}</h4>
					<ul className="list-group list-group-flush">
					{
						React.Children.map(this.props.children, (child) => {
						return React.cloneElement(child, { item });
						})
					}
					</ul>
					<ErrorButton />
				</div>
			</div>
		);
	}
}

const ItemView = ({ item, image }) => {

	const { id, name, gender, birthYear, eyeColor } = item;

	return (
		<React.Fragment>
			<img alt="character" className="item-image" src={image} />
			<div className="card-body">
			<h4>{name}</h4>
			<ul className="list-group list-group-flush">
				{this.props.children}
			</ul>
			<ErrorButton />
			</div>
		</React.Fragment>
	);
};

