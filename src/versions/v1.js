import {profile} from "hafas-client/p/db/index.js";
import {createClient} from "hafas-client";
import {createHafasRestApi} from "hafas-rest-api";

const config = {
    hostname: "hafas-v1.voldechse.wtf",
    port: 15000,
    name: "Hafas-REST",
    homePage: "https://hafas-v1.voldechse.wtf",
    version: "1.0.0",
    openapiSpec: true,
    aboutPage: false,
    cors: true
}

const hafas = createClient(profile, "wtf.HAFAS-REST", config);
const api = await createHafasRestApi(hafas, config);

api.listen(config.port, (err) => {
    console.log(`REST API (v1) is listening on ${config.port}`);
    if (err) console.log(err);
});
