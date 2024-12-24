import {profile as dbProfile} from "@public-transport/db-vendo-client/p/db/index.js";
import {createClient} from "@public-transport/db-vendo-client";
import {createHafasRestApi} from "hafas-rest-api";

const config = {
    hostname: "hafas-v2.voldechse.wtf",
    port: 15100,
    name: "Voldechse Navigator",
    homePage: "https://hafas-v1.voldechse.wtf",
    version: "2.0.0",
    openapiSpec: true,
    aboutPage: false
}

const hafas = createClient(dbProfile, "HAFAS REST v2", config);
const api = await createHafasRestApi(hafas, config);

api.use((req, res, next) => {
    res.on('finish', () => console.log('(v2) CORS headers:', res.getHeaders()['access-control-allow-origin']));
    next();
});
api.listen(config.port, (err) => {
    console.log(`REST API (v2) is listening on ${config.port}`);
    if (err) console.log(err);
});
