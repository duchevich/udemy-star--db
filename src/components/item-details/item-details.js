import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import ErrorButton from "../error-button/error-button";
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

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
		if(this.props.itemId !== prevProps.itemId){
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
			})
		})
		.catch(this.onError);
	}

	onError = (err) => {
		this.setState({
		error: true,
		loading: false
		});
	};
	render() {

		if(!this.state.item){
			return <span>Select a item from a list</span>;
		}

		const { item, image, loading, error } = this.state;

		const hasData = !(loading || error);

		const errorMessage = error ? <ErrorIndicator/> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = hasData ? <ItemView item={item} image={image}/> : null;

		return (
		<div className="item-details card">
			{errorMessage}
			{spinner}
			{content}
		</div>
		)
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
				<li className="list-group-item">
				<span className="term">Gender</span>
				<span>{gender}</span>
				</li>
				<li className="list-group-item">
				<span className="term">Birth Year</span>
				<span>{birthYear}</span>
				</li>
				<li className="list-group-item">
				<span className="term">Eye Color</span>
				<span>{eyeColor}</span>
				</li>
			</ul>
			<ErrorButton />
			</div>
		</React.Fragment>
	);
};

