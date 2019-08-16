// {cand_name - notice, contributors: [...]}

const contributors = members.map(memb => {
    const contribs = memb.contributors.map(contr => {
        return { org_name: contr.contributor, amount: 16900, recipient: memb.cid }
    })
    return contribs;
})

const baby = {cand_name: "Ralph Abraham (R)",
cid: "N00036633",
cycle: "2018",
origin: "Center for Responsive Politics",
source: "https://www.opensecrets.org/members-of-congress/contributors?ci:N00036633&amp;cycl:2018",
notice: "The organizations themselves did not donate, rather the money came from the organization&apos;s PAC, its individual members or employees or owners, and those individuals&apos; immediate families.",
contributors: [{contributor: "Acadian Ambulance Service",
total: "16900",
pacs: "5000",
indivs: "11900"}, {contributor: "Madden Contracting",
total: "16200",
pacs: "0",
indivs: "16200"}, {contributor: "Central Management",
total: "11800",
pacs: "0",
indivs: "11800"}, {contributor: "CenturyLink",
total: "11050",
pacs: "7500",
indivs: "3550"}, {contributor: "American Crystal Sugar",
total: "10000",
pacs: "10000",
indivs: "0"}, {contributor: "American Society of Anesthesiologists",
total: "10000",
pacs: "10000",
indivs: "0"}, {contributor: "American Sugar Cane League",
total: "10000",
pacs: "10000",
indivs: "0"}, {contributor: "Boeing Co",
total: "10000",
pacs: "10000",
indivs: "0"}, {contributor: "Farm Credit Council",
total: "10000",
pacs: "10000",
indivs: "0"}, {contributor: "Majority Cmte PAC",
total: "10000",
pacs: "10000",
indivs: "0"}]}
