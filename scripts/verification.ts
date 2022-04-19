import {verifyAllContracts} from "./helpers/verification-helper"

verifyAllContracts()
    .then(console.log)
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
