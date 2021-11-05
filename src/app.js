const agars = [
    {
        name: "MacConkey",
        color: "#F5BAD3",
        abbreviation: "MC"
    },
    {
        name: "Sangre",
        color: "#DC382D",
        abbreviation: "BA"
    },
    {
        name: "Tiosulfato citrato bilis sacarosa",
        color: "#8CD0BC",
        abbreviation: "TCBS"
    },
    {
        name: "Manitol sal",
        color: "#F581C0",
        abbreviation: "MSA"
    },
    {
        name: "Baird-Parker",
        color: "#FAEEAE",
        abbreviation: "BPA"
    },
    {
        name: "Chocolate",
        color: "#933E19",
        abbreviation: "CHOC"
    },
    {
        name: "Salmonella Shigella",
        color: "#FFDD9C",
        abbreviation: "SS"
    },
    {
        name: "Verde brillante",
        color: "#F581C0",
        abbreviation: "BG"
    },
    {
        name: "Entérico de Hektoen",
        color: "#9CE3E8",
        abbreviation: "HE"
    },
    {
        name: "Desoxicolato de xilosa lisina",
        color: "#F86AA5",
        abbreviation: "XLD"
    },
    {
        name: "Sulfito bismuto",
        color: "#F4FAAE",
        abbreviation: "BS"
    },
    {
        name: "Eosina azul de metileno",
        color: "#C8261B",
        abbreviation: "EMB"
    },
    {
        name: "Triptona-Soya",
        color: "#FFF8D4",
        abbreviation: "TSA"
    },
];

const bacterias = [
    "Acinetobacter",
    "Actinomycetes",
    "Agrobacterium",
    "Anaplasma",
    "Azorhizobium",
    "Azotobacter",
    "Bacillus",
    "Bacillus cereus",
    "Bacteroides",
    "Bartonella",
    "Bordetella",
    "Brucella",
    "Campylobacter",
    "Chlamydia",
    "Citrobacter",
    "Citrobacter freundii",
    "Enterococcus",
    "Enterococcus fecalis",
    "Escherichia",
    "Escherichia coli",
    "Escherichia fergusonii",
    "Gardenerella",
    "Haemophilus",
    "Haemophilus influenzae",
    "Haemophilus parainfluenzae",
    "Haemophilus haemolyticus",
    "Helicobacter",
    "Klebsiella",
    "Klebsiella pneumoniae",
    "Klebsiella oxytoca",
    "Legionella",
    "Listeria",
    "Listeria monocytogenes",
    "Neisseria",
    "Neisseria gonorrhoae",
    "Neisseria subflava",
    "Nocardia",
    "Nocardia asteroides",
    "Nocardia brasiliensis",
    "Nocardia farcinica",
    "Pasteurella",
    "Pseudomona",
    "Pseudomona aeruginosa",
    "Pseudomonas putida",
    "Salmonella",
    "Salmonella enterica",
    "Salmonella typhimurium",
    "Salmonella bongori",
    "Staphylococcus",
    "Staphylococcus aureus",
    "Staphylococcus epidermis",
    "Staphylococcus haemolyticus",
    "Staphylococcus capitis",
    "Streptococcus",
    "Streptococcus agalactiae",
    "Streptococcus pneumoniae",
    "Staphylococcus hominis",
    "Treponema",
    "Vibrio",
    "Vibrio cholerae",
    "Vibrio vulnificus",
    "Vibrio parahaemolyticus",
    "Micrococcus",
    "Micrococcus luteus",
    "Serratia",
    "Serratia marcescens",
    "Taylorella",
    "Aureobasidium",
    "Aureobasidium pullulans",
    "Candida",
    "Candida albicans",
    "Burkholderia",
    "Burkholderia cepacia",
    "Aeromonas hydrophila",
    "Aeromonas",
    "Shigella",
    "Shigella dysenteriae",
    "Shigella flexneri",
    "Shigella sonnei",
    "Moraxella",
    "Moraxella catarrhalis",
];




let genus;
let species;
let agar_name;
let image_url;

let bacteria_list = bacterias.sort();

agars.map((agar) => {
    const agarDiv = document.createElement("div");
    agarDiv.classList.add("agar");
    agarDiv.classList.add(agar.abbreviation);

    agarDiv.addEventListener("click", () => {
        document.querySelector(".selected-agar").value = agar.name;
        agar_name = agar.abbreviation;
    })

    document.querySelector(".selected-agar").addEventListener("change", () => {
        agar_name = document.querySelector(".selected-agar").value;
    })

    agarDiv.innerHTML = `<div class="illustration"></div><h1 class="abbreviation">${agar.abbreviation}</h1>`;
    document.querySelector(".horizontal-scroll").appendChild(agarDiv);
    document.querySelector(`.${agar.abbreviation} .illustration`).style.backgroundColor = agar.color;
});

document.querySelector(".input .arrow").addEventListener("click", () => {
    document.querySelector(".dropdown .items").classList.toggle("inactive");
})

bacteria_list.map((bacteria) => {
    const bacteriaDiv = document.createElement("div");
    bacteriaDiv.classList.add("bacteria");
    bacteriaDiv.innerHTML = bacteria;

    bacteriaDiv.addEventListener("click", () => {
        document.querySelector(".input input").value = bacteria;
        document.querySelector(".dropdown .items").classList.add("inactive");
        genus = bacteria.split(" ", 2)[0].toLowerCase();
        try{
            species = bacteria.split(" ", 2)[1].toLowerCase();
        }
        catch(e){
            species = "spp";
        }
    })

    document.querySelector(".dropdown .items").appendChild(bacteriaDiv);
});

document.querySelector(".input input").addEventListener("keyup", () => {
    document.querySelector(".dropdown .items").classList.remove("inactive");
    document.querySelector(".dropdown .items").innerHTML = "";
    const results = search(document.querySelector(".input input").value);
    results.map((bacteria) => {
        const bacteriaDiv = document.createElement("div");
        bacteriaDiv.classList.add("bacteria");
        bacteriaDiv.innerHTML = bacteria;

        bacteriaDiv.addEventListener("click", () => {
            document.querySelector(".input input").value = bacteria;
            document.querySelector(".dropdown .items").classList.add("inactive");
            genus = bacteria.split(" ", 2)[0].toLowerCase();
            try{
                species = bacteria.split(" ", 2)[1].toLowerCase();
            }
            catch(e){
                species = "spp";
            }
        })
    
        document.querySelector(".dropdown .items").appendChild(bacteriaDiv);
    })

    var bacteriaInput = document.querySelector(".input input").value;
    genus = bacteriaInput.split(" ", 2)[0].toLowerCase();
    console.log(genus)
    try{
        species = bacteriaInput.split(" ", 2)[1];
    }
    catch(e){
        species = "spp";
    }
});

function search(value) {
        return bacterias.filter((bacteria) => {
        return bacteria.toLowerCase().startsWith(value.toLowerCase());
    });
}