const baseUrl= "http://localhost:9001/api/v1";
// const baseUrl= "https://bflux.onrender.com/api/v1";

const header = {
    "Content-type": "application/json",
authorization:`bearer ${localStorage.getItem("accessToken")}`
}

// module.exports = baseUrl;