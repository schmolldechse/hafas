import {profile as dbProfile} from "@public-transport/db-vendo-client/p/db/index.js";
import {createClient} from "@public-transport/db-vendo-client";
import {createHafasRestApi} from "hafas-rest-api";

const config = {
    hostname: "hafas.v2.voldechse.wtf",
    port: 15100,
    name: "Hafas-REST",
    homePage: "https://hafas.v2.voldechse.wtf",
    version: "1.0.0",
    openapiSpec: true,
    aboutPage: false
}

const hafas = createClient(dbProfile, "wtf.HAFAS-REST", config);
const api = await createHafasRestApi(hafas, config);

api.listen(config.port, (err) => {
    console.log(`REST API (v2) is listening on ${config.port}`);
    if (err) console.log(err);
});
