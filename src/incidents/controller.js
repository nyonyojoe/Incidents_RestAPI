const queries = require('./queries')
const pool = require('../../db')

const https = require('https');
const got = require('got');

const getIncidents = (req, res) => {
    pool.query(queries.getIncidents,(error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

const getIncidentsById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getIncidentsById,[id],(error, results) => {
            if(error) throw error;
            res.status(200).json(results.rows)
    })
}

const addIncidents = async (req,res) => {

    const {incident_desc, city, country} = req.body;
    
     got('api.openweathermap.org/data/2.5/weather?q=Accra&appid=a96f3153f9b6ddef0497d94fbed87152', { json: true }).then(response => {

            pool.query(queries.addIncident, [incident_desc, city, country, response.body], (error, results) => {
                if(error) throw error;
                res.status(201).send('Incident successfully created')
            })
            
        }).catch(error => {
            console.log(error.response.body);
        });

}

module.exports = {
    getIncidents,
    getIncidentsById,
    addIncidents
}