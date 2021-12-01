const axios = require('axios');
const router = '.';
const { Country, Activity } = require('../db');
const server = require('express').Router();
/*[ ] GET /countries:
En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
Obtener un listado de los paises.*/

const getApiInfo = async () => {
	const apiUrl = await axios('https://restcountries.com/v3/all');
	const apiInfo = await apiUrl.data.map((country) => {
		return {
			id: country.cca3,
			name: country.name.common,
			flag: country.flags[0],
			continent: country.continents[0],
			capital: country.capital?.[0],
			area: country.area,
			poblation: country.population,
		};
	});
	const result = await Country.bulkCreate(apiInfo); // busca en el arr y matchea llenando las tablas con lo que necesito, sino lo ignora
	return result;
};
const getDbInfo = async () => {
	return await Country.findAll({
		// hago la consulta a mi db, si tengo los datos no hace nada, sino los tiene, los creo..
		include: {
			model: Activity,
			attribute: ['name', 'difficulty', 'duration', 'season'],
			through: {
				attributes: [],
			},
		},
	});
};

const getAllCountires = async (req, res) => {
	const apiInfo = await getApiInfo();
	const dbInfo = await getDbInfo();
	const infoTotal = apiInfo.concat(dbInfo);
	return infoTotal;
};
const ActInfo = async () => {
	return await Activity.findAll({
		include: Country,
	});
};

server.get('/countries/:id', async function (req, res) {
	const id = req.params.id.toUpperCase();
	const allCountries = await getDbInfo();
	if (id) {
		const idCountries = allCountries.filter((i) => i.id === id);
		idCountries.length
			? res.status(200).send(idCountries)
			: res.status(404).send('id no valido');
	}
});

server.get('/countries', async (req, res) => {
	const name = req.query.name;
	let countriesTotal = await getAllCountires();
	if (name) {
		let countriesName = countriesTotal.filter((el) =>
			el.name.toLowerCase().includes(name.toLowerCase())
		);
		countriesName.length
			? res.status(200).send(countriesName)
			: res
					.status(404)
					.send('No se encontraron paises con ese nombre, intenta con otro');
	} else {
		res.status(200).send(countriesTotal);
	}
});
server.post('/activity', async function (req, res) {
	const { name, season, duration, difficulty, idCountry } = req.body;

	try {
		const activityCreada = await Activity.create({
			name,
			season,
			duration,
			difficulty,
		});

		if (idCountry) {
			activityCreada.addCountry(idCountry);
		}
		res.send('Actividad creada con exito!');
	} catch (err) {
		console.log(err);
	}
});

server.get('/activity', async function (req, res) {
	const act = await ActInfo();
	console.log(act);
	res.status(200).send(act);
});

module.exports = server;
