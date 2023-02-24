export default defineEventHandler(async(event) => {
//   const {name} = getQuery(event);
//   const {age} = await readBody(event);

    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=tWPchxpYHfxybYMW84tk0Nl0XAF7DZx95cnXDJbv')
//   return {
//     message: `Hello, ${name} ${age}`
//   };
    return data
});
