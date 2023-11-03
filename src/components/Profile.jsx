// import avatarImg from "../assets/img/avatar.jpg";
import styles from "./Profile.module.css";

export const Profile = (props) => {
	let user = props.function();
	console.log(user);
	return (
		<div className="row">
			<div className="col-md-4">
				<img src={user.avatar} alt="avatar-image" width="100%" />
			</div>
			<div className="col-md-8">
				<h3 className={styles.name}>Фамили и имя: <span>{user.name} {user.lastname}</span></h3>
				<p className={styles.id} >Id: <span>{user.id}</span></p>
				<p className={styles.mail}>Email: <span>{user.email}</span></p>
			</div>
		</div>
	)

};