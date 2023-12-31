import React from "react";
import { NavLink } from "react-router-dom";

const TableRow = (props) => {
	return (
		<tr>
			<th scope="row">{props.index + 1}</th>
			<td>
				{" "}
				<NavLink to={"/profile/" + props.id}>
					{" "}
					{props.name} {props.lastname}{" "}
				</NavLink>{" "}
			</td>
			<td>{props.email}</td>
		</tr>
	);
};
export class Friends extends React.Component {
	constructor(props) {
		super(props);
		this.state = { userRow: [] };
	}

	componentDidMount() {

		this.props.function().then((users) => {

			let userRow = [];
			for (let i = 0; i < users.length; i++) {
				userRow.push(
					<TableRow
						index={i}
						id={users[i].id}
						name={users[i].name}
						lastname={users[i].lastname}
						key={i}
						email={users[i].email}
					/>
				)
			}
			this.setState({ userRow: userRow })
		})
	}

	render() {
		return (
			<>
				<h1>Список из БД</h1>
				<table className="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Фамилия и имя</th>
							<th scope="col">Email</th>
						</tr>
					</thead>
					<tbody>
						{this.state.userRow}
					</tbody>
				</table>
			</>
		);
	}
}
