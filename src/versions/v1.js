import {profile} from "hafas-client/p/db/index.js";
import {createClient} from "hafas-client";
import {createHafasRestApi} from "hafas-rest-api";

const config = {
    hostname: "hafas-v1.voldechse.wtf",
    port: 15000,
    name: "Voldechse Navigator",
    homePage: "https://hafas-v1.voldechse.wtf",
    version: "1.0.0",
    openapiSpec: true,
    aboutPage: false
}

const hafas = createClient(profile, "HAFAS REST v1", config);
const api = await createHafasRestApi(hafas, config);

api.use((req, res, next) => {
    res.on('finish', () => console.log('(v1) CORS headers:', res.getHeaders()['access-control-allow-origin']));
    next();
});
api.listen(config.port, (err) => {
    console.log(`REST API (v1) is listening on ${config.port}`);
    if (err) console.log(err);
});
