import { createClient } from "hafas-client";
import { profile } from "hafas-client/p/db/index.js";
import { createHafasRestApi } from "hafas-rest-api";

const config = {
    hostname: "voldechse.wtf",
    name: "Hafas-REST-API",
    version: "1.0.0",
    cors: true,
    aboutPage: false
}

const PORT = 3000;

const hafas = createClient(profile, "Hafas-REST-API");
const api = await createHafasRestApi(hafas, config);

api.listen(PORT, (err) => {
    console.log(`REST-API is listening on ${PORT}`);
    if (err) console.log(err);
});
