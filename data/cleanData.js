const members = require('./membersOfCongress');

const crp_ids = members.map( memb => {
    return {crp_id: memb.crp_id}
})


console.log(JSON.stringify(crp_ids))




// const cleanedContribs = contribs.map(contrib => {
//     let candidate = contrib.response.contributors.attributes;
//     let contributors = candidate.contributor;
//     return { cand: candidate.cid }
// })