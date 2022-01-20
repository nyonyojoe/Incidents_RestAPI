const getIncidents = "SELECT * FROM incidents";
const getIncidentsById = "SELECT * FROM incidents WHERE client_id = $1"
const addIncident = "INSERT INTO incidents (incident_desc, city, country, weather_report) VALUES ($1, $2, $3, $4)";

module.exports = {
    getIncidents,
    getIncidentsById,
    addIncident
}