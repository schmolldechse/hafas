import {createHafasRestApi} from "hafas-rest-api";
import {profile as dbProfile} from "@public-transport/db-vendo-client/p/db/index.js";
import {createClient} from "@public-transport/db-vendo-client";

const config = {
    hostname: "voldechse.wtf",
    port: 3000,
    name: "Hafas-REST",
    homePage: "https://hafas.voldechse.wtf",
    version: "1.0.0",
    openapiSpec: true,
    aboutPage: false
}

const hafas = createClient(dbProfile, "wtf.HAFAS-REST", config);
const api = await createHafasRestApi(hafas, config);

api.listen(config.port, (err) => {
    console.log(`REST API is listening on ${config.port}`);
    if (err) console.log(err);
});
