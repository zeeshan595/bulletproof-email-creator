import apology from "./email-templates/adhoc/boiler-care-apology";

export default () => {
    apology.saveDocument("index.html");
};