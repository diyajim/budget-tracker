// import modules
const express = require("express");
const cors = require("cors");
const pool = require("./db");

// mske express app
const app = express();

// enables cors and json
app.use(cors());
app.use(express.json());

// post request at /payment, gets amount and category from request body and inserts values. returns rows
app.post("/payment", async (request, response) => {
    const {paymentmethodid, methodname} = request.body;

    const result = await pool.query(
        "INSERT INTO paymentmethod (paymentmethodid, methodname) VALUES ($1, $2) RETURNING *",
        [paymentmethodid, methodname]
    );

    response.json(result.rows);
});
// delete request at /paymentdelete, gets id from request body and deletes corresponding row. returns deleted row
app.delete("/paymentdelete", async (request, response) => {
    const {id} = request.body;

    const result = await pool.query(
        "DELETE FROM paymentmethod WHERE paymentmethodid = $1 RETURNING *",
        [id]
    );

    response.json(result.rows);
});

// starts server
app.listen(process.env.PORT || 3000, () => {
    console.log("Server starting");
});