const user = {
	id: "1",
	name: "Иван",
	lastname: "Иванов",
	email: "ivan@mail.ru",
	avatar:
		"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=70",
};

// const users = {
// 	0: {
// 		id: "2",
// 		name: "Tom",
// 		lastname: "Tommy",
// 		email: "tom@mail.ru",
// 		avatar:
// 			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
// 	},
// 	1: {
// 		id: "3",
// 		name: "Fred",
// 		lastname: "Freddy",
// 		email: "fred@mail.ru",
// 		avatar:
// 			"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
// 	},
// 	2: {
// 		id: "4",
// 		name: "Bill",
// 		lastname: "Billy",
// 		email: "bill@mail.ru",
// 		avatar:
// 			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
// 	},
// 	3: {
// 		id: "5",
// 		name: "Jeck",
// 		lastname: "Jecky",
// 		email: "jeck@mail.ru",
// 		avatar:
// 			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&w=300&q=80",
// 	},
// 	4: {
// 		id: "6",
// 		name: "Rick",
// 		lastname: "Ricky",
// 		email: "rick@mail.ru",
// 		avatar:
// 			"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
// 	},
// };

let users = [];

export function getUser(userId) {
	for (let i = 0; i < Object.keys(users).length; i++) {
		if (users[i].id == userId) {
			return users[i];
		}
	}
	return user;
}

export async function getUsers() {
	let response = await fetch("http://jovitta.p-host.in/getUsers")
	users = await response.json();

	return users;
}
