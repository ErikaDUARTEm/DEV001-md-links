const Welcome = () =>{
    console.log(`**********************************************************************************************`.zebra.bgMagenta.hidden)
    console.log(`**********************************************************************************************`.bgMagenta.hidden)
    console.log(`**********************************************************************************************`.bgMagenta.hidden)
    console.log(`⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ ⌨️ 🔎  ------- WELCOME TO MD-LINKS -------   🔎⌨️  ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️`.bgCyan.brightMagenta.bold)
    console.log(`**********************************************************************************************`.bgMagenta.hidden)
    console.log(`**********************************************************************************************`.bgMagenta.hidden)
    console.log(`**********************************************************************************************`.zebra.bgMagenta.hidden)
};
const Error = (error) => {
    console.log(`****************************************************************************************************`.bgRed.hidden)
    console.log(`⚠️  🆘  ⚠️  🚨  ${error}  🚨  ⚠️  🆘  ⚠️ `.bgRed.inverse.bold);  
    console.log(`****************************************************************************************************`.bgRed.hidden)
};
const Help = () => {
    console.log(`**********************************************************************************************`.zebra.bgMagenta.hidden);
    console.log(`**********************************************************************************************`.bgMagenta.hidden);
    console.log(`**********************************************************************************************`.bgMagenta.hidden);
    console.log(`🌺🌺🌺🌺🌺🌺🌺⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⌨️ 🔎-------NEED HELP❔--------🔎⌨️ ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️🌺🌺🌺`.bgCyan.brightMagenta.bold);
    console.log(`🌺🌺🌺🌺🌺⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⌨️ 🔎   ENTER COMMANDS   🔎⌨️ ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️🌺🌺🌺`.bgCyan.brightMagenta.bold);
    console.log(`______________________________________________________________________________________________` .bgMagenta);
    console.log(`**********************************************************************************************`.bgMagenta.hidden);
    console.log(`        🔹(--validate or --v )            ➡️     Shows an array with links and status.         `.bgMagenta.white.bold);
    console.log(`        🔹(--stats or --s )               ➡️     Total and unique links.                       `.bgMagenta.bold);
    console.log(`        🔹(--validate --stats or --v --s) ➡️     Total , unique and broken links.              `.bgMagenta.bold);
    console.log(`        🔹(--help or --h)                 ➡️     Are you here!.                                `.bgMagenta.bold);
    console.log(`**********************************************************************************************`.bgMagenta.hidden);
    console.log(`_____________________________________________________________________________________________ `.bgMagenta);
    console.log(`**********************************************************************************************`.bgMagenta);
    console.log(`**********************************************************************************************`.bgMagenta.hidden);
    console.log(`**********************************************************************************************`.bgMagenta.hidden);
    console.log(`**********************************************************************************************`.zebra.bgMagenta.hidden);
} 

module.exports = { Welcome, Error, Help };