const user = {
	id: "1",
	name: "Иван",
	lastname: "Иванов",
	email: "ivan@mail.ru",
	avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=70",
};

const users = {
	0: { name: "Tom", lastname: "Tommy" },
	1: { name: "Fred", lastname: "Freddy" },
	2: { name: "Bill", lastname: "Billy" },
	3: { name: "Jeck", lastname: "Jecky" },
	4: { name: "Rick", lastname: "Ricky" },
}

export function getUser() {
	return user;
}

export function getUsers() {
	return users;
}